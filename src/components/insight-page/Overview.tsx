import {
  Flex,
  Heading,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  SimpleGrid,
  useBreakpointValue,
  PlacementWithLogical,
  Text,
} from "@chakra-ui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import useFetch from "../../hooks/useFetch";
import Callout from "../Callout";

interface StatCardProps {
  statLabel: string;
  statNumber: string;
  statHelpText?: string;
}
function StatCard({ statLabel, statNumber, statHelpText }: StatCardProps) {
  return (
    <Stat
      border="2px solid"
      borderColor="brand.accent"
      p="4"
      borderRadius="base"
    >
      <StatLabel fontSize="md">{statLabel}</StatLabel>
      <StatNumber color="brand.accent-200">{statNumber}</StatNumber>
      {statHelpText ? <StatHelpText>{statHelpText}</StatHelpText> : null}
    </Stat>
  );
}
const steps = [
  {
    title: "Scraping",
    description: "details",
    details:
      "Job listings from popular online job boards in the philippines are scraped for software developer jobs.",
  },
  {
    title: "Data processing",
    description: "details",
    details:
      "The scraped jobs are then processed to extract various details such as job location, salary, and tech stack.",
  },
  {
    title: "Data storing",
    description: "details",
    details: "The extracted data is then stored on a database.",
  },
  {
    title: "Visualization",
    description: "details",
    details:
      "Data is then retrieved by the frontend via an API and displayed as charts.",
  },
];
interface Job {
  job_title: string;
  location: string;
  salary: number | null;
  job_level: string | null;
  date_scraped: string;
}
interface JobData {
  data: Array<Job>;
  count: number;
}
export default function Overview() {
  const stepperOrientation = useBreakpointValue(
    { base: "vertical", sm: "vertical", md: "horizontal", xl: "horizontal" },
    { ssr: false }
  );

  const popOverPlacement = useBreakpointValue<PlacementWithLogical>(
    { base: "top-start", sm: "top-end", md: "top-start", xl: "top" },
    { ssr: false }
  );

  const url = import.meta.env.VITE_JOBS_ENDPOINT;
  const [{ isLoading, isError, data }] = useFetch<JobData>(url, {
    data: [],
    count: 0,
  });

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const jobsScrapedThisMonth = data.data.filter((job) => {
    const jobMonth = job.date_scraped.split("-")[1];
    return Number(jobMonth) === Number(currentMonth);
  });
  const totalJobsScraped = isError ? "error" : data.count;
  const jobCountMonth = jobsScrapedThisMonth.length;
  const jobCountWeek = jobsScrapedThisMonth.filter((job) => {
    const jobDate = job.date_scraped;
    const dayDifference = (
      (Number(currentDate) - Number(new Date(jobDate))) /
      86400000
    ).toFixed(0);
    return Number(dayDifference) <= 7;
  }).length;
  let firstDateScrape = "------";
  let lastDateScrape = "------";
  if (data.data.length > 0) {
    const startDate = new Date(data.data[data.count - 1].date_scraped);
    const lastDate = new Date(data.data[0].date_scraped);
    firstDateScrape = startDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    lastDateScrape = lastDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <Flex
      flexDirection="column"
      px={{ base: 2, sm: 8, md: 24, xl: 56 }}
      gap="6"
    >
      <Heading>Methodology</Heading>

      <Stepper
        size={{ base: "sm", sm: "sm", md: "md", xl: "lg" }}
        orientation={
          stepperOrientation === "vertical" ? "vertical" : "horizontal"
        }
        index={steps.length}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepNumber />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription as="div">
                <Flex align="center" gap="1" cursor="pointer">
                  <Popover placement={popOverPlacement}>
                    <PopoverTrigger>
                      <Button colorScheme="blue" size="xs">
                        {step.description}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      color="brand.text"
                      shadow="md"
                      border="1px solid"
                      borderColor="brand.accent200"
                      bgColor="brand.bg-200"
                    >
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Details</PopoverHeader>
                      <PopoverBody>{step.details}</PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Icon boxSize="5" as={IoIosInformationCircleOutline}></Icon>
                </Flex>
              </StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      <Heading>Jobs Scraped Overview</Heading>
      <SimpleGrid gap="4" columns={{ base: 1, sm: 1, md: 2, xl: 4 }}>
        <StatCard
          statLabel="Total Jobs Scraped"
          statNumber={isLoading ? "...." : totalJobsScraped.toString()}
          statHelpText={
            isLoading ? "..." : `${firstDateScrape} - ${lastDateScrape}`
          }
        ></StatCard>

        <StatCard
          statLabel="Jobs Scraped This Month"
          statNumber={isLoading ? "...." : jobCountMonth.toString()}
        ></StatCard>
        <StatCard
          statLabel="Jobs Scraped Past 7 Days"
          statNumber={isLoading ? "...." : jobCountWeek.toString()}
        ></StatCard>
        <StatCard
          statLabel="Last Scraped"
          statNumber={isLoading ? "...." : lastDateScrape}
        ></StatCard>
      </SimpleGrid>

      <Callout title="INITIAL DATA LOADING" type="inform">
        <Text
          fontSize={{ base: "2xl", sm: "2xl", md: "4xl", xl: "4xl" }}
          fontWeight="bold"
          textAlign="center"
          color="blue.900"
        >
          INITIAL LOADING OF DATA MAY TAKE AT MOST 1 MINUTE.
        </Text>
      </Callout>

      <Callout title="Disclaimer" type="error">
        The data may not fully represent the actual software developer job
        market in the country. Continuous refinement of the data extraction and
        analysis processes will be worked on to ensure the accuracy of the
        visualizations.
      </Callout>
    </Flex>
  );
}
