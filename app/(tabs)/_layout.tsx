import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Bem-Vindo',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Confirmação',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'send' : 'send-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="recuperacao"
        options={{
          title: 'Recuperação',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'lock-open' : 'lock-open-outline'} color={color}/>
          )
        }}
      />
      <Tabs.Screen 
        name="modificacao"
        options={{
          title: 'Modificação',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'accessibility' : 'accessibility-outline'} color={color}/>
          )
        }}
      />
    </Tabs>
  );
}
