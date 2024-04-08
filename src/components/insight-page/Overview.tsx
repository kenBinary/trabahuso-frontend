import {
  Flex,
  Heading,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

interface StatCardProps {
  statLabel: string;
  statNumber: string;
  statHelpText?: string;
}
function StatCard({ statLabel, statNumber, statHelpText }: StatCardProps) {
  return (
    <Stat border="1px solid black" p="4" borderRadius="base" width="50%">
      <StatLabel>{statLabel}</StatLabel>
      <StatNumber>{statNumber}</StatNumber>
      {statHelpText ? <StatHelpText>{statHelpText}</StatHelpText> : null}
    </Stat>
  );
}

export default function Overview() {
  return (
    <Flex
      flexDirection="column"
      px="56"
      py="4"
      gap="2"
      outline="1px solid black"
    >
      <Heading>Jobs Scraped Overview</Heading>
      <Flex gap="4">
        <StatCard
          statLabel="Total Jobs Scraped"
          statNumber="5000"
          statHelpText="feb 1, 2024 - feb 29, 2025"
        ></StatCard>

        <StatCard
          statLabel="Jobs Scraped This Month"
          statNumber="123"
        ></StatCard>
        <StatCard
          statLabel="Jobs Scraped Past 7 Days"
          statNumber="23"
        ></StatCard>
        <StatCard statLabel="Last Scraped" statNumber="Jan 23, 2024"></StatCard>
      </Flex>
    </Flex>
  );
}
