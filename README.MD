-------------- Store ------------------------->

     Store is a react native application allowing users 
     to sell stuffs they don't need anymore.
     Actually under development

----------- Environment set up ----------------->

    - npx pod-install ios
    - Install node
    - generate a new React native project
    - npx react-nao debug the app but don't forget to remove them
    - If we want to activtive start -> TO start the server
    - npx react-native run-ios -> To run the app on IOS
    - Use console.log() tate auto import: 
          -> Create a file jsconfig.json in he root
          -> Add: { "exclude": ["node_modules"] }

------------- Fundamentals -------------------->

    - Use the SafeAreaView to cover the noch on the IOS screen
    - numberOflines={1} -> to show the number of the line of a text

    ---------Images ------------->
    - Serve local images:
       <Image source={require("./src/assets/icon.png")} />
    - Serve URL images
        <Image source={{ uri: "https://picsum.photos/200/300",width: 200,height: 300,}}/>
    - We can set: blurRadius={10} image
                  fadeDuration={1000}
       All these can be found on the docs

    ---------Touchables and omPress() ------------->
    - onPress={handlePress} -> on some of the components to do something
    - TouchableWithoutFeedback
    - TouchableOpacity
    - TouchableHighlight
    NB: We can add to all these onPress() action

    --------- button ------------->
    - <Button color="orange" title="Click me" onPress={} />

    --------- Alert ------------->
    - alert("Something happened")
    - We can also use the API Alert of react native to prompt text
      onPress{() => Alert.alert("title", "message", [
    {test: "yes", onPress: () => ......,}
    {test: "No", onPress: () => ......,}
    ])


----------- Layouts  --------------->

    - console.log(Dimensions.get("screen")); Get the dimention of the device
    - Use Dimensions hooks to control the rotation 
      -> npm i @react-native-community/hooks
      -> import {useDimensions} from "@react-native-community/hooks";
       This dimensions hooks will always return the dimension of the screen during orientation
      -> console.log(useDeviceOrientation()) -> always return the landscape and portrait mode

    backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? '100%' : '30%',

   
    ---------- Flexbox------------------------->
    - flex: 1 will take all the free available 
    - flex: 0.5 will take 50% of available place of it parent
    - flexDirection: row, row-reverse, column and column-raeverse -> Position horizontal or vertical
    - jsutifyContent: center: in the middle
                      flex-end: push at the end
                      flex-start: At the start
                      space-around -> Putting an equal space around them but not at the end borders
                      space-evenly -> Putting equal space fro all elements
                      space-between -> Push the first andend item to the corner and the middle one in the middle
    - alignItems: center, baseline, flex-end, flex-start, stretch
         -> Align an items base on it horizontal axis
    - alignSelf: flex-start -> can be applied to an individual element
    - alignContent: center -> Determine the position of the entire content.
    - flexWrap: noWrap, wrap for the elements to fit the screen
    - flexBasis and flexGrow, flexShrink -> Help shrink items to fit them all on the screen

    ---------- Positionning elements------------------------->
    - In React-native all parents position are relative by default
      The position concept is to give position: relative to parent 
      and absolute to the children if we want to move the children freely.
      Since parents are by default relative, we good.
      otherwise absolute






----------- Styles ------------------>

    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.os === 'android' ? StatusBar.currentHeight: 0,
