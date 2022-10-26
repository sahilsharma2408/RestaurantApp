import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <ScrollView 
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingBottom: 10
        }}
        showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imageUrl='http://links.papareact.com/gn7' title="Testing1" />
      <CategoryCard imageUrl='http://links.papareact.com/gn7' title="Testing2" />
      <CategoryCard imageUrl='http://links.papareact.com/gn7' title="Testing3" />
      <CategoryCard imageUrl='http://links.papareact.com/gn7' title="Testing4" />
      <CategoryCard imageUrl='http://links.papareact.com/gn7' title="Testing5" />
      <CategoryCard imageUrl='http://links.papareact.com/gn7' title="Testing6" />
    </ScrollView>
  )
}