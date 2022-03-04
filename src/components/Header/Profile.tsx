import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
        <Box mr="4" textAlign="right">
            <Text>Deividson Sabino</Text>
            <Text color="gray.300" fontSize="small">deividsonsabino@outlook.com.br</Text>
        </Box>
        <Avatar
            size="md"
            name="Deividson Sabino"
            src="https://github.com/deividsonsabino.png"
        />
    </Flex>
    )
}