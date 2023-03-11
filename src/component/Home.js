import React, {useState,useRef,useEffect} from "react";
import {Animated,Dimensions,ImageBackground,View} from "react-native";
import SearchItem from './SearchItem';
import Card from './Card';
import Category from './Category';
import categoryList from '../data/CategoryList'
import productList from '../data/ProductList'

function Home() {

    const [list,setList]=useState();
    const [headerVisible,setHeaderVisible]= useState(false); 
    const [animTransform,setAnimTransform]=useState();
    
    const {width,height}= Dimensions.get('window')
    const headerHeight= height * 0.75

    const searchRef= useRef()
    const scrollY= useRef(new Animated.Value(0)).current

    const headerBgImg= require('../asset/image/background/note-thanun-gQekwa7JK0k-unsplash.jpg')
    const bodyBgImg= require('../asset/image/background/annie-spratt-X4l3CjcDvic-unsplash.jpg')

    useEffect(() => { 
        handleHeader() 
    },[animTransform,headerHeight,headerBgImg])

    useEffect(() => { 
        updateList()
    },[])
    
    useEffect(() => {
		if(headerHeight){
			const animTransformImage=    
				[
					{
						translateY: scrollY.interpolate({
							inputRange:[-headerHeight,0,headerHeight],
							outputRange: [-headerHeight/2,0,-headerHeight]
						})
					},
					{
						scale: scrollY.interpolate({
							inputRange:[-headerHeight,0,headerHeight],
							outputRange: [2,1,0]
						})
					}
				]
			const animTransformSearch=    
				[
					{
						translateY: scrollY.interpolate({
							inputRange: [0,headerHeight*0.5,headerHeight],
							outputRange: [headerHeight*0.5,-headerHeight*0.5,-headerHeight],
							extrapolate: 'clamp',
						})
					},
				]
			const animTransformCat=    
				[
					{
						translateY: scrollY.interpolate({
							inputRange: [0,headerHeight*0.5,headerHeight],
							outputRange:  [0,-headerHeight*0.5,-headerHeight],
						})
					},
				]
			const animTransformList= 
				[
					{
						translateY: scrollY.interpolate({
							inputRange: [0,headerHeight*0.5,headerHeight],
							outputRange: [0,-headerHeight*0.5,-headerHeight],
							extrapolate: 'clamp',
						})
					},
				]
			
			setAnimTransform({
				list: animTransformList,
				image: animTransformImage,
				search: animTransformSearch,
				cat: animTransformCat,
			})
		}
     },[headerHeight])

	async function onChangeHandler(){
		// function to trigger search api on searchbar input change
	}

	const SearchCard= () => {
		const topStyle= headerHeight*0.35
		
		return(
			<Animated.View 
				style={[
					{   
						transform: animTransform.search,
						width: width * 0.75,
						position:'absolute',top:topStyle,left:'15%'
					}   
				]}                
			>   
				<SearchItem 
					ref={searchRef}
					placeholder="search"
					onChangeHandler={onChangeHandler}
				/>
			</Animated.View>
		)
	}

     const HomeHeader= () => {
        
		return (
			<View style={{alignItems: 'center' }}>
				<Animated.Image 
					source={headerBgImg}
					resizeMode= "cover" 
					style={{
						transform: animTransform.image, 
						height: headerHeight,
						width:'100%'
					}}
				/>
				<SearchCard />         
			</View>
		)
     }
    
     const CardFlatlist= () => {
		const paddingBottomLen= list.length*130

        	return (                         
                <ImageBackground
                    source={bodyBgImg}
                    resize= 'cover'
                >
                    <Animated.FlatList 
                        data={list}
                        renderItem={({item,index}) => <Card data={item} />}
                        keyExtractor={item=>item.id}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        numColumns={2}
                        horizontal={false}
                        contentContainerStyle={
                            {paddingHorizontal:'2%',width: width,paddingBottom: paddingBottomLen}
                        }
                        onScroll= {
                            Animated.event(
                                [
                                    { nativeEvent: {
                                        contentOffset:{ y: scrollY}
                                    }}
                                ],{useNativeDriver:true}
                                )
                            }
                            />
                </ImageBackground>          
        	)
     }

	async function updateList(){
		setList(productList)
	}

     async function handleHeader(){
        if(animTransform && headerHeight && headerBgImg) setHeaderVisible(true)
        else setHeaderVisible(false)
     }

     return (
        <View>                                 
			{headerVisible && <HomeHeader />}              

			{categoryList?.length>0 && animTransform  && 
				<Animated.View style={{transform: animTransform.cat}}>
					<Category data={categoryList} />
				</Animated.View>
			} 

			{bodyBgImg && animTransform && list && 
				<Animated.View style={{transform: animTransform.list}}>
					<CardFlatlist />
				</Animated.View>
			}    
        </View>
     );
}

export default Home;
