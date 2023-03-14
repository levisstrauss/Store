-------------- Store ------------------------->

     Store is a react native application allowing users 
     to sell stuffs they don't need anymore.
     Actually under development

----------- Environment set up ----------------->

    - Install node
    - generate a new React native project
    - npx react-native start -> TO start the server
    - npx react-native run-ios -> To run the app on IOS
    - Use console.log() to debug the app but don't forget to remove them
    - If we want to activate auto import: 
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




----------- Styles ------------------>

    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.os === 'android' ? StatusBar.currentHeight: 0,
