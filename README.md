##first steps (0.54-RC)

* npm install -g create-react-native-app
* create-react-native-app AwesomeProject
* cd AwesomeProject
* npm start
* //Start Android emulator//
* react-native run-android
* yarn run android





create-react-native-app miproject  
yarn run ios  /  react-native run-ios  
npm install --save axios  

##Enlaces interesantes

* [A declarative library for application development using cloud services with JavaScript. The default implementation works with Amazon Web Services (AWS) resources](https://github.com/aws/aws-amplify)
* [AWS Mobile React Native Starter App](https://github.com/awslabs/aws-mobile-react-native-starter)
* [Mobile Hub](https://www.youtube.com/watch?v=VoRFXHHzHMw)





## Mobile Hub Sign-in
* yarn add aws-amplify-react-native
* ( npm run eject )
* react-native link amazon-cognito-identity-js
* yarn run android

## Expo - React Native Authentication with Expo, AWS Amplify, & Cognito
* [32 min Expo - React Native Authentication with Expo, AWS Amplify, & Cognito](https://www.youtube.com/watch?v=5uPNmq8TUoA)
* [Configuring the AWSMobile CLI](https://www.youtube.com/watch?v=MpugaNKtw3k&t=86s&list=PLE9m_QqEHgX2azRbYX-ZyqLiq03YYldw0&index=1)
```bash
|| npm i -g awsmobile-cli

create-react-native-app RNExpoAuthProject
cd RNExpoAuthProject

awsmobile configure  	# access keys   

awsmobile init			# creates mobile hub directory
?  1 = .  2 = default 3 = default 4 = default 5 name = RNExpoAuthProject

awsmobile user-signin enable
awsmobile push
yarn / npm install

# ir a 6'22" para empezar con estilos del formulario
```

