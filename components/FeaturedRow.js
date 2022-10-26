import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

export default function FeaturedRow({ id, title, description}) {
  return (
    <View>
      <View className="mt-4 px-4 flex-row items-center justify-center">
        <Text className="flex-1 text-lg font-bold">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

        <Text className="p-4 text-gray-500 text-xs">
            {description}
        </Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingBottom: 10
            }}
            showsHorizontalScrollIndicator={false}
        >
            {/* Restaurant Card */}
            <RestaurantCard 
                id="123"
                imgUrl="http://links.papareact.com/gn7"
                title="Yo! Sushi!"
                rating={4.3}
                genre="Japanese"
                address="123 main st."
                short_description="This is test description"
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard 
                id="123"
                imgUrl="http://links.papareact.com/gn7"
                title="Yo! Sushi!"
                rating={4.3}
                genre="Japanese"
                address="123 main st."
                short_description="This is test description"
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard 
                id="123"
                imgUrl="http://links.papareact.com/gn7"
                title="Yo! Sushi!"
                rating={4.3}
                genre="Japanese"
                address="123 main st."
                short_description="This is test description"
                dishes={[]}
                long={20}
                lat={0}
            />
        </ScrollView>
    </View>
  )
}