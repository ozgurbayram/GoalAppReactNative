import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<StatusBar style="light" backgroundColor="#EB5757"/>
				<Navigation colorScheme={colorScheme} />
			</SafeAreaProvider>
		);
	}
}
