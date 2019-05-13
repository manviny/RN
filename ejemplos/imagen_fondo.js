// Vistamos la documentación de RN y veremos que tenemos un componente llamado ImageBackground
// https://facebook.github.io/react-native/docs/imagebackground


  render() {
    return (
      <View style={styles.root}>
        <TextInput style={styles.textInput} placeholder="TextInput" />
        <Button11 style={styles.button11} />
        <Image
          style={styles.image}
          source={require("../assets/las-tormentas-castigaron-duramente-las-provincias-del-norte-como-sigue-el-tiempo-22171-2.jpg")}
        />
      </View>
    );


...

  image: {
    top: 0,
    left: -375,
    width: 1148,
    height: 812,
    position: "absolute"
  },
