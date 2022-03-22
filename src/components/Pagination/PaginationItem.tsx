import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
}

export function PaginationItem({ isCurrent = false, number }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size="small"
                fontSize="sx"
                width="6"
                colorScheme="pink"
                disabled
                _disabled={{
                    bg: 'pink.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        )
    }

    return (
        <Button
            size="small"
            fontSize="sx"
            width="6"
            bgColor="gray.700"
            _hover={{
                bg: 'gray.500'
            }}

        >
            {number}
        </Button>
    )

}