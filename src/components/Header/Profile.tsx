import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData &&
                (
                    <Box mr="4" textAlign="right">
                        <Text>Deividson Sabino</Text>
                        <Text color="gray.300" fontSize="small">deividsonsabino@outlook.com.br</Text>
                    </Box>
                )
            }

            <Avatar
                size="md"
                name="Deividson Sabino"
                src="https://github.com/deividsonsabino.png"
            />
        </Flex>
    )
}