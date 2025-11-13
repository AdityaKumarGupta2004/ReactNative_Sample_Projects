import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ExternalLink } from '@/components/ExternalLink';

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f4eadd', dark: '#2c2c2c' }}
      headerImage={
        <IconSymbol
          size={280}
          color="#b98566"
          name="cup.and.saucer.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Explore More Brews</ThemedText>
        <ThemedText style={styles.subtitle}>
          Dive deeper into our handcrafted menu and seasonal specials.
        </ThemedText>

        <ThemedView style={styles.card}>
          <Collapsible title="Espresso Creations">
            <ThemedText>
              Discover our rich and bold espresso range — from classic shots to velvety lattes.
            </ThemedText>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1541167760496-1628856ab772' }}
              style={styles.image}
            />
          </Collapsible>
        </ThemedView>

        <ThemedView style={styles.card}>
          <Collapsible title="Iced & Cold Brews">
            <ThemedText>
              Chill out with cold brew, iced caramel macchiatos, and more refreshing options.
            </ThemedText>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1527169402691-a3f97e116d4f' }}
              style={styles.image}
            />
          </Collapsible>
        </ThemedView>

        <ThemedView style={styles.card}>
          <Collapsible title="Fresh Pastries">
            <ThemedText>
              Enjoy croissants, banana bread, muffins, and seasonal baked treats daily.
            </ThemedText>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1546833999-b9b3b6e2f69b' }}
              style={styles.image}
            />
          </Collapsible>
        </ThemedView>

        <ThemedView style={styles.card}>
          <Collapsible title="Our Bean Story">
            <ThemedText>
              Ethically sourced beans from Colombia, Ethiopia, and more — roasted in-house for
              perfection.
            </ThemedText>
            <ExternalLink href="https://www.rainforest-alliance.org/article/what-is-sustainable-coffee/">
              <ThemedText type="link">Learn more</ThemedText>
            </ExternalLink>
          </Collapsible>
        </ThemedView>

        <ThemedView style={styles.card}>
          <Collapsible title="Vegan Friendly">
            <ThemedText>
              Almond, oat, and soy milk options available for all drinks and treats.
            </ThemedText>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1581338834647-b1dba5f9b479' }}
              style={styles.image}
            />
          </Collapsible>
        </ThemedView>

        {Platform.OS === 'ios' && (
          <ThemedView style={styles.card}>
            <Collapsible title="Apple Wallet Deals">
              <ThemedText>
                Add our loyalty card to Apple Wallet and unlock exclusive rewards ☕🍎
              </ThemedText>
            </Collapsible>
          </ThemedView>
        )}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -80,
    left: -30,
    position: 'absolute',
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 10,
    gap: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#7a5d47',
    marginTop: 4,
    marginBottom: 16,
  },
  card: {
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#fdf7f3',
    // darkBackgroundColor: '#333',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    marginTop: 10,
    borderRadius: 10,
  },
});
