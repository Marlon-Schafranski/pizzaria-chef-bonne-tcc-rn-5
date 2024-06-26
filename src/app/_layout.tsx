import { SafeAreaView } from "react-native"
import { Slot } from "expo-router"

import {
    
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    useFonts
} from "@expo-google-fonts/inter"

import {Loading} from "@/components/loading"

export default function Layoult(){
    const[fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold, 
    })

if (!fontsLoaded) {
    return <Loading/>
    
}

    return (
    <SafeAreaView className="flex-1 bg-gray-300">
        <Slot />
    </SafeAreaView>
    )
}