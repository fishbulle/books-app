import { FlatList } from "react-native";
import { Baskerville } from "./MyFonts";

interface Props {
    data: any,
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
                <Baskerville style={style}>{item} </Baskerville>
            } />
    )
}