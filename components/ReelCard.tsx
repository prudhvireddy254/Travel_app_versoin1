import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleProp, TextStyle } from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Reel } from '../data/reels';
import { tw } from 'nativewind';

interface Props {
  reel: Reel;
}

export default function ReelCard({ reel }: Props) {
  const video = useRef<Video>(null);

  return (
    <View style={tw`rounded-xl shadow-lg bg-white mb-4`}>
      <Video
        ref={video}
        source={{ uri: reel.video }}
        style={tw`w-full h-64 rounded-xl`}
        useNativeControls
        resizeMode="cover"
        isLooping
      />
      <View style={tw`flex-row justify-around py-2`}>
        <TouchableOpacity><Icon name="heart" color="red" size={24} /></TouchableOpacity>
        <TouchableOpacity><Icon name="comment" color="gray" size={24} /></TouchableOpacity>
        <TouchableOpacity><Icon name="share" color="blue" size={24} /></TouchableOpacity>
      </View>
      <Text style={tw`px-4 pb-2 text-lg font-bold` as StyleProp<TextStyle>}>{reel.caption}</Text>
    </View>
  );
}