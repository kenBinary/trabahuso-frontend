import { Card, CardBody, CardHeader, Icon } from "@chakra-ui/react";
import { IoIosInformationCircle } from "react-icons/io";

interface Callout {
  title: string;
  type: "inform" | "warn" | "error";
  children: React.ReactNode;
}
export default function Callout({ children, title, type }: Callout) {
  const cStyle = {
    leftBorderColor: "blue.300",
    bgColor: "blue.50",
    titleColor: "blue.800",
    descriptionColor: "blue.900",
    icon: IoIosInformationCircle,
  };

  switch (type) {
    case "inform":
      cStyle.leftBorderColor = "blue.300";
      cStyle.bgColor = "blue.50";
      cStyle.titleColor = "blue.800";
      cStyle.descriptionColor = "blue.900";
      break;
    case "warn":
      cStyle.leftBorderColor = "yellow.300";
      cStyle.bgColor = "yellow.50";
      cStyle.titleColor = "yellow.800";
      cStyle.descriptionColor = "yellow.900";
      break;
    case "error":
      cStyle.leftBorderColor = "red.300";
      cStyle.bgColor = "red.50";
      cStyle.titleColor = "red.800";
      cStyle.descriptionColor = "red.900";
      break;
    default:
      break;
  }

  return (
    <Card
      variant="filled"
      size="sm"
      borderLeft="5px solid"
      borderLeftColor={cStyle.leftBorderColor}
      borderRadius="md"
      bgColor={cStyle.bgColor}
      boxShadow="lg"
    >
      <CardHeader
        padding="2"
        paddingLeft="3"
        fontWeight="bold"
        color={cStyle.titleColor}
        display="flex"
        alignItems="center"
        gap="2"
      >
        <Icon boxSize="7" color={cStyle.titleColor} as={cStyle.icon}></Icon>
        {title}
      </CardHeader>
      <CardBody color={cStyle.descriptionColor} padding="2" paddingLeft="3">
        {children}
      </CardBody>
    </Card>
  );
}
