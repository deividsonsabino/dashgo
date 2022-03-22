import {
    Box,
    Spinner,
    Button,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Text,
    useBreakpointValue
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {
    const { data, isLoading, error, isFetching } = useUsers()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header />

            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
                <Sidebar />
                <Box
                    flex="1"
                    rounded={8}
                    bg="gray.800"
                    p="8"
                >
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            {!isLoading && isFetching && <Spinner size="md" color="gray.500" ml="4" />}
                        </Heading>
                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    {isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex>
                            <Text>Falha ao obter dados dos usuários</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table
                                colorScheme="whiteAlpha"
                            >
                                <Thead>
                                    <Tr>
                                        <Th px={["4", "4", "6"]} color="gray.300" w="8">
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>Usuário</Th>
                                        {isWideVersion && (<Th>Data de cadastro</Th>)}
                                        <Th w="8"></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.map(user => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td px={["4", "4", "6"]}>
                                                    <Checkbox colorScheme="pink" />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Text fontWeight="bold">{user.name}</Text>
                                                        <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                                    </Box>
                                                </Td>
                                                {isWideVersion && (<Td>
                                                    {user.createdAt}
                                                </Td>)}
                                                <Td>
                                                    {isWideVersion && (
                                                        <Button
                                                            as="a"
                                                            size="sm"
                                                            fontSize="sm"
                                                            colorScheme="purple"
                                                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                                        >
                                                            Editar
                                                        </Button>
                                                    )}
                                                </Td>
                                            </Tr>
                                        )
                                    })}
                                </Tbody>
                            </Table>
                            <Pagination />
                        </>
                    )}
                </Box>

            </Flex>
        </Box>
    )
}