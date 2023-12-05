
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Login: undefined;

    Dashboard: undefined;
    BottomTab: undefined;
    Account: { userId: string };
    CreateAccount: { item: object };
};

export type Props = NativeStackScreenProps<RootStackParamList>;