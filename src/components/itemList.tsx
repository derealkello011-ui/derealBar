import { useTheme } from '@/constants/ThemeContext';
import { StyleSheet, View } from 'react-native';

interface ItemListProps {
    color: string;   // accent color
    count?: number;
}

const ItemList = ( { color, count = 4 }: ItemListProps ) => {
    const { colors } = useTheme();

    return (
        <View style={styles.list}>
            {Array.from( { length: count } ).map( ( _, index ) => (
                <View
                    key={index}
                    style={[
                        styles.item,
                        {
                            backgroundColor: colors.card,
                            borderColor: color,
                            opacity: 1 - index * 0.2,
                        },
                    ]}
                >
                    {/* accent bar + placeholder lines; replace with real content */}
                    <View style={[ styles.accent, { backgroundColor: color } ]} />
                    <View style={styles.lines}>
                        <View style={[ styles.line, { width: '60%', backgroundColor: colors.border } ]} />
                        <View style={[ styles.line, { width: '30%', backgroundColor: colors.border } ]} />
                        <View style={[ styles.line, { width: '80%', backgroundColor: colors.border } ]} />
                    </View>
                </View>
            ) )}
        </View>
    );
};

const styles = StyleSheet.create( {
    list: {
        alignItems: 'center',
    },
    item: {
        width: '80%',
        height: 120,
        marginTop: 12,
        borderRadius: 20,
        borderWidth: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    accent: {
        width: 6,
        height: '100%',
        borderRadius: 3,
    },
    lines: {
        flex: 1,
        marginLeft: 16,
        gap: 12,
    },
    line: {
        height: 12,
        borderRadius: 6,
    },
} );

export default ItemList;
