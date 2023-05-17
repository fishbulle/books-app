import { FlatList } from "react-native";
import { ChampagneFont } from "./MyFonts";

interface Props {
    data: string[],
    horizontal: boolean,
    cols: number,
    style: {}
}

export default function List({ horizontal, cols, data, style }: Props) {
    return (
        <FlatList
            horizontal={horizontal}
            numColumns={cols}
            data={data}
            renderItem={({ item }) =>
                <ChampagneFont style={style}>{item} </ChampagneFont>
            } />
    )
}