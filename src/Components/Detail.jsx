import React from "react";

import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const Details = () => {
  const ProjectData = [
    {
      title: "Back Pain",
      image:
        "https://user-images.githubusercontent.com/104376252/230656406-89a429b9-6feb-4973-8fee-19eb074251a5.jpg"},
    {
      title: "Sports Injury",
      image:
        "https://user-images.githubusercontent.com/104376252/230656974-a7516595-0d07-4be5-b063-a7dae5fda46f.jpg",
    },
    {
      title: "Knee Pain",
      image:
        "https://user-images.githubusercontent.com/104376252/230657074-8d3dd949-f576-46cd-ab94-19a150e2a778.jpg",
    },
    {
      title: "Physiotherapy for Paralysis",
      image:
        "https://user-images.githubusercontent.com/104376252/230657241-e729d902-8aa7-4fe6-89b8-21e1973474d7.jpg",
    },{
        title:"Muscle Pain",
        image:"https://user-images.githubusercontent.com/104376252/230657393-0f8410e8-c2e8-428b-83d0-686e0eb4c08a.jpg"
    }, {
        title: "Shoulder Pain",
        image:
          "https://user-images.githubusercontent.com/104376252/230657688-ca5e9086-a707-4e17-a063-41b7422497af.jpg",
      }, {
        title: "Ankle Pain",
        image:
          "https://user-images.githubusercontent.com/104376252/230657851-daf70170-71a2-49ea-9faa-0511d3bd1dc0.jpg",
      }, {
        title: "Spondylitis Pain",
        image:
          "https://user-images.githubusercontent.com/104376252/230658061-85ca170b-b5a5-49e3-8e03-660a279bb9a4.jpg",
      }
   
  ];
  return (
    <Box mt={5} mb={10} id="projects">
      <Heading color={"blue.500"}>Conditions We Treats</Heading>
      <SimpleGrid columns={[1, 1, 2, 4]} spacing={4} mt={8}>
        {ProjectData.map((t) => {
          return (
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              border="1px solid"
              borderColor={"gray.300"}
              rounded={"xl"}
              mx={8}
              p={2}
            >
              <Image src={t.image} />
              <Text fontSize={"1.3rem"} fontWeight="700">{t.title}</Text>
            </Stack>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Details;
