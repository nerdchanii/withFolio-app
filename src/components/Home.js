import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title, style}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
};

const Header = ({children}) => {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderText}>{children}</Text>
    </View>
  );
};

export default function Home() {
  return (
    <View style={styles.container}>
      <Header title="Header">WIF</Header>
      <Section title="Hello">Service is preparing to start.</Section>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
    fontStyle: 'italic',
  },
  HeaderContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  HeaderText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 'auto',
  },
});
