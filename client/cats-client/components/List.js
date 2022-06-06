import { gql, useQuery } from "@apollo/client";
import { View, Text } from "react-native";

const GET_POSTS = gql`
    query GetPosts {
        posts {
            id
            title
            description
            author
            image
            likes
            createdAt
        }
    }
`;

export default function List() {
    const { loading, error, data } = useQuery(GET_POSTS);
    console.log(data);
    return (
        <View>
            <Text>Test</Text>
        </View>
    )
}