import { ReactElement } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

type CardStyledProps = {
  title: string;
  image?: string;
  content: string;
  actions: ReactElement;
};

const CardStyled = (props: CardStyledProps) => {
  const { title, image, content, actions } = props;

  return (
    <View style={styles.card}>
      <View style={{ display: 'flex', flexDirection: 'column', padding: 8, gap: 16 }}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        {title && (
          <View style={{ display: 'flex', width: '100%' }}>
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
        {content && <Text style={styles.content}>{content}</Text>}
        {actions && <View style={styles.actions}>{actions}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    margin: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    maxHeight: 150,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  content: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default CardStyled;
