import { View } from "react-native"
import BookCard from "../components/BookCard"

const HomeScreen = () => {

    // komponenter:
    // böcker med info
    // knapp (MyButton) för att visa mer info i en modal
    // lista på genres

    return (
        <View>
            <BookCard />
        </View>
    )
}

export default HomeScreen