import { Modal, View } from "react-native";
import { Baskerville, BaskervilleBold } from "./MyFonts";
import { MyButton } from "./MyButton";

interface Props {
    visible: boolean,
    onRequestClose(): void,
    style: {},
    children: {},
    title: string,
    handlePress(): void
}

export default function ModalComp({ visible, onRequestClose, style, children, title, handlePress }: Props) {

    return (
        <Modal
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <View>
                <BaskervilleBold style={style}>{children}</BaskervilleBold>
                <Baskerville style={style}>{children}</Baskerville>
                <MyButton
                    title={title}
                    handlePress={handlePress}
                    style={style}
                    buttonStyle={style} />
            </View>
        </Modal>
    )
}