/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageProps,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  PermissionsAndroid,
  Dimensions
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RNFetchBlob from 'rn-fetch-blob';

import TextRecognition from '@react-native-ml-kit/text-recognition';
import RNFS from 'react-native-fs';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

interface TextRecognitionProps {
  imageURL: string;
  title: string;
}

async function requestStoragePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Storage Permission",
        message: "This app needs access to your storage to download Photos.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the storage");
    } else {
      console.log("Storage permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}

function TextRecognitionComponent({ imageURL, title }: TextRecognitionProps): JSX.Element {
  const [result, setResult] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const recognizeText = async () => {
      try {
        // Request storage permission
        await requestStoragePermission();

        const imagePath = 'file:///sdcard/Pictures/image.jpg'
  
        // Recognize text
        const recognitionResult = await TextRecognition.recognize(imagePath);
        console.log(recognitionResult.text);
        setResult(recognitionResult.text);
  
        // Remember to delete the image file after you're done with it
        await RNFetchBlob.fs.unlink(imagePath);
      } catch (error) {
        console.error(error);
      }
    };
  
    recognizeText();
  }, [imageURL]);

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {result ? `Recognition Result: ${result}` : 'Recognizing...'}
      </Text>
    </View>
  );
}

interface ImageComponentProps {
  imageUrl: string;
}


const ImageComponent: React.FC<ImageComponentProps> = ({ imageUrl }) => {
  const imageProps: ImageProps = {
    source: {
      uri: imageUrl,
    },
    style: styles.image,
  };

  return (
    <View style={styles.container}>
      <Image {...imageProps} />
    </View>
  );
};

interface ViewLayout {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
}



function App(): JSX.Element {
  const imageUrl: string = 'https://i.imgur.com/Ve37e8i.jpeg';
  const [layout, setLayout] = useState<ViewLayout | null | number>(null);

  
  
  const onLayout = (event: any) => {
    const { width, height, x, y } = event.nativeEvent.layout;
    let layout : ViewLayout = {
      width,
      height,
      x,
      y,
    };
    let xs = 12;
    setLayout(xs);
  };

  const blocks = [
    {
        "BlockType": "PAGE",
        "Geometry": {
            "BoundingBox": {
                "Width": 1,
                "Height": 1,
                "Left": 0,
                "Top": 0
            },
            "Polygon": [
                {
                    "X": 0,
                    "Y": 8.655641892119093e-8
                },
                {
                    "X": 1,
                    "Y": 0
                },
                {
                    "X": 1,
                    "Y": 1
                },
                {
                    "X": 1.1396469545843502e-7,
                    "Y": 1
                }
            ]
        },
        "Id": "1aa98df7-2871-4472-ab66-291f37276643",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "21c6ee55-1df6-41ce-8de5-aa4e5dde7091",
                    "b2f2a4db-d90f-4ec0-8e3d-390f6768e8cf",
                    "578dbac5-4472-459e-9148-d046fe55f88f",
                    "443b6201-18ea-448a-a683-b3364fb60a03",
                    "8dfa1f5c-68c4-40f1-8c2b-4ad39ffdfb56",
                    "4e22d78b-55b2-4829-b949-038c1242446b",
                    "02eb5661-f9f7-4d8c-84a4-e7269eeac80e",
                    "1d0256d2-fe00-44b0-8cb9-638082a761e0",
                    "b7effce2-53f9-4bf3-b7e9-9be98e1bc055",
                    "1136e593-772f-4344-b0c0-424c7c760f84",
                    "f4099a13-3d1b-49a4-8d0d-ec9ce86971b7",
                    "561f8794-589f-4162-a308-8ad45da7f21f",
                    "1a03cda8-5557-4e49-a169-ffd94ec1b2cd",
                    "c18120d2-8efe-4a43-9143-9ed4112874f3",
                    "fe72d11e-4081-48c2-ad9d-121af416af8b",
                    "f14c3960-0595-4a3e-90cc-a20d40f041cb",
                    "ba95d2f1-e425-4cf2-8340-b2922445526b",
                    "67f8aae6-951b-4386-a442-df1d7769c83f",
                    "8e48e914-f216-40da-be35-028bb59b316b",
                    "f7b67ed1-5393-4a69-ac09-544b2dac4039",
                    "21cbf248-bcdc-400c-a61d-0489bb95de1c",
                    "aa8f66fe-d4ef-40c0-a3de-bf986792a430",
                    "75677656-aa11-4c51-9781-3e25f2d8d9c3",
                    "88ca53dc-5237-49d7-8de7-eeee166f80e1",
                    "d536b3d3-b6b9-4351-a9d7-61a4b0aac5ea",
                    "6a699291-9f65-4f61-b0b8-53c42589519d",
                    "8b204480-7ab6-4dbb-adcb-e770dff47b71",
                    "057ae48f-1ac2-4652-b529-ce2474d48158",
                    "9e8cacbd-7a7b-4d51-a36d-c71412cc69ae",
                    "968193d1-7a14-47e1-aac9-2db1d54aa42e",
                    "cfd65ec2-e1a8-47c5-9573-95664aa3fe25",
                    "8ee7ddf8-5306-43d6-8b2b-402e5357e0c4",
                    "99bd699c-af23-4de9-83b2-7350dbc7c109",
                    "414fee57-76fb-45d7-8ef4-2b5a6be2ce74",
                    "d7637409-4511-4e92-bd9e-f72842c960be",
                    "8148500a-5b41-4fdc-ad43-ee72a39f1edd",
                    "f2501764-c53c-43a5-bdb8-06e50ea0a351",
                    "43a924bb-3bc0-4f67-8c8d-78da71da27d0",
                    "7ad31d8b-cc69-413d-8ff5-101e1d73519a",
                    "c84e0772-2c39-41e0-8e35-39bfcbeeaa4d",
                    "7dd70358-74df-4a66-b901-877700e7196c",
                    "23c1eb30-88c1-487b-ad2a-ed315e760293",
                    "0d4acd84-f034-4d30-bbfe-8ad281a21cf2",
                    "6743c22f-bb6c-43a0-b777-ecf4f45679fa",
                    "99b1ee72-925e-415a-9585-b8e8536127ae",
                    "022c513a-6cf3-4c9e-9466-69b2cf80ab8c",
                    "cf318a22-59ce-4f07-864f-ddbfe27ff729",
                    "d8fd945c-e32f-4a02-af24-9a027848db4f",
                    "3e3e1143-2173-4714-a940-902b3629aaac",
                    "ab8d82cd-333b-4ce3-b06c-25854e1b86b7",
                    "113bd7bf-8604-4df2-8529-b3bb6f79eda2",
                    "35025bb0-1933-426c-9635-7182d80e4140",
                    "8c6476dc-9171-4fdb-9c93-91ca878a8d57",
                    "9429953d-e4e1-4dd8-8b59-03289bd31fc0",
                    "70fe1cac-b0d8-4b52-83be-908b4a0e4a1a",
                    "0f567db7-a56f-42e6-a920-3cb7f16853c9",
                    "fbd43368-e4b7-45dc-9529-12b59ae68f2a",
                    "7221e6c7-6cf9-42f4-8c7d-6cd656e398d8",
                    "3f48c293-c910-482a-829e-6fbdf58798d6",
                    "69907a0e-f775-48e4-af10-034a64745fb5",
                    "e568a6c7-7f09-4a79-b800-879ad80dfafd",
                    "c18b929e-a0dc-4f4f-8614-e85e9fa125d7",
                    "fec3c795-6438-402d-9fbe-e9ecb7f2e04e",
                    "65bd9a29-cbaa-424d-9f48-8417a125669b",
                    "2efc242f-ba91-4e53-954d-122e9b859904",
                    "8f9a9c4c-7a2f-4d99-aa04-fa392ea44e4d",
                    "9e538313-ee78-46d4-9b50-7de968fd56b8",
                    "5474ede5-a460-4d47-8ab9-9dc78e4c024e",
                    "5482202b-e56e-4de8-8153-219175ac65f7",
                    "15366c06-8ebf-4749-8c4d-151f306fed14",
                    "e4899ec5-fd87-41b1-8c18-939aa8c03f93",
                    "f68ed914-1454-416b-beee-eb7749d0b517",
                    "3369b517-ca96-4094-bccf-fc56ca416b7d",
                    "f0fe2e56-60be-443f-9a11-d0f2b031e074",
                    "a2d7eb4b-d13f-4e3c-9618-bc7348d86f26",
                    "29f73e98-2a27-4b3e-8cda-00254305e573",
                    "7af295bc-1b13-4e08-8464-ecc35932254c",
                    "0c6d775b-e374-4410-a7de-b57ce0b2b5d2",
                    "e2b78b21-2a32-425d-b48f-52b16655c64c",
                    "15087d49-1af7-419e-ae84-ef5c883d6a1d",
                    "18e895c5-e7f7-488a-aa07-6f5e7ee5a62b",
                    "dc5b15d2-7d72-4c7e-b682-8a672f9587f1",
                    "0dd74a45-1398-4e09-8541-fa703cc41e71",
                    "357bbb94-f75a-4840-a0ed-95672052a510",
                    "0759a5ee-a9ca-48c2-b3ae-7c6b53c73619",
                    "d51e26b3-8cb2-4787-b3d4-5a5a8c6426b4",
                    "3111633b-ec91-413b-a11d-f6993f49a91c",
                    "667d6aee-269c-44c4-a466-218689e75c3b",
                    "33465f55-131a-4144-ac97-d827dbe0d1a5",
                    "6ded4a4b-fcc9-412a-ac6b-15f3f2a30e63",
                    "74cc0b83-0382-4f53-b14a-c84ab57578c4",
                    "265822c7-dfa0-45bb-92ae-1df6c734207b",
                    "7cd95be2-98de-496b-a668-2b27810efaa5",
                    "97823180-87a0-4847-ab1f-90b44131cd4c",
                    "95b0cd64-c4d4-4a07-9c4d-2f8634a13018",
                    "36b2ec10-fc00-4c0e-ad71-5ea04fa6ecfe",
                    "19cbc988-d3a5-4a07-8fac-b579128f097f",
                    "eb8e393d-cd6a-4bbd-a513-83ba94ebdcb9",
                    "bdf8f6a1-6466-4111-b34d-c82405ccb282",
                    "644b47aa-d7fc-4839-8e7b-8b7f560aa9be",
                    "242676d5-89d5-4c5e-b441-a4f6759e3860",
                    "e7743eb2-e570-4cb4-a7e7-6456e4d1fb05",
                    "0c2332d8-d461-4d89-9649-604da2246026",
                    "1ce9218e-e289-4f21-af03-c824b281c7b6",
                    "7d403f13-30a1-4fb5-9a90-06a57a5ed81b",
                    "9308776f-cae9-4124-977b-9b5358e57697",
                    "92bb0321-7815-4a8a-b40e-cb03eb631eaa",
                    "c6451ece-4e06-4c58-9303-0371f810032c",
                    "9de24328-e24c-4db0-b3af-4b5baff12e3b",
                    "e66a260a-34dc-4ecb-bd78-03bb826863f8",
                    "0c759519-6917-41fd-80e0-b49c69c98e30",
                    "9a41cffd-3089-4c9b-a064-c4ec2fa64fd8",
                    "cb2213cc-9628-40be-a6e8-6ffde9be4353",
                    "c4fbfd32-c05f-4e03-ac69-873003e8bd05",
                    "25387f2b-49b5-4a0c-8e34-dc6439272106",
                    "ef1a7732-dadd-44ec-a404-e8ea94d62424",
                    "df725699-be3c-40d4-b8fd-52498281135a",
                    "335d4a68-6ae1-4fdd-a7b7-9df19ec5faca",
                    "6aad27fa-c879-41b0-adb7-82dcbd45c401",
                    "8542ae1e-024b-4a86-8369-b7ff24dee87f",
                    "68babb9e-2f88-48a7-97f5-81eb49959b1e",
                    "2f6d3e92-6bbc-414f-9cea-23a499e758ca",
                    "67e83abd-d99f-4556-8fa9-4f5af92d4739",
                    "a08efac8-3e9b-43fc-b537-9cdd246ff23a",
                    "3cb724c7-bd75-4be3-82e4-265930662e9b",
                    "13869456-b758-487f-adae-33753d61ee21",
                    "8fce2a77-bdb0-48a0-98c4-a69aff8e2f92",
                    "fa6f8b29-62e2-4961-a24c-4915eba229ee",
                    "773c1dd3-4f95-4167-ac8b-151e6b7c6f25",
                    "76abc19e-d9ba-47ec-bc05-5669edee4a31",
                    "051516c3-5f0b-4feb-af02-f29027cc574c",
                    "e8d2b432-1eb0-424d-b48c-a0239e2d119f",
                    "2148eb80-3f9c-4a0c-b4b2-3e03924e4517",
                    "c5e5ceed-36a7-4f12-96f4-22be756a8c5e",
                    "974d8d85-3c43-4773-b270-5466360c31bb",
                    "f6ece164-3ec8-4577-a33b-30f5b3f63935",
                    "5baf0f35-5417-4af8-82af-0c5a86af5e77",
                    "4a6d7ee2-3d08-4ac3-bf55-1e6ccc3a0c27",
                    "2734d466-5057-4184-87b3-2debf83e7d31",
                    "f3afdeaf-1028-4209-a780-2b1f84cc6556",
                    "6d6cb38e-dfd1-42c7-a29e-cc381a4ac857",
                    "99e1216f-9136-43d5-9af2-675e0cb44530",
                    "877b702b-98dc-4c49-9bd7-1e6af199ff1f",
                    "61e433b4-7206-4afa-8489-6b0529e1c433",
                    "70bfc0c7-1734-4121-a06e-4a2be77bb707",
                    "172a8945-c2ce-422e-8fc2-9e3dbb3394b3",
                    "d7dbfc09-0204-4e36-9d6f-d4f9f07e44ea",
                    "5c113af2-b8bd-4477-9905-10eeab13fd99",
                    "4223a0e9-e81b-4554-9d28-0bf97a7c9094",
                    "213bb47d-f6d8-4163-afa5-5171b30a9711",
                    "66ebc1d0-f4e3-495d-a921-6ec6e44b4f33",
                    "905005fc-2b28-4a38-89af-61a1b81757de",
                    "18b178bc-8fa8-4487-9534-58697b7430eb",
                    "09273a5a-51bf-4133-a0a3-f6bbeccc6e7a",
                    "87d626ec-8374-4495-a702-8da7f405b589",
                    "3e76dd02-5046-429f-ad0a-f35b7515f49a",
                    "746e9a41-9caf-4537-92ff-797b0ee8bd38",
                    "a9fe1591-6bab-4bc9-8988-aced59dfb066",
                    "88cf6437-7f0d-4ce7-bc23-50ccabc86100",
                    "e3ea34a9-0ba8-47b7-90ff-83d131c3cd97",
                    "c0f4ebb4-8fb4-4651-a92c-cf042d91fb44",
                    "6c65dd3c-5124-4ea2-9f19-4058cc0f0422",
                    "87255dad-9f98-434c-b238-caf02fd6e22f",
                    "9f783b9c-620e-4303-b0cc-444ffa982201",
                    "d1536cd9-84fd-4b97-bfe2-4abd26544c48",
                    "c5de8735-5938-4970-8e8b-17a8e647a5e2",
                    "dee85f65-cdf7-4a34-847f-b9d289592bde",
                    "c99f79b7-9ceb-458d-b875-29c371c8480a",
                    "c215525e-8aae-4cf4-89ee-ce3ea17d68f1",
                    "5df8da78-0f0c-4fdc-ac0b-b322d979b766",
                    "034e183d-b64d-4562-800d-dff66ec78662",
                    "1c86aa2e-74ee-45ec-8119-5018404d7325",
                    "a3957914-a9b5-43ab-b930-fc3c3ccf0dae",
                    "fa58d016-05dc-4467-9748-b33f1afef8ba",
                    "709d80a2-0c0c-468e-a816-72711c58fe16",
                    "d5c1a027-3ce6-4724-936d-63d3cbb87ac6",
                    "7ba1fe13-e3ba-4c2c-95d3-305c0a9bad67",
                    "c7fbe502-a4a4-454d-ac5a-bd4f26af6997",
                    "12443c9e-3592-41d9-a07e-f0e01042aa1b",
                    "ec42dad1-94ad-401b-95ac-77a130a09fe5",
                    "7ab61d34-932f-4438-b335-9f8125331a21",
                    "27fc862b-698a-439b-a657-1c291a15a82c",
                    "b64252e5-8926-470d-90c2-9a1e034bd07e",
                    "26648c17-e229-4922-863b-92e669c46494",
                    "d7184983-322e-429e-abe1-9f33a854c62a",
                    "8d735cf9-e023-443d-ad40-de6e5c7ace6b",
                    "1775b88a-62aa-432a-a148-07d593a009d4",
                    "b7d63de8-408d-494d-9ee6-2686da0ede19",
                    "05395314-704a-4537-871a-5ff6ddb487e4",
                    "8929a96b-218f-44a6-ab74-b228041c4c25",
                    "a6081620-27be-4772-9cd7-475881065cfd",
                    "d8fd0d20-204d-419e-9f81-9811a172c0f8",
                    "b9fb3df2-aa85-4b87-b994-9f59454e6ea1",
                    "fd09ea70-a934-44d5-8892-a61eb85e2305",
                    "944bc7ac-d5b6-4b1c-b7b4-3c0f1b0c135f",
                    "d3a45ea4-48ae-4b71-ba6b-175e3121dc23",
                    "f428ea5f-7363-4503-8d0e-a06715275e1a",
                    "83d068dc-2e4b-48b6-ad7d-1ed98d178350",
                    "c75f5fd8-3241-4c48-8f52-6f0d800fe64a",
                    "c847de0d-fe51-46b5-99e3-0e6de509d2e4",
                    "196ed679-c44d-41db-9b9e-8cfb4dec0d17",
                    "bf22b806-c29f-4851-a14f-15ac531e40e8",
                    "de6ee6e2-d969-4883-9a64-093589eae524",
                    "9d13bf9e-9994-4186-b8a2-cff7267a4ecb",
                    "09545ebb-1756-46c5-bc68-fb5d96c919da",
                    "0c64d8f5-b90c-4db6-b408-5d51c4d0c5b4",
                    "2e261f73-fb6e-47c1-95b7-b8424756b29a",
                    "063e6f9b-473e-4037-86de-c29fd7d83eb0",
                    "f4e4a851-2a31-4ff5-9b9a-9d0310f5ad77",
                    "676e2ac1-34f9-44be-af22-0eed1730b224",
                    "6414259a-1ac8-40d2-92dd-a9cb5a45e4a0",
                    "697832d4-0349-479e-b19d-892105b0b913",
                    "6c206e5d-b8d1-42cd-91bb-150538480b0e",
                    "2b2bd710-6e35-4eb9-81c6-b846a29b43d5",
                    "b70b3a40-6a48-47ee-9e6d-929b49236d17",
                    "809190c3-2e0e-421b-b8dd-692fcec67dbf",
                    "95aae85f-d2b2-449b-b22b-00e68cdae0f9",
                    "261be18d-07b0-4209-9e08-11a3c0b094b8",
                    "e0bec3ca-5326-407f-be48-7142c7211c9e",
                    "d35ad8cd-daa1-46cf-bfab-cb12e5b5b9ba",
                    "24d12fab-24b4-43e4-ac58-5b59cff38e70",
                    "f369dbe3-794b-4271-9f73-4dcd27c50367",
                    "8a7af5ef-7017-4293-8b58-be96a152fefd"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.60997009277344,
        "Text": "Letzte Mahnung",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.18477819859981537,
                "Height": 0.017074832692742348,
                "Left": 0.07626959681510925,
                "Top": 0.037639226764440536
            },
            "Polygon": [
                {
                    "X": 0.07626959681510925,
                    "Y": 0.037676628679037094
                },
                {
                    "X": 0.26104357838630676,
                    "Y": 0.037639226764440536
                },
                {
                    "X": 0.2610478103160858,
                    "Y": 0.054677195847034454
                },
                {
                    "X": 0.07627281546592712,
                    "Y": 0.054714057594537735
                }
            ]
        },
        "Id": "21c6ee55-1df6-41ce-8de5-aa4e5dde7091",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "6346c0df-5635-4b5e-8205-0f0c16121bde",
                    "5d4fa54a-dacb-4886-95f3-386892cb3dc3"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 99.40803527832031,
        "Text": "Seite 1/1",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06139020621776581,
                "Height": 0.009503602981567383,
                "Left": 0.3358539938926697,
                "Top": 0.04135643690824509
            },
            "Polygon": [
                {
                    "X": 0.3358539938926697,
                    "Y": 0.04136882349848747
                },
                {
                    "X": 0.3972414433956146,
                    "Y": 0.04135643690824509
                },
                {
                    "X": 0.3972442150115967,
                    "Y": 0.05084775388240814
                },
                {
                    "X": 0.335856556892395,
                    "Y": 0.05086003988981247
                }
            ]
        },
        "Id": "b2f2a4db-d90f-4ec0-8e3d-390f6768e8cf",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "44369894-436a-4329-9ec4-8ecc1a8eef40",
                    "6f3ba9a9-ab54-48ee-ab07-2e74efaa3600"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.21580505371094,
        "Text": "Klarna.",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.21216411888599396,
                "Height": 0.03474602848291397,
                "Left": 0.5225362777709961,
                "Top": 0.030483532696962357
            },
            "Polygon": [
                {
                    "X": 0.5225362777709961,
                    "Y": 0.03052673302590847
                },
                {
                    "X": 0.7346866726875305,
                    "Y": 0.030483532696962357
                },
                {
                    "X": 0.7347003817558289,
                    "Y": 0.06518761813640594
                },
                {
                    "X": 0.522547721862793,
                    "Y": 0.06522956490516663
                }
            ]
        },
        "Id": "578dbac5-4472-459e-9148-d046fe55f88f",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "56a3a41b-01c2-44e2-a710-3f5a92870b9a"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.92326354980469,
        "Text": "Referenznummer:",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10366184264421463,
                "Height": 0.0073131388053298,
                "Left": 0.07594723254442215,
                "Top": 0.0658070519566536
            },
            "Polygon": [
                {
                    "X": 0.07594723254442215,
                    "Y": 0.06582753360271454
                },
                {
                    "X": 0.17960746586322784,
                    "Y": 0.0658070519566536
                },
                {
                    "X": 0.17960907518863678,
                    "Y": 0.07309983670711517
                },
                {
                    "X": 0.07594860345125198,
                    "Y": 0.07312019169330597
                }
            ]
        },
        "Id": "443b6201-18ea-448a-a683-b3364fb60a03",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "66eb9f1f-74e3-4c9a-bf73-4d73544676f6"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 45.933597564697266,
        "Text": "8 6685 5613 0439",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10549276322126389,
                "Height": 0.007102364208549261,
                "Left": 0.293311208486557,
                "Top": 0.06551889330148697
            },
            "Polygon": [
                {
                    "X": 0.293311208486557,
                    "Y": 0.06553974002599716
                },
                {
                    "X": 0.39880189299583435,
                    "Y": 0.06551889330148697
                },
                {
                    "X": 0.3988039493560791,
                    "Y": 0.07260053604841232
                },
                {
                    "X": 0.29331302642822266,
                    "Y": 0.07262125611305237
                }
            ]
        },
        "Id": "8dfa1f5c-68c4-40f1-8c2b-4ad39ffdfb56",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "2dab7437-52bd-4eea-bbd9-dd9665d70fc3"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.54410552978516,
        "Text": "Datum:",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04059480503201485,
                "Height": 0.0070434147492051125,
                "Left": 0.07620954513549805,
                "Top": 0.07677704840898514
            },
            "Polygon": [
                {
                    "X": 0.07620954513549805,
                    "Y": 0.07678499072790146
                },
                {
                    "X": 0.11680293083190918,
                    "Y": 0.07677704840898514
                },
                {
                    "X": 0.1168043464422226,
                    "Y": 0.08381256461143494
                },
                {
                    "X": 0.0762108713388443,
                    "Y": 0.08382046222686768
                }
            ]
        },
        "Id": "4e22d78b-55b2-4829-b949-038c1242446b",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "bea4ed08-d6ac-42ea-ba68-b8ab24534a7b"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.10163879394531,
        "Text": "28.02.2023",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06486362963914871,
                "Height": 0.007158142514526844,
                "Left": 0.334421306848526,
                "Top": 0.07652942091226578
            },
            "Polygon": [
                {
                    "X": 0.334421306848526,
                    "Y": 0.07654211670160294
                },
                {
                    "X": 0.39928287267684937,
                    "Y": 0.07652942091226578
                },
                {
                    "X": 0.3992849290370941,
                    "Y": 0.08367494493722916
                },
                {
                    "X": 0.3344232439994812,
                    "Y": 0.08368756622076035
                }
            ]
        },
        "Id": "02eb5661-f9f7-4d8c-84a4-e7269eeac80e",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "ec4de695-574b-4605-a098-710a9458e620"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 93.57010650634766,
        "Text": "Bestellnummer:",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09018152952194214,
                "Height": 0.007578643038868904,
                "Left": 0.07605332881212234,
                "Top": 0.08792930841445923
            },
            "Polygon": [
                {
                    "X": 0.07605332881212234,
                    "Y": 0.08794678747653961
                },
                {
                    "X": 0.16623322665691376,
                    "Y": 0.08792930841445923
                },
                {
                    "X": 0.16623486578464508,
                    "Y": 0.09549058973789215
                },
                {
                    "X": 0.07605475187301636,
                    "Y": 0.09550795704126358
                }
            ]
        },
        "Id": "1d0256d2-fe00-44b0-8cb9-638082a761e0",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "0a2d8f08-4a1f-4791-9dab-9e9a3702c828"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 69.87776184082031,
        "Text": "ZOF435O5AI2AZ",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10096799582242966,
                "Height": 0.007621494121849537,
                "Left": 0.2983926236629486,
                "Top": 0.08745747059583664
            },
            "Polygon": [
                {
                    "X": 0.2983926236629486,
                    "Y": 0.08747704327106476
                },
                {
                    "X": 0.3993583917617798,
                    "Y": 0.08745747059583664
                },
                {
                    "X": 0.3993605971336365,
                    "Y": 0.09505951404571533
                },
                {
                    "X": 0.2983945906162262,
                    "Y": 0.0950789600610733
                }
            ]
        },
        "Id": "b7effce2-53f9-4bf3-b7e9-9be98e1bc055",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "c02f6566-57aa-4f06-9723-c1492bf37c6b"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 91.71910095214844,
        "Text": "Bestelldatum:",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0780925452709198,
                "Height": 0.007536998484283686,
                "Left": 0.07613439112901688,
                "Top": 0.09894565492868423
            },
            "Polygon": [
                {
                    "X": 0.07613439112901688,
                    "Y": 0.09896064549684525
                },
                {
                    "X": 0.15422533452510834,
                    "Y": 0.09894565492868423
                },
                {
                    "X": 0.15422692894935608,
                    "Y": 0.10646776854991913
                },
                {
                    "X": 0.07613580673933029,
                    "Y": 0.10648265480995178
                }
            ]
        },
        "Id": "1136e593-772f-4344-b0c0-424c7c760f84",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "c9d442b3-33a3-4643-bd33-35d60d7ceb7a"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.23060607910156,
        "Text": "10.01.2023",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0635380819439888,
                "Height": 0.007508055306971073,
                "Left": 0.33576440811157227,
                "Top": 0.09863600134849548
            },
            "Polygon": [
                {
                    "X": 0.33576440811157227,
                    "Y": 0.09864819794893265
                },
                {
                    "X": 0.39930030703544617,
                    "Y": 0.09863600134849548
                },
                {
                    "X": 0.39930248260498047,
                    "Y": 0.10613193362951279
                },
                {
                    "X": 0.33576643466949463,
                    "Y": 0.10614405572414398
                }
            ]
        },
        "Id": "f4099a13-3d1b-49a4-8d0d-ec9ce86971b7",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "350e3c6a-2c4e-4365-ac8f-c7799fdd7575"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 99.25787353515625,
        "Text": "Wir möchten dich an die Zahlung für deinen",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.3900028169155121,
                "Height": 0.013530510477721691,
                "Left": 0.516567587852478,
                "Top": 0.1048555076122284
            },
            "Polygon": [
                {
                    "X": 0.516567587852478,
                    "Y": 0.10492996126413345
                },
                {
                    "X": 0.9065643548965454,
                    "Y": 0.1048555076122284
                },
                {
                    "X": 0.9065703749656677,
                    "Y": 0.11831245571374893
                },
                {
                    "X": 0.5165719985961914,
                    "Y": 0.11838601529598236
                }
            ]
        },
        "Id": "561f8794-589f-4162-a308-8ad45da7f21f",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "daccb713-e8f2-4e4e-a18c-13d2960c4c2d",
                    "6cf058c0-ba59-4f00-b7a4-0e23e9f57c0a",
                    "f06600ab-5bee-4e38-bba0-70aa83140aaa",
                    "74310332-ffed-48b7-bad9-337835644cd3",
                    "3d000ac8-d114-460c-b859-d3865b7ab665",
                    "095a2387-e7a4-47be-b64d-3105201d94f2",
                    "0343ea4c-273b-4a25-8a40-3699b1333229",
                    "0d0818dc-1a35-4b6c-937e-f985a493eac0"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 99.22039031982422,
        "Text": "Einkauf bei Neutron Holdings, Inc. erinnern.",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.38841208815574646,
                "Height": 0.013880962505936623,
                "Left": 0.5171657204627991,
                "Top": 0.11969984322786331
            },
            "Polygon": [
                {
                    "X": 0.5171657204627991,
                    "Y": 0.1197730079293251
                },
                {
                    "X": 0.9055715799331665,
                    "Y": 0.11969984322786331
                },
                {
                    "X": 0.9055777788162231,
                    "Y": 0.133508563041687
                },
                {
                    "X": 0.5171701908111572,
                    "Y": 0.13358080387115479
                }
            ]
        },
        "Id": "1a03cda8-5557-4e49-a169-ffd94ec1b2cd",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "fcf676d0-9fc4-4524-b25e-e39ce0ad5ae1",
                    "689fea51-99fd-4a1e-897e-40d4c5224d70",
                    "a8404b38-a939-4255-9828-60ff7516b570",
                    "3e8bd597-3dbf-441a-9a68-a851f6b15a2d",
                    "0c990d53-f657-4b4e-af7a-12dbe9709e6b",
                    "1af73972-b5bf-4631-873d-ae92985d2bfd"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.94834899902344,
        "Text": "Wir haben nach Ablauf der in unserer Mahnung gesetzten Frist keine",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.40776655077934265,
                "Height": 0.009856874123215675,
                "Left": 0.5160788297653198,
                "Top": 0.13647307455539703
            },
            "Polygon": [
                {
                    "X": 0.5160788297653198,
                    "Y": 0.136548712849617
                },
                {
                    "X": 0.9238409399986267,
                    "Y": 0.13647307455539703
                },
                {
                    "X": 0.9238454103469849,
                    "Y": 0.1462549865245819
                },
                {
                    "X": 0.5160820484161377,
                    "Y": 0.14632995426654816
                }
            ]
        },
        "Id": "c18120d2-8efe-4a43-9143-9ed4112874f3",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "396ba950-d76c-4908-9c5a-4d4b8b19c133",
                    "092810e0-9ce4-4822-8a9b-528e928337bb",
                    "abdc4def-bd47-4886-bd5d-e938040a006d",
                    "f5457b92-9a70-43d8-9f8d-9a58ab9942e1",
                    "e0bfe60d-a18d-449e-984b-5040554e8959",
                    "2fcf0c44-7f95-4df3-a909-e5135d22ffaa",
                    "3893c605-72e4-491f-976e-7da7c97892c2",
                    "e03aaef6-4e3f-432d-a716-688b6d2b2c00",
                    "9dd94660-78a6-40fd-926e-7587fb4e69bf",
                    "34992cf1-d22d-4e78-8f73-eaa68904d67b",
                    "d71c8a18-d6df-4424-9e20-77e3b4e18369"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 93.13794708251953,
        "Text": "Zahlung von dir erhalten. Stelle daher bitte sicher. die offene Gesamt-",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.40785887837409973,
                "Height": 0.010840860195457935,
                "Left": 0.5159286856651306,
                "Top": 0.14592263102531433
            },
            "Polygon": [
                {
                    "X": 0.5159286856651306,
                    "Y": 0.14599762856960297
                },
                {
                    "X": 0.9237826466560364,
                    "Y": 0.14592263102531433
                },
                {
                    "X": 0.923787534236908,
                    "Y": 0.15668924152851105
                },
                {
                    "X": 0.5159322023391724,
                    "Y": 0.15676349401474
                }
            ]
        },
        "Id": "fe72d11e-4081-48c2-ad9d-121af416af8b",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "0b8e4e1e-5e27-48f5-9dc8-8405a70c8410",
                    "c830bfa5-f6e7-456b-9947-131e929297ea",
                    "3457f087-51ee-4a4b-8c59-f9c34545247d",
                    "e14dc8bf-2aad-4205-a6b6-6a622029e266",
                    "ca916807-5bdd-4ca4-9768-3deedb015017",
                    "4a1503a8-c415-4c16-a75e-9775fdc17a91",
                    "c52db5ad-91d8-42d5-8a08-4e8f854d9d4b",
                    "d5ddd324-cdf0-4a91-994a-99938bcb507c",
                    "1c8f8a70-a247-49f4-89a8-f13c0496b340",
                    "f0dd373c-4970-4c54-ad4c-2b74d6e0ecf1",
                    "15a379ee-c750-468e-b82a-b71f99284bf4"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 93.83343505859375,
        "Text": "Klarna Bank AB (publ), Postfach 90 01 62, 90492 Nürnberg",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.3082955479621887,
                "Height": 0.0074731274507939816,
                "Left": 0.09770467132329941,
                "Top": 0.1557406336069107
            },
            "Polygon": [
                {
                    "X": 0.09770467132329941,
                    "Y": 0.1557968109846115
                },
                {
                    "X": 0.4059980511665344,
                    "Y": 0.1557406336069107
                },
                {
                    "X": 0.4060002267360687,
                    "Y": 0.16315796971321106
                },
                {
                    "X": 0.09770611673593521,
                    "Y": 0.16321375966072083
                }
            ]
        },
        "Id": "f14c3960-0595-4a3e-90cc-a20d40f041cb",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "c8436da2-77cc-44c0-b70f-32733d2ac0d5",
                    "877f9b45-6ebf-4a35-a51d-b17a20207d48",
                    "3e3e1d28-4b0a-4e27-af36-03165160afb5",
                    "850aea46-4530-465e-a62e-08a01ff09654",
                    "926fa31d-e287-4386-b21e-36fd3aa4b6cd",
                    "9d623676-9222-4404-b4d1-546ddf354121",
                    "a8ff6200-813c-4eaf-827f-14f146fe49d6",
                    "b24080ed-9a8b-4639-a2e1-20f102ffe95b",
                    "d3037759-55d3-4ebe-9990-1c42e05736a6",
                    "d6d6f375-f143-4447-b6c4-f43f4cd2ded9"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.61910247802734,
        "Text": "summe bis spätestens 08.03.2023 zu begleichen. Dabei ist für die Ein-",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.40701398253440857,
                "Height": 0.010185062885284424,
                "Left": 0.5165116786956787,
                "Top": 0.15560507774353027
            },
            "Polygon": [
                {
                    "X": 0.5165116786956787,
                    "Y": 0.15567925572395325
                },
                {
                    "X": 0.9235210418701172,
                    "Y": 0.15560507774353027
                },
                {
                    "X": 0.9235256314277649,
                    "Y": 0.16571667790412903
                },
                {
                    "X": 0.5165149569511414,
                    "Y": 0.1657901406288147
                }
            ]
        },
        "Id": "ba95d2f1-e425-4cf2-8340-b2922445526b",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "92752988-20c0-4a58-ad68-8dc9c5e3f745",
                    "41ac2acc-d99c-4e4e-9e67-c436e846be29",
                    "ec696cce-cc8e-4921-a643-7ee6b6167bfc",
                    "19ae3aa2-d628-46b2-98d5-3b14b74aab91",
                    "8541cd33-2a39-411c-a426-f138ecc68f37",
                    "0a4ecc46-da0b-481f-9e5f-4268af0fa8ed",
                    "0dc7aac4-82c7-4120-a266-dfba9152211e",
                    "b7764b23-c5d8-4bbb-b8a5-e2057186ccd2",
                    "35c00d82-7718-44b2-8fa5-1c30a441275a",
                    "3c518659-d274-4752-95a5-25bc149d9370",
                    "7342ca43-dddf-4c9a-87b8-e257dfeddc38"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.75003814697266,
        "Text": "Premiumadress",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08458327502012253,
                "Height": 0.006426560692489147,
                "Left": 0.08817147463560104,
                "Top": 0.16751882433891296
            },
            "Polygon": [
                {
                    "X": 0.08817147463560104,
                    "Y": 0.16753405332565308
                },
                {
                    "X": 0.17275334894657135,
                    "Y": 0.16751882433891296
                },
                {
                    "X": 0.17275474965572357,
                    "Y": 0.17393022775650024
                },
                {
                    "X": 0.08817271143198013,
                    "Y": 0.1739453822374344
                }
            ]
        },
        "Id": "67f8aae6-951b-4386-a442-df1d7769c83f",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "fc9c5767-7f84-46bd-98f4-726c069e57d0"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.81205749511719,
        "Text": "haltung der Zahlungsfrist der Eingang auf unserem Konto",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.4072662889957428,
                "Height": 0.010493436828255653,
                "Left": 0.5166600346565247,
                "Top": 0.16506078839302063
            },
            "Polygon": [
                {
                    "X": 0.5166600346565247,
                    "Y": 0.16513434052467346
                },
                {
                    "X": 0.9239215850830078,
                    "Y": 0.16506078839302063
                },
                {
                    "X": 0.9239262938499451,
                    "Y": 0.175481379032135
                },
                {
                    "X": 0.5166634321212769,
                    "Y": 0.17555421590805054
                }
            ]
        },
        "Id": "8e48e914-f216-40da-be35-028bb59b316b",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "1cd22bd1-6f9c-424d-8d63-004f76a24266",
                    "2426d6c7-7710-4e36-b1e8-6a0fcd1a7a2a",
                    "35020a76-b3f6-405d-8a99-9ef1ec3f87d7",
                    "7c2cbb78-07d7-4573-a05a-86a977fc5108",
                    "297f20fb-884a-4176-8b91-f322a501fe02",
                    "3f195f15-180e-4a46-adcc-86b100b845e9",
                    "0cc53ed8-a1a5-4e15-9da1-fd9b8d268780",
                    "0eed9230-8c38-4ac6-8fa1-fd066a3bcb1f"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.84303283691406,
        "Text": "P",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.022703951224684715,
                "Height": 0.019746821373701096,
                "Left": 0.08973183482885361,
                "Top": 0.17660947144031525
            },
            "Polygon": [
                {
                    "X": 0.08973183482885361,
                    "Y": 0.17661352455615997
                },
                {
                    "X": 0.1124318391084671,
                    "Y": 0.17660947144031525
                },
                {
                    "X": 0.11243578046560287,
                    "Y": 0.19635231792926788
                },
                {
                    "X": 0.08973564207553864,
                    "Y": 0.19635629653930664
                }
            ]
        },
        "Id": "f7b67ed1-5393-4a69-ac09-544b2dac4039",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "752e6b58-2c6d-4da0-9e28-2070dcc8a4af"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 86.79940032958984,
        "Text": "6B 2EEF C310 29 4000 471B",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.14842833578586578,
                "Height": 0.00648824917152524,
                "Left": 0.16815955936908722,
                "Top": 0.17685896158218384
            },
            "Polygon": [
                {
                    "X": 0.16815955936908722,
                    "Y": 0.1768854707479477
                },
                {
                    "X": 0.3165861964225769,
                    "Y": 0.17685896158218384
                },
                {
                    "X": 0.316587895154953,
                    "Y": 0.18332085013389587
                },
                {
                    "X": 0.16816096007823944,
                    "Y": 0.1833472102880478
                }
            ]
        },
        "Id": "21cbf248-bcdc-400c-a61d-0489bb95de1c",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "8bedb801-1986-4c32-aded-81bc0ba429cb",
                    "942259d3-f41b-4ab4-9108-46abbf758b1d",
                    "506b3600-a5b7-4a03-8ee2-4b03ace54d5f",
                    "30add774-f2e3-4006-8e14-ae6ff67a67ac",
                    "93df3d7a-71c8-4ee5-bb2a-6a8dc55b91e4",
                    "6b9311a7-5878-4fe7-8428-e3428f913633"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 71.09307861328125,
        "Text": "ausschlaggebend.",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10152410715818405,
                "Height": 0.009103109128773212,
                "Left": 0.5164182186126709,
                "Top": 0.17614150047302246
            },
            "Polygon": [
                {
                    "X": 0.5164182186126709,
                    "Y": 0.17615965008735657
                },
                {
                    "X": 0.6179390549659729,
                    "Y": 0.17614150047302246
                },
                {
                    "X": 0.6179423332214355,
                    "Y": 0.18522661924362183
                },
                {
                    "X": 0.5164211988449097,
                    "Y": 0.1852446049451828
                }
            ]
        },
        "Id": "aa8f66fe-d4ef-40c0-a3de-bf986792a430",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "23b34ba3-b311-4b93-b2e7-8a2eaa4b775a"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 94.0484390258789,
        "Text": "DV 02.23 0,85 Deutsche Post",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.17638765275478363,
                "Height": 0.007727836724370718,
                "Left": 0.14777584373950958,
                "Top": 0.1865089237689972
            },
            "Polygon": [
                {
                    "X": 0.14777584373950958,
                    "Y": 0.1865401417016983
                },
                {
                    "X": 0.32416144013404846,
                    "Y": 0.1865089237689972
                },
                {
                    "X": 0.3241634964942932,
                    "Y": 0.19420577585697174
                },
                {
                    "X": 0.1477774679660797,
                    "Y": 0.19423675537109375
                }
            ]
        },
        "Id": "75677656-aa11-4c51-9781-3e25f2d8d9c3",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "0b840adf-7cb4-4f4e-b5e5-45b3976614eb",
                    "36f53747-b1d9-406f-83f7-498c05bd00b9",
                    "5eea1c2e-1427-42a0-9ada-b4eaeedf3976",
                    "5d86f688-51a5-4700-b62d-0edb9ef132e5",
                    "9de71193-4a8b-4464-b5da-7653e43e94f0"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 95.64141845703125,
        "Text": "Zahlungsziel:",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07637891918420792,
                "Height": 0.009282702580094337,
                "Left": 0.524024248123169,
                "Top": 0.1935654878616333
            },
            "Polygon": [
                {
                    "X": 0.524024248123169,
                    "Y": 0.19357891380786896
                },
                {
                    "X": 0.6003998517990112,
                    "Y": 0.1935654878616333
                },
                {
                    "X": 0.6004031300544739,
                    "Y": 0.20283488929271698
                },
                {
                    "X": 0.5240272879600525,
                    "Y": 0.20284819602966309
                }
            ]
        },
        "Id": "88ca53dc-5237-49d7-8de7-eeee166f80e1",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "cb174627-bc26-44a3-81df-ccf60560488e"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.2822494506836,
        "Text": "08.03.2023",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0650574117898941,
                "Height": 0.007540243677794933,
                "Left": 0.850509524345398,
                "Top": 0.19212448596954346
            },
            "Polygon": [
                {
                    "X": 0.850509524345398,
                    "Y": 0.19213594496250153
                },
                {
                    "X": 0.9155635237693787,
                    "Y": 0.19212448596954346
                },
                {
                    "X": 0.9155669212341309,
                    "Y": 0.19965337216854095
                },
                {
                    "X": 0.8505127429962158,
                    "Y": 0.19966474175453186
                }
            ]
        },
        "Id": "d536b3d3-b6b9-4351-a9d7-61a4b0aac5ea",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "b61fe103-917a-4ffa-a80c-3568bca5a679"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 85.55465698242188,
        "Text": "Zahlungsempfänger:",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.11962558329105377,
                "Height": 0.009331676177680492,
                "Left": 0.5244100689888,
                "Top": 0.20664361119270325
            },
            "Polygon": [
                {
                    "X": 0.5244100689888,
                    "Y": 0.20666436851024628
                },
                {
                    "X": 0.6440322399139404,
                    "Y": 0.20664361119270325
                },
                {
                    "X": 0.6440356969833374,
                    "Y": 0.2159547209739685
                },
                {
                    "X": 0.5244131684303284,
                    "Y": 0.21597528457641602
                }
            ]
        },
        "Id": "6a699291-9f65-4f61-b0b8-53c42589519d",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "69a2fa4c-334b-4cff-b0fa-134a3dd62970"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 99.44129180908203,
        "Text": "Klarna",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.037786997854709625,
                "Height": 0.007973114028573036,
                "Left": 0.8782814741134644,
                "Top": 0.20504966378211975
            },
            "Polygon": [
                {
                    "X": 0.8782814741134644,
                    "Y": 0.20505623519420624
                },
                {
                    "X": 0.9160648584365845,
                    "Y": 0.20504966378211975
                },
                {
                    "X": 0.9160684943199158,
                    "Y": 0.21301627159118652
                },
                {
                    "X": 0.8782849907875061,
                    "Y": 0.21302278339862823
                }
            ]
        },
        "Id": "8b204480-7ab6-4dbb-adcb-e770dff47b71",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "a4ce42dc-a79c-44a2-948c-de7c55dc51f2"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 79.14774322509766,
        "Text": "*117*1137*1**K4000*",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.12891142070293427,
                "Height": 0.007045602425932884,
                "Left": 0.09852313250303268,
                "Top": 0.2113194763660431
            },
            "Polygon": [
                {
                    "X": 0.09852313250303268,
                    "Y": 0.2113417536020279
                },
                {
                    "X": 0.22743289172649384,
                    "Y": 0.2113194763660431
                },
                {
                    "X": 0.22743454575538635,
                    "Y": 0.21834297478199005
                },
                {
                    "X": 0.09852451086044312,
                    "Y": 0.21836508810520172
                }
            ]
        },
        "Id": "057ae48f-1ac2-4652-b529-ce2474d48158",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "25fbe5f5-30bb-4e38-9818-710cd4a4666f"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 62.715328216552734,
        "Text": "IBAN:",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03243675082921982,
                "Height": 0.007218779530376196,
                "Left": 0.5248004794120789,
                "Top": 0.21977178752422333
            },
            "Polygon": [
                {
                    "X": 0.5248004794120789,
                    "Y": 0.21977734565734863
                },
                {
                    "X": 0.5572347640991211,
                    "Y": 0.21977178752422333
                },
                {
                    "X": 0.5572372078895569,
                    "Y": 0.22698505222797394
                },
                {
                    "X": 0.5248028635978699,
                    "Y": 0.22699056565761566
                }
            ]
        },
        "Id": "9e8cacbd-7a7b-4d51-a36d-c71412cc69ae",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "8397b4c2-6db6-43f9-8009-bb0be752a241"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.59996795654297,
        "Text": "DE13760700120500154000",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.16287846863269806,
                "Height": 0.007568179164081812,
                "Left": 0.7533211708068848,
                "Top": 0.2183956354856491
            },
            "Polygon": [
                {
                    "X": 0.7533211708068848,
                    "Y": 0.21842357516288757
                },
                {
                    "X": 0.9161962270736694,
                    "Y": 0.2183956354856491
                },
                {
                    "X": 0.9161996245384216,
                    "Y": 0.22593609988689423
                },
                {
                    "X": 0.7533242106437683,
                    "Y": 0.22596381604671478
                }
            ]
        },
        "Id": "968193d1-7a14-47e1-aac9-2db1d54aa42e",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "c18e257e-935d-4034-90bb-205c1eb41170"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 99.45513916015625,
        "Text": "Robert Baluta",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09834659844636917,
                "Height": 0.009089016355574131,
                "Left": 0.09995157271623611,
                "Top": 0.22366780042648315
            },
            "Polygon": [
                {
                    "X": 0.09995157271623611,
                    "Y": 0.22368457913398743
                },
                {
                    "X": 0.19829611480236053,
                    "Y": 0.22366780042648315
                },
                {
                    "X": 0.19829817116260529,
                    "Y": 0.23274017870426178
                },
                {
                    "X": 0.09995335340499878,
                    "Y": 0.2327568084001541
                }
            ]
        },
        "Id": "cfd65ec2-e1a8-47c5-9573-95664aa3fe25",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "c060ee34-d0f7-4c0a-a66f-a8fe7c6c732f",
                    "1a1381c6-3093-4b36-bfb6-b8c9dc8f9df5"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.71942138671875,
        "Text": "Tecklenburger Str. 66",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.15620502829551697,
                "Height": 0.011094722896814346,
                "Left": 0.099307581782341,
                "Top": 0.23552939295768738
            },
            "Polygon": [
                {
                    "X": 0.099307581782341,
                    "Y": 0.2355557382106781
                },
                {
                    "X": 0.2555098831653595,
                    "Y": 0.23552939295768738
                },
                {
                    "X": 0.2555125951766968,
                    "Y": 0.24659807980060577
                },
                {
                    "X": 0.09930974990129471,
                    "Y": 0.24662412703037262
                }
            ]
        },
        "Id": "8ee7ddf8-5306-43d6-8b2b-402e5357e0c4",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "9cb8be3e-f483-4e39-a6ba-13721be9a37c",
                    "445c81e6-5aec-4f9b-ad28-ecb4e989eafe",
                    "0a540398-a846-4d6e-9ea2-296339db54b8"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 99.01102447509766,
        "Text": "BIC:",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024006083607673645,
                "Height": 0.007848327979445457,
                "Left": 0.5248608589172363,
                "Top": 0.23250342905521393
            },
            "Polygon": [
                {
                    "X": 0.5248608589172363,
                    "Y": 0.23250748217105865
                },
                {
                    "X": 0.5488643050193787,
                    "Y": 0.23250342905521393
                },
                {
                    "X": 0.5488669276237488,
                    "Y": 0.2403477281332016
                },
                {
                    "X": 0.5248634219169617,
                    "Y": 0.24035175144672394
                }
            ]
        },
        "Id": "99bd699c-af23-4de9-83b2-7350dbc7c109",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "2e1ed8c1-0f7f-474d-8866-342c22e357e2"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.86616516113281,
        "Text": "DEUTDEMM760",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09647513926029205,
                "Height": 0.007731375750154257,
                "Left": 0.8196604251861572,
                "Top": 0.23091819882392883
            },
            "Polygon": [
                {
                    "X": 0.8196604251861572,
                    "Y": 0.23093454539775848
                },
                {
                    "X": 0.9161320328712463,
                    "Y": 0.23091819882392883
                },
                {
                    "X": 0.9161355495452881,
                    "Y": 0.23863336443901062
                },
                {
                    "X": 0.8196636438369751,
                    "Y": 0.23864957690238953
                }
            ]
        },
        "Id": "414fee57-76fb-45d7-8ef4-2b5a6be2ce74",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "95bac26f-e186-4c2a-981f-8fdf95090d28"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.77169799804688,
        "Text": "49205 Hasbergen",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.12909427285194397,
                "Height": 0.01104807946830988,
                "Left": 0.09902102500200272,
                "Top": 0.24782727658748627
            },
            "Polygon": [
                {
                    "X": 0.09902102500200272,
                    "Y": 0.2478487640619278
                },
                {
                    "X": 0.22811268270015717,
                    "Y": 0.24782727658748627
                },
                {
                    "X": 0.2281152904033661,
                    "Y": 0.25885409116744995
                },
                {
                    "X": 0.09902317821979523,
                    "Y": 0.2588753402233124
                }
            ]
        },
        "Id": "d7637409-4511-4e92-bd9e-f72842c960be",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "d25e78d6-b535-45ee-9e80-0f532da2529f",
                    "5e646b37-01c3-4b9f-80f0-93b87450c475"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 76.11856079101562,
        "Text": "Gesamtbetrag 11,54 EUR",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.3913167417049408,
                "Height": 0.011126124300062656,
                "Left": 0.5246231555938721,
                "Top": 0.2437792867422104
            },
            "Polygon": [
                {
                    "X": 0.5246231555938721,
                    "Y": 0.24384470283985138
                },
                {
                    "X": 0.9159348607063293,
                    "Y": 0.2437792867422104
                },
                {
                    "X": 0.9159398674964905,
                    "Y": 0.2548407316207886
                },
                {
                    "X": 0.5246267914772034,
                    "Y": 0.2549054026603699
                }
            ]
        },
        "Id": "8148500a-5b41-4fdc-ad43-ee72a39f1edd",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "f44d4674-0078-4f5a-9bcf-3f1196fe144b",
                    "b003a9cf-1d3f-4291-a879-1c9b99c719d2"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.7459487915039,
        "Text": "Deutschland",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0885259211063385,
                "Height": 0.009103115648031235,
                "Left": 0.10031549632549286,
                "Top": 0.2595459818840027
            },
            "Polygon": [
                {
                    "X": 0.10031549632549286,
                    "Y": 0.2595605254173279
                },
                {
                    "X": 0.188839390873909,
                    "Y": 0.2595459818840027
                },
                {
                    "X": 0.18884141743183136,
                    "Y": 0.2686346769332886
                },
                {
                    "X": 0.10031728446483612,
                    "Y": 0.2686491012573242
                }
            ]
        },
        "Id": "f2501764-c53c-43a5-bdb8-06e50ea0a351",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "d2d89795-cfea-4597-8fce-c261584dbb32"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.98406982421875,
        "Text": "Verwendungszweck:",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.14372971653938293,
                "Height": 0.009760557673871517,
                "Left": 0.5408612489700317,
                "Top": 0.2600610554218292
            },
            "Polygon": [
                {
                    "X": 0.5408612489700317,
                    "Y": 0.26008468866348267
                },
                {
                    "X": 0.6845872402191162,
                    "Y": 0.2600610554218292
                },
                {
                    "X": 0.6845909953117371,
                    "Y": 0.269798219203949
                },
                {
                    "X": 0.5408645272254944,
                    "Y": 0.2698216140270233
                }
            ]
        },
        "Id": "43a924bb-3bc0-4f67-8c8d-78da71da27d0",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "7c58e019-6301-4f05-bd2f-3bb28fb4c584"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.8499526977539,
        "Text": "8668556130439",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10544036328792572,
                "Height": 0.008548851124942303,
                "Left": 0.8104568123817444,
                "Top": 0.2585929036140442
            },
            "Polygon": [
                {
                    "X": 0.8104568123817444,
                    "Y": 0.2586102783679962
                },
                {
                    "X": 0.9158933162689209,
                    "Y": 0.2585929036140442
                },
                {
                    "X": 0.9158971309661865,
                    "Y": 0.26712456345558167
                },
                {
                    "X": 0.8104603886604309,
                    "Y": 0.26714175939559937
                }
            ]
        },
        "Id": "7ad31d8b-cc69-413d-8ff5-101e1d73519a",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "9bb904f8-8ddd-496a-8adb-ed2b91f599ea"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 95.08943176269531,
        "Text": "Bitte bezahle jeden Einkau separat und gib dabei immer den jeweiligen",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.3099619150161743,
                "Height": 0.007385789416730404,
                "Left": 0.5224918723106384,
                "Top": 0.2726316452026367
            },
            "Polygon": [
                {
                    "X": 0.5224918723106384,
                    "Y": 0.27268192172050476
                },
                {
                    "X": 0.8324506878852844,
                    "Y": 0.2726316452026367
                },
                {
                    "X": 0.8324537873268127,
                    "Y": 0.2799675166606903
                },
                {
                    "X": 0.5224943161010742,
                    "Y": 0.2800174355506897
                }
            ]
        },
        "Id": "c84e0772-2c39-41e0-8e35-39bfcbeeaa4d",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "a4248ff2-2a75-4ced-8fea-8375e40d217f",
                    "ec3241a2-9ea0-42f5-883c-53c1332c427e",
                    "0f1f187c-e254-4600-a7af-a28cc9edf404",
                    "cce13603-b1b9-43c7-b172-39d966ac94ab",
                    "f26e9149-498d-48a2-8942-6c3d2b4d3c52",
                    "5a1664de-2f5e-4d28-829f-5e955196bb1a",
                    "bb3d7478-794d-4bbc-b1ac-b16c53d5dc4e",
                    "c35f06cf-558d-4b95-b391-033349e942e7",
                    "dfa2e2c1-f2f6-47a9-a89d-c9cf3c3ab580",
                    "610a3545-125b-4548-afd4-d8bc6f700ee2",
                    "5627f85b-be99-41a9-8bba-ecc92919df81"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 95.15570068359375,
        "Text": "Verwendungszweck an. da wir deine Zahlung sonst nicht zuordnen können",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.3262936472892761,
                "Height": 0.0080826161429286,
                "Left": 0.5225610733032227,
                "Top": 0.2798672318458557
            },
            "Polygon": [
                {
                    "X": 0.5225610733032227,
                    "Y": 0.2799197733402252
                },
                {
                    "X": 0.848851203918457,
                    "Y": 0.2798672318458557
                },
                {
                    "X": 0.8488547205924988,
                    "Y": 0.2878977656364441
                },
                {
                    "X": 0.5225636959075928,
                    "Y": 0.2879498600959778
                }
            ]
        },
        "Id": "7dd70358-74df-4a66-b901-877700e7196c",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "31cf54ac-13e9-4c71-aac4-673ef9865ed7",
                    "c9ee7439-76a1-46e5-84de-c413643a51c4",
                    "989ee3b9-55ed-42ea-8cc5-8c6a256ccda9",
                    "69b0d4da-26b2-4d5a-85d9-ea5abc8eb817",
                    "9791fcec-7214-44e5-a763-c4ff5bbdbf06",
                    "8d1b67f1-8f2e-46fb-ab19-923c9842b32b",
                    "a526c80c-9925-47a8-ad32-84a556567ca8",
                    "ee62f565-66c4-4cef-8fce-d73d96c9f1a2",
                    "a565d4ee-dc02-4c11-95b8-a24e0fe767f3",
                    "c381ecbb-f5b8-4723-9d35-41f65d7618f7"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 82.47224426269531,
        "Text": "Art.-Nr.",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.041317109018564224,
                "Height": 0.006982545834034681,
                "Left": 0.06985720247030258,
                "Top": 0.32878920435905457
            },
            "Polygon": [
                {
                    "X": 0.06985720247030258,
                    "Y": 0.32879552245140076
                },
                {
                    "X": 0.11117291450500488,
                    "Y": 0.32878920435905457
                },
                {
                    "X": 0.11117430776357651,
                    "Y": 0.3357654809951782
                },
                {
                    "X": 0.06985849887132645,
                    "Y": 0.33577173948287964
                }
            ]
        },
        "Id": "23c1eb30-88c1-487b-ad2a-ed315e760293",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "40bf0c35-bea2-4352-bbb2-801f653af198"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 97.3211669921875,
        "Text": "Bezeichnung",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08065538853406906,
                "Height": 0.008890158496797085,
                "Left": 0.22919315099716187,
                "Top": 0.32854509353637695
            },
            "Polygon": [
                {
                    "X": 0.22919315099716187,
                    "Y": 0.32855740189552307
                },
                {
                    "X": 0.3098462224006653,
                    "Y": 0.32854509353637695
                },
                {
                    "X": 0.3098485469818115,
                    "Y": 0.33742305636405945
                },
                {
                    "X": 0.2291952520608902,
                    "Y": 0.337435245513916
                }
            ]
        },
        "Id": "0d4acd84-f034-4d30-bbfe-8ad281a21cf2",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "59a7f206-b651-4f76-8692-ffc8da8103b9"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.08455657958984,
        "Text": "Menge",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04015796631574631,
                "Height": 0.008770711719989777,
                "Left": 0.5439122915267944,
                "Top": 0.32772302627563477
            },
            "Polygon": [
                {
                    "X": 0.5439122915267944,
                    "Y": 0.32772916555404663
                },
                {
                    "X": 0.5840672254562378,
                    "Y": 0.32772302627563477
                },
                {
                    "X": 0.5840702652931213,
                    "Y": 0.33648765087127686
                },
                {
                    "X": 0.5439152717590332,
                    "Y": 0.33649373054504395
                }
            ]
        },
        "Id": "6743c22f-bb6c-43a0-b777-ecf4f45679fa",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "928f589b-7088-4d4a-85a5-a81a034b4a3e"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.79209899902344,
        "Text": "Preis",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.030615270137786865,
                "Height": 0.007223864551633596,
                "Left": 0.64076167345047,
                "Top": 0.3274260461330414
            },
            "Polygon": [
                {
                    "X": 0.64076167345047,
                    "Y": 0.32743072509765625
                },
                {
                    "X": 0.6713742017745972,
                    "Y": 0.3274260461330414
                },
                {
                    "X": 0.6713769435882568,
                    "Y": 0.33464527130126953
                },
                {
                    "X": 0.6407642960548401,
                    "Y": 0.334649920463562
                }
            ]
        },
        "Id": "99b1ee72-925e-415a-9585-b8e8536127ae",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "6214c22d-ed88-4749-9482-effbb2004d32"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 99.13484191894531,
        "Text": "Gesamt",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0483258031308651,
                "Height": 0.007560946978628635,
                "Left": 0.8700188994407654,
                "Top": 0.3262917995452881
            },
            "Polygon": [
                {
                    "X": 0.8700188994407654,
                    "Y": 0.3262992203235626
                },
                {
                    "X": 0.9183412790298462,
                    "Y": 0.3262917995452881
                },
                {
                    "X": 0.9183447360992432,
                    "Y": 0.33384543657302856
                },
                {
                    "X": 0.8700222373008728,
                    "Y": 0.33385276794433594
                }
            ]
        },
        "Id": "022c513a-6cf3-4c9e-9466-69b2cf80ab8c",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "6342d5c8-bff1-40eb-b8e4-2418c8a5e279"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 99.75103759765625,
        "Text": "Recurring purchase",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.112633615732193,
                "Height": 0.009312503971159458,
                "Left": 0.22930815815925598,
                "Top": 0.3425939381122589
            },
            "Polygon": [
                {
                    "X": 0.22930815815925598,
                    "Y": 0.3426108658313751
                },
                {
                    "X": 0.341939240694046,
                    "Y": 0.3425939381122589
                },
                {
                    "X": 0.341941773891449,
                    "Y": 0.3518896996974945
                },
                {
                    "X": 0.22931036353111267,
                    "Y": 0.3519064486026764
                }
            ]
        },
        "Id": "cf318a22-59ce-4f07-864f-ddbfe27ff729",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "0a65fa72-9a84-4303-9fa1-08bb9ab47c67",
                    "55ee5ccf-32ff-4c05-8414-c6b2ab82eeff"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 93.00516510009766,
        "Text": "1",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.004152514971792698,
                "Height": 0.006548542063683271,
                "Left": 0.5783001780509949,
                "Top": 0.3425332009792328
            },
            "Polygon": [
                {
                    "X": 0.5783001780509949,
                    "Y": 0.34253382682800293
                },
                {
                    "X": 0.5824503898620605,
                    "Y": 0.3425332009792328
                },
                {
                    "X": 0.5824527144432068,
                    "Y": 0.3490811288356781
                },
                {
                    "X": 0.5783024430274963,
                    "Y": 0.34908172488212585
                }
            ]
        },
        "Id": "d8fd945c-e32f-4a02-af24-9a027848db4f",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "e5ccc4e9-885f-4bf7-992f-ac1be6b7b491"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.14772033691406,
        "Text": "5,99",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02474024146795273,
                "Height": 0.008255120366811752,
                "Left": 0.6468024253845215,
                "Top": 0.34178581833839417
            },
            "Polygon": [
                {
                    "X": 0.6468024253845215,
                    "Y": 0.34178951382637024
                },
                {
                    "X": 0.6715395450592041,
                    "Y": 0.34178581833839417
                },
                {
                    "X": 0.6715426445007324,
                    "Y": 0.35003724694252014
                },
                {
                    "X": 0.646805465221405,
                    "Y": 0.35004091262817383
                }
            ]
        },
        "Id": "3e3e1143-2173-4714-a940-902b3629aaac",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "6516d0f6-edbd-4212-a06e-3cc606c4be7c"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 97.71410369873047,
        "Text": "5,99",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024855125695466995,
                "Height": 0.007980681955814362,
                "Left": 0.8927947878837585,
                "Top": 0.34084591269493103
            },
            "Polygon": [
                {
                    "X": 0.8927947878837585,
                    "Y": 0.3408496677875519
                },
                {
                    "X": 0.9176463484764099,
                    "Y": 0.34084591269493103
                },
                {
                    "X": 0.9176499247550964,
                    "Y": 0.3488228917121887
                },
                {
                    "X": 0.8927983641624451,
                    "Y": 0.3488265872001648
                }
            ]
        },
        "Id": "ab8d82cd-333b-4ce3-b06c-25854e1b86b7",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "09c728b0-8a9a-4798-84c2-2c74808c00a4"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 97.45387268066406,
        "Text": "Rechnungsbetrag",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10232065618038177,
                "Height": 0.009236535988748074,
                "Left": 0.7193862795829773,
                "Top": 0.3805978298187256
            },
            "Polygon": [
                {
                    "X": 0.7193862795829773,
                    "Y": 0.3806125223636627
                },
                {
                    "X": 0.8217030167579651,
                    "Y": 0.3805978298187256
                },
                {
                    "X": 0.8217068910598755,
                    "Y": 0.38981980085372925
                },
                {
                    "X": 0.7193898558616638,
                    "Y": 0.38983437418937683
                }
            ]
        },
        "Id": "113bd7bf-8604-4df2-8529-b3bb6f79eda2",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "da2bd4a8-dc5c-4247-bfdb-53425450b893"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.12330627441406,
        "Text": "5,99",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024571750313043594,
                "Height": 0.00801131408661604,
                "Left": 0.8951415419578552,
                "Top": 0.38036787509918213
            },
            "Polygon": [
                {
                    "X": 0.8951415419578552,
                    "Y": 0.38037142157554626
                },
                {
                    "X": 0.9197096824645996,
                    "Y": 0.38036787509918213
                },
                {
                    "X": 0.9197133183479309,
                    "Y": 0.3883756995201111
                },
                {
                    "X": 0.8951451182365417,
                    "Y": 0.38837918639183044
                }
            ]
        },
        "Id": "35025bb0-1933-426c-9635-7182d80e4140",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "db5d24bf-ccaa-4e07-aa80-e6f2ffb6971b"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 20.755334854125977,
        "Text": "01/10",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008500080555677414,
                "Height": 0.021091846749186516,
                "Left": 0.034855134785175323,
                "Top": 0.3863324224948883
            },
            "Polygon": [
                {
                    "X": 0.034855134785175323,
                    "Y": 0.3863336145877838
                },
                {
                    "X": 0.04335145652294159,
                    "Y": 0.3863324224948883
                },
                {
                    "X": 0.04335521534085274,
                    "Y": 0.40742307901382446
                },
                {
                    "X": 0.034858837723731995,
                    "Y": 0.4074242413043976
                }
            ]
        },
        "Id": "8c6476dc-9171-4fdb-9c93-91ca878a8d57",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "e8b92bb0-2897-4077-92e8-1b9aa645edb6"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 97.54032135009766,
        "Text": "Getätigte Zahlung",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10294318199157715,
                "Height": 0.00948607362806797,
                "Left": 0.7185996770858765,
                "Top": 0.4021807014942169
            },
            "Polygon": [
                {
                    "X": 0.7185996770858765,
                    "Y": 0.40219512581825256
                },
                {
                    "X": 0.8215388655662537,
                    "Y": 0.4021807014942169
                },
                {
                    "X": 0.8215428590774536,
                    "Y": 0.411652535200119
                },
                {
                    "X": 0.7186033725738525,
                    "Y": 0.41166678071022034
                }
            ]
        },
        "Id": "9429953d-e4e1-4dd8-8b59-03289bd31fc0",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "ec9dbf4c-b685-43d8-818f-3310aab0660e",
                    "52d38553-cbe9-4561-a186-97477d5263df"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.34017181396484,
        "Text": "-5,99",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.028378380462527275,
                "Height": 0.008160642348229885,
                "Left": 0.8914907574653625,
                "Top": 0.4020048975944519
            },
            "Polygon": [
                {
                    "X": 0.8914907574653625,
                    "Y": 0.40200889110565186
                },
                {
                    "X": 0.9198654294013977,
                    "Y": 0.4020048975944519
                },
                {
                    "X": 0.9198691248893738,
                    "Y": 0.4101616144180298
                },
                {
                    "X": 0.8914943933486938,
                    "Y": 0.41016554832458496
                }
            ]
        },
        "Id": "70fe1cac-b0d8-4b52-83be-908b4a0e4a1a",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "5107e227-7ad4-4a1c-8679-2188bf1574df"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 97.9185791015625,
        "Text": "Getätigte Zahlung",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10286621749401093,
                "Height": 0.009150433354079723,
                "Left": 0.7187776565551758,
                "Top": 0.4147658050060272
            },
            "Polygon": [
                {
                    "X": 0.7187776565551758,
                    "Y": 0.41477999091148376
                },
                {
                    "X": 0.8216400146484375,
                    "Y": 0.4147658050060272
                },
                {
                    "X": 0.8216438889503479,
                    "Y": 0.4239022135734558
                },
                {
                    "X": 0.7187812328338623,
                    "Y": 0.423916220664978
                }
            ]
        },
        "Id": "0f567db7-a56f-42e6-a920-3cb7f16853c9",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "98dd9cbc-48ca-4e21-aa1c-653c42970856",
                    "55a306b6-257f-4b93-b79d-58e50b25a28f"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 97.75942993164062,
        "Text": "5,99",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024230685085058212,
                "Height": 0.007731179241091013,
                "Left": 0.8955966830253601,
                "Top": 0.4147080183029175
            },
            "Polygon": [
                {
                    "X": 0.8955966830253601,
                    "Y": 0.4147113859653473
                },
                {
                    "X": 0.9198238253593445,
                    "Y": 0.4147080183029175
                },
                {
                    "X": 0.9198273420333862,
                    "Y": 0.4224359095096588
                },
                {
                    "X": 0.8956001400947571,
                    "Y": 0.42243921756744385
                }
            ]
        },
        "Id": "fbd43368-e4b7-45dc-9529-12b59ae68f2a",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "4e99bc76-f663-4032-93c9-d6cd519b1707"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.2585678100586,
        "Text": "Verzugskosten",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08606921136379242,
                "Height": 0.009036344476044178,
                "Left": 0.7354251146316528,
                "Top": 0.42690059542655945
            },
            "Polygon": [
                {
                    "X": 0.7354251146316528,
                    "Y": 0.4269123077392578
                },
                {
                    "X": 0.821490466594696,
                    "Y": 0.42690059542655945
                },
                {
                    "X": 0.8214942812919617,
                    "Y": 0.4359253942966461
                },
                {
                    "X": 0.7354286909103394,
                    "Y": 0.43593695759773254
                }
            ]
        },
        "Id": "7221e6c7-6cf9-42f4-8c7d-6cd656e398d8",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "219e1a25-cbf1-40bd-bbd5-b3988c56ab6c"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 97.14910888671875,
        "Text": "1,85",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.023698434233665466,
                "Height": 0.008145653642714024,
                "Left": 0.8967273831367493,
                "Top": 0.4265700578689575
            },
            "Polygon": [
                {
                    "X": 0.8967273831367493,
                    "Y": 0.4265732765197754
                },
                {
                    "X": 0.9204221367835999,
                    "Y": 0.4265700578689575
                },
                {
                    "X": 0.9204258322715759,
                    "Y": 0.4347125291824341
                },
                {
                    "X": 0.8967310190200806,
                    "Y": 0.43471571803092957
                }
            ]
        },
        "Id": "3f48c293-c910-482a-829e-6fbdf58798d6",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "24d6b7aa-a06f-44c3-abb5-c9e838bf5372"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.20161437988281,
        "Text": "Verzugskosten",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08609896153211594,
                "Height": 0.009293550625443459,
                "Left": 0.7354576587677002,
                "Top": 0.43894174695014954
            },
            "Polygon": [
                {
                    "X": 0.7354576587677002,
                    "Y": 0.4389532804489136
                },
                {
                    "X": 0.8215526938438416,
                    "Y": 0.43894174695014954
                },
                {
                    "X": 0.8215566277503967,
                    "Y": 0.44822391867637634
                },
                {
                    "X": 0.7354613542556763,
                    "Y": 0.44823530316352844
                }
            ]
        },
        "Id": "69907a0e-f775-48e4-af10-034a64745fb5",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "c1529c6f-eac1-4703-8e63-fb2badaf4b40"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 97.42920684814453,
        "Text": "1,85",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.023731566965579987,
                "Height": 0.0081254281103611,
                "Left": 0.8965561985969543,
                "Top": 0.43894723057746887
            },
            "Polygon": [
                {
                    "X": 0.8965561985969543,
                    "Y": 0.43895041942596436
                },
                {
                    "X": 0.9202840328216553,
                    "Y": 0.43894723057746887
                },
                {
                    "X": 0.9202877283096313,
                    "Y": 0.44706952571868896
                },
                {
                    "X": 0.8965598344802856,
                    "Y": 0.4470726549625397
                }
            ]
        },
        "Id": "e568a6c7-7f09-4a79-b800-879ad80dfafd",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "eda452a8-6d1c-4658-b6cd-d47ea1769a91"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.53936004638672,
        "Text": "Verzugskosten",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08628673106431961,
                "Height": 0.009258203208446503,
                "Left": 0.7353354096412659,
                "Top": 0.4513155519962311
            },
            "Polygon": [
                {
                    "X": 0.7353354096412659,
                    "Y": 0.4513269066810608
                },
                {
                    "X": 0.8216181993484497,
                    "Y": 0.4513155519962311
                },
                {
                    "X": 0.8216221332550049,
                    "Y": 0.460562527179718
                },
                {
                    "X": 0.7353390455245972,
                    "Y": 0.4605737626552582
                }
            ]
        },
        "Id": "c18b929e-a0dc-4f4f-8614-e85e9fa125d7",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "8570c23e-14ca-466a-8774-5cde48f55eee"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 97.96286010742188,
        "Text": "1,85",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.023800112307071686,
                "Height": 0.008242525160312653,
                "Left": 0.8966653347015381,
                "Top": 0.4511588215827942
            },
            "Polygon": [
                {
                    "X": 0.8966653347015381,
                    "Y": 0.4511619508266449
                },
                {
                    "X": 0.9204616546630859,
                    "Y": 0.4511588215827942
                },
                {
                    "X": 0.9204654097557068,
                    "Y": 0.4593982398509979
                },
                {
                    "X": 0.8966689705848694,
                    "Y": 0.45940133929252625
                }
            ]
        },
        "Id": "fec3c795-6438-402d-9fbe-e9ecb7f2e04e",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "76f5db2e-f0cc-4f47-972f-aa0bb6062802"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 97.80590057373047,
        "Text": "Gesamtsumme",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.1053435355424881,
                "Height": 0.00820288248360157,
                "Left": 0.7140707969665527,
                "Top": 0.47764360904693604
            },
            "Polygon": [
                {
                    "X": 0.7140707969665527,
                    "Y": 0.4776570200920105
                },
                {
                    "X": 0.8194108605384827,
                    "Y": 0.47764360904693604
                },
                {
                    "X": 0.8194143176078796,
                    "Y": 0.4858332574367523
                },
                {
                    "X": 0.7140739560127258,
                    "Y": 0.48584648966789246
                }
            ]
        },
        "Id": "65bd9a29-cbaa-424d-9f48-8417a125669b",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "e7bcfa3a-ade7-4e91-8ba3-343c27983b53"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 93.77875518798828,
        "Text": "11,54",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03527909144759178,
                "Height": 0.009423071518540382,
                "Left": 0.8825667500495911,
                "Top": 0.4771885573863983
            },
            "Polygon": [
                {
                    "X": 0.8825667500495911,
                    "Y": 0.47719302773475647
                },
                {
                    "X": 0.9178416132926941,
                    "Y": 0.4771885573863983
                },
                {
                    "X": 0.9178458452224731,
                    "Y": 0.4866071939468384
                },
                {
                    "X": 0.8825709223747253,
                    "Y": 0.48661163449287415
                }
            ]
        },
        "Id": "2efc242f-ba91-4e53-954d-122e9b859904",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "e6699393-9a70-414d-9420-0e9fd33d4c64"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 95.57623291015625,
        "Text": "Wenn du Fragen zu deiner Bestellung hast, kontaktiere bitte den Händler. Bei Fragen zur Bezahlung logge dich auf www.klarna.de ein. Dort kannst du Informationen zu",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.8470718264579773,
                "Height": 0.009713320061564445,
                "Left": 0.0632891058921814,
                "Top": 0.4929715394973755
            },
            "Polygon": [
                {
                    "X": 0.0632891058921814,
                    "Y": 0.4930770695209503
                },
                {
                    "X": 0.9103566408157349,
                    "Y": 0.4929715394973755
                },
                {
                    "X": 0.9103609323501587,
                    "Y": 0.5025807619094849
                },
                {
                    "X": 0.06329087913036346,
                    "Y": 0.5026848912239075
                }
            ]
        },
        "Id": "8f9a9c4c-7a2f-4d99-aa04-fa392ea44e4d",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "6cb25ff7-3c71-4c0c-9f42-7b646bddc7c1",
                    "465acfd3-3949-4a13-b290-c4afbef0af19",
                    "864b9de0-baad-4e51-9a5b-7f04fdf5dad3",
                    "610f3b1d-3d7b-4f19-a305-a5aeb10eae3c",
                    "bce41981-6d74-4537-ad3c-dfb93c4ef727",
                    "efd83edf-97f6-4097-8e19-a669d2dd15a2",
                    "6ebeb30a-8489-4761-a135-e6da1eeceeb8",
                    "09fb3828-c334-4e36-8651-6cb69b687321",
                    "7baeb9a4-2774-4863-a8f3-953abcf9d247",
                    "ce4734be-6c15-4074-8307-8bd8c82c9de6",
                    "23f78938-f1ae-4ce8-9b5e-bfd5b697c2ca",
                    "cbcbb3bf-1f7f-4e0e-a1a3-38c8f5bdf1ab",
                    "ad5431af-67f4-45e4-9e92-898eec4821b9",
                    "5eb093bf-d835-4c80-8c26-37f604927e09",
                    "4ea6df63-d5fb-4c3a-8516-198e0391084b",
                    "bb697781-7e09-4fcc-b0f6-112f1cbf6d69",
                    "f31eed12-9c92-4102-8ebf-e047c1d8eefb",
                    "09da6182-90d4-47bf-923a-094215f441c1",
                    "df849451-e989-4a35-b0e5-0df988e31fc8",
                    "8eb0bf3c-e32d-450f-b26e-9d7524795158",
                    "2e4efe04-2f9f-41ed-89d9-0420b542e763",
                    "7ca0cbbe-69b6-45dd-b41b-f4ac6bc04999",
                    "7c7bdcf9-84ee-4cad-be1b-05f1e6416755",
                    "af09f509-6175-4d8c-9c25-2cc67fadc52f",
                    "656ba3f3-78c4-4463-bf07-d2c500c19c95"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 90.75691986083984,
        "Text": "deinen Einkäufen mit Klarna einsehen und mit unserem Kundenservice chatten.",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.40240490436553955,
                "Height": 0.00728447875007987,
                "Left": 0.06323996186256409,
                "Top": 0.5026512742042542
            },
            "Polygon": [
                {
                    "X": 0.06323996186256409,
                    "Y": 0.5027007460594177
                },
                {
                    "X": 0.4656426012516022,
                    "Y": 0.5026512742042542
                },
                {
                    "X": 0.46564486622810364,
                    "Y": 0.5098868012428284
                },
                {
                    "X": 0.06324129551649094,
                    "Y": 0.5099357962608337
                }
            ]
        },
        "Id": "9e538313-ee78-46d4-9b50-7de968fd56b8",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "b4c2ea40-5d9e-42e5-b117-c8de7f7cb6fb",
                    "1ad59f7a-9de8-4d3a-a4b0-115f8c59e895",
                    "51bc1a7a-434e-4c05-8275-23fcb65024a9",
                    "c7409e0e-6924-4803-9abb-62c4ac5dd8fa",
                    "6fc28b87-d80f-415c-bd2b-9ab761992ec6",
                    "71d6f46c-1395-4512-ae30-6a803cfae8f4",
                    "30252b00-f794-4456-9d80-8d1e67d7f7c3",
                    "042f3046-966c-418c-bc12-460ef4532a0d",
                    "ba519680-f7c7-4e24-adce-0ce48510f5ad",
                    "1413a492-62d0-48bc-b70c-a5245c4c5218"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 94.93240356445312,
        "Text": "Im Falle nicht fristgerechter Zahlung werden weitere Verzugskosten sowie Verzugszinsen berechnet Der Nachweis eines geringeren Schadens bleibt vorbehalten",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.7034300565719604,
                "Height": 0.009107903577387333,
                "Left": 0.0637982040643692,
                "Top": 0.5766280889511108
            },
            "Polygon": [
                {
                    "X": 0.0637982040643692,
                    "Y": 0.5767056941986084
                },
                {
                    "X": 0.7672245502471924,
                    "Y": 0.5766280889511108
                },
                {
                    "X": 0.7672282457351685,
                    "Y": 0.5856595635414124
                },
                {
                    "X": 0.06379987299442291,
                    "Y": 0.5857360363006592
                }
            ]
        },
        "Id": "5474ede5-a460-4d47-8ab9-9dc78e4c024e",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "7b06e228-37d2-4b65-8bb4-339c9af2afbd",
                    "772fa2ac-2e6e-429e-a829-90415686d311",
                    "9bfe93c8-a7da-4b62-abe7-cf1d888032ca",
                    "dd6a01b5-56ec-4395-8424-10d39c38a49b",
                    "5588903c-c2bd-4248-9d89-bbaecd045ed2",
                    "0599a447-0e68-4abd-b187-cea287cabdf6",
                    "8c485b29-b34c-4e44-ab23-4cc79d7f8865",
                    "c7b99a7e-dd7a-4e36-8ba7-47d2cb6df362",
                    "3161c2b0-afd0-4a96-bd0b-c79631797039",
                    "7e7067eb-85d7-4904-bc54-ddd68531b8a7",
                    "9549273f-86b2-4624-a702-67667608b6d7",
                    "43edb2ff-24cf-4d3a-b967-f61cd20732a4",
                    "10bb1a9a-9ef2-40c1-ae16-7a61477832c8",
                    "6b555948-0c14-4350-bcc1-ce91f2260742",
                    "84537ada-f218-4bed-9e07-1c5a4e3485b1",
                    "2fb0989a-3673-41ef-bc6d-5efe9cabc629",
                    "d1b47eb1-e770-448a-8b9b-1e840e06942e",
                    "f39accaf-03a4-42c0-b0dd-045701cbda9c"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 99.15655517578125,
        "Text": "Sitz",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.017253758385777473,
                "Height": 0.005353317130357027,
                "Left": 0.06365033239126205,
                "Top": 0.5940308570861816
            },
            "Polygon": [
                {
                    "X": 0.06365033239126205,
                    "Y": 0.5940327048301697
                },
                {
                    "X": 0.0809030681848526,
                    "Y": 0.5940308570861816
                },
                {
                    "X": 0.08090408891439438,
                    "Y": 0.5993823409080505
                },
                {
                    "X": 0.06365131586790085,
                    "Y": 0.5993841886520386
                }
            ]
        },
        "Id": "5482202b-e56e-4de8-8153-219175ac65f7",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "fc2540fb-7a3f-4c7f-b4f9-2e08cf0f6d20"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 97.23054504394531,
        "Text": "Postanschrift",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06227904558181763,
                "Height": 0.005369542166590691,
                "Left": 0.18404361605644226,
                "Top": 0.5939857959747314
            },
            "Polygon": [
                {
                    "X": 0.18404361605644226,
                    "Y": 0.5939924716949463
                },
                {
                    "X": 0.24632136523723602,
                    "Y": 0.5939857959747314
                },
                {
                    "X": 0.2463226616382599,
                    "Y": 0.5993487238883972
                },
                {
                    "X": 0.18404480814933777,
                    "Y": 0.5993553400039673
                }
            ]
        },
        "Id": "15366c06-8ebf-4749-8c4d-151f306fed14",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "735a4f1d-450f-4c49-9ca8-e9c8740e483d"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.02413177490234,
        "Text": "Kundenservice",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07010706514120102,
                "Height": 0.005642896518111229,
                "Left": 0.3143256902694702,
                "Top": 0.5932478904724121
            },
            "Polygon": [
                {
                    "X": 0.3143256902694702,
                    "Y": 0.5932554006576538
                },
                {
                    "X": 0.3844311535358429,
                    "Y": 0.5932478904724121
                },
                {
                    "X": 0.38443276286125183,
                    "Y": 0.598883330821991
                },
                {
                    "X": 0.3143271803855896,
                    "Y": 0.5988907814025879
                }
            ]
        },
        "Id": "e4899ec5-fd87-41b1-8c18-939aa8c03f93",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "72c4c51d-f7ac-472f-83ba-d5c7a66728d4"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 95.5007553100586,
        "Text": "Handelsregister-Nr.",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09003818035125732,
                "Height": 0.006570331286638975,
                "Left": 0.5741074085235596,
                "Top": 0.5924336314201355
            },
            "Polygon": [
                {
                    "X": 0.5741074085235596,
                    "Y": 0.5924433469772339
                },
                {
                    "X": 0.6641431450843811,
                    "Y": 0.5924336314201355
                },
                {
                    "X": 0.6641455888748169,
                    "Y": 0.5989943742752075
                },
                {
                    "X": 0.574109673500061,
                    "Y": 0.5990039706230164
                }
            ]
        },
        "Id": "f68ed914-1454-416b-beee-eb7749d0b517",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "2634ac2a-2fc1-4212-8130-86bee0bd0269"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 84.28548431396484,
        "Text": "Zahlungsempfänger",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09377186000347137,
                "Height": 0.006857944652438164,
                "Left": 0.7635136842727661,
                "Top": 0.591303288936615
            },
            "Polygon": [
                {
                    "X": 0.7635136842727661,
                    "Y": 0.591313362121582
                },
                {
                    "X": 0.8572825789451599,
                    "Y": 0.591303288936615
                },
                {
                    "X": 0.8572855591773987,
                    "Y": 0.5981512069702148
                },
                {
                    "X": 0.7635164260864258,
                    "Y": 0.5981612205505371
                }
            ]
        },
        "Id": "3369b517-ca96-4094-bccf-fc56ca416b7d",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "0d3e28f8-062a-4778-bed1-aaddf12452ca"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.14563751220703,
        "Text": "Klarna Bank AB (publ)",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0964081883430481,
                "Height": 0.0067949178628623486,
                "Left": 0.06343112140893936,
                "Top": 0.6010076403617859
            },
            "Polygon": [
                {
                    "X": 0.06343112140893936,
                    "Y": 0.6010178923606873
                },
                {
                    "X": 0.15983785688877106,
                    "Y": 0.6010076403617859
                },
                {
                    "X": 0.15983931720256805,
                    "Y": 0.6077924966812134
                },
                {
                    "X": 0.06343237310647964,
                    "Y": 0.6078025698661804
                }
            ]
        },
        "Id": "f0fe2e56-60be-443f-9a11-d0f2b031e074",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "5876fbcd-c802-46d9-8e1f-f780ef4fb86c",
                    "1ace1197-fd36-47fb-a557-50103b3ab895",
                    "341a8f69-c329-4278-92da-1cb603ba09ff",
                    "1dac47b4-1507-4259-93e9-69e0af9da836"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.28787231445312,
        "Text": "Deutschland",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.05853768810629845,
                "Height": 0.0059324088506400585,
                "Left": 0.18400894105434418,
                "Top": 0.6008638739585876
            },
            "Polygon": [
                {
                    "X": 0.18400894105434418,
                    "Y": 0.6008701324462891
                },
                {
                    "X": 0.2425452023744583,
                    "Y": 0.6008638739585876
                },
                {
                    "X": 0.24254663288593292,
                    "Y": 0.6067901849746704
                },
                {
                    "X": 0.18401026725769043,
                    "Y": 0.6067963242530823
                }
            ]
        },
        "Id": "a2d7eb4b-d13f-4e3c-9618-bc7348d86f26",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "11e7e5a9-e740-4428-a277-0258abea33ba"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 84.60304260253906,
        "Text": "Website: www.klama.de/kundenservice",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.1708841770887375,
                "Height": 0.0059382072649896145,
                "Left": 0.3138352632522583,
                "Top": 0.6003154516220093
            },
            "Polygon": [
                {
                    "X": 0.3138352632522583,
                    "Y": 0.6003336310386658
                },
                {
                    "X": 0.48471754789352417,
                    "Y": 0.6003154516220093
                },
                {
                    "X": 0.4847194254398346,
                    "Y": 0.606235682964325
                },
                {
                    "X": 0.31383681297302246,
                    "Y": 0.6062536835670471
                }
            ]
        },
        "Id": "29f73e98-2a27-4b3e-8cda-00254305e573",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "890baf19-c871-4397-8b00-a1fe9b1b335b",
                    "39d8d4de-e9b5-4130-8bfa-9c9be721542b"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 94.96749877929688,
        "Text": "SE556737-0431",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06902153044939041,
                "Height": 0.005707028787583113,
                "Left": 0.5734754204750061,
                "Top": 0.5995652675628662
            },
            "Polygon": [
                {
                    "X": 0.5734754204750061,
                    "Y": 0.5995725989341736
                },
                {
                    "X": 0.6424948573112488,
                    "Y": 0.5995652675628662
                },
                {
                    "X": 0.6424969434738159,
                    "Y": 0.6052650213241577
                },
                {
                    "X": 0.5734773874282837,
                    "Y": 0.6052722930908203
                }
            ]
        },
        "Id": "7af295bc-1b13-4e08-8464-ecc35932254c",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "e5e70051-741b-4e3c-9e02-032963052141"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.53978729248047,
        "Text": "Klarna Bank AB (publ)",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09651198238134384,
                "Height": 0.006703504361212254,
                "Left": 0.7637518644332886,
                "Top": 0.5984770655632019
            },
            "Polygon": [
                {
                    "X": 0.7637518644332886,
                    "Y": 0.598487377166748
                },
                {
                    "X": 0.8602609634399414,
                    "Y": 0.5984770655632019
                },
                {
                    "X": 0.8602638840675354,
                    "Y": 0.6051704287528992
                },
                {
                    "X": 0.7637546062469482,
                    "Y": 0.605180561542511
                }
            ]
        },
        "Id": "0c6d775b-e374-4410-a7de-b57ce0b2b5d2",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "0625ad9e-bc4a-4229-9b15-069850f83e86",
                    "394ffa00-4185-4954-8151-7578f3501ae9",
                    "6cf6df2e-44ac-42a8-ac9c-c80315688ca7",
                    "d59a9a6f-c83d-46ec-96a4-c80c82b7b692"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 97.4586181640625,
        "Text": "Sveaväger 46",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06269878894090652,
                "Height": 0.007314272690564394,
                "Left": 0.06317363679409027,
                "Top": 0.6078221797943115
            },
            "Polygon": [
                {
                    "X": 0.06317363679409027,
                    "Y": 0.6078287959098816
                },
                {
                    "X": 0.12587092816829681,
                    "Y": 0.6078221797943115
                },
                {
                    "X": 0.1258724182844162,
                    "Y": 0.6151300072669983
                },
                {
                    "X": 0.06317497789859772,
                    "Y": 0.6151365041732788
                }
            ]
        },
        "Id": "e2b78b21-2a32-425d-b48f-52b16655c64c",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "2646df33-6b12-4741-8730-dc78fcd3f102",
                    "d1ba2211-cf92-4ab9-8c72-195de512ffcf"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.08177947998047,
        "Text": "Klarna Bank AB (publ)",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09624180942773819,
                "Height": 0.00728493370115757,
                "Left": 0.18392716348171234,
                "Top": 0.6072108745574951
            },
            "Polygon": [
                {
                    "X": 0.18392716348171234,
                    "Y": 0.6072210073471069
                },
                {
                    "X": 0.2801671326160431,
                    "Y": 0.6072108745574951
                },
                {
                    "X": 0.28016898036003113,
                    "Y": 0.6144858002662659
                },
                {
                    "X": 0.18392877280712128,
                    "Y": 0.6144958138465881
                }
            ]
        },
        "Id": "15087d49-1af7-419e-ae84-ef5c883d6a1d",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "e3fe0066-8391-4e18-862b-318b43266acb",
                    "aec89e98-bdf1-41c1-9464-126e6ed67d97",
                    "ff1b2a77-4f7c-4191-a0f5-21452d0ff3a7",
                    "33939146-02ed-4d1e-84f2-496616cdbc27"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 85.8824462890625,
        "Text": "USt-Id Nummer",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07099273055791855,
                "Height": 0.005988412071019411,
                "Left": 0.5734785795211792,
                "Top": 0.6064633131027222
            },
            "Polygon": [
                {
                    "X": 0.5734785795211792,
                    "Y": 0.6064708232879639
                },
                {
                    "X": 0.644469141960144,
                    "Y": 0.6064633131027222
                },
                {
                    "X": 0.6444713473320007,
                    "Y": 0.6124443411827087
                },
                {
                    "X": 0.5734806656837463,
                    "Y": 0.6124517321586609
                }
            ]
        },
        "Id": "18e895c5-e7f7-488a-aa07-6f5e7ee5a62b",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "897727c3-2e8f-4d5d-a435-03e16155a915",
                    "4e5f532a-c95e-450e-9494-aad2989bde20"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 62.78961944580078,
        "Text": "IBAN ::DE13760700120500154000",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.14990220963954926,
                "Height": 0.006027857307344675,
                "Left": 0.7643470764160156,
                "Top": 0.6054120659828186
            },
            "Polygon": [
                {
                    "X": 0.7643470764160156,
                    "Y": 0.6054278612136841
                },
                {
                    "X": 0.9142465591430664,
                    "Y": 0.6054120659828186
                },
                {
                    "X": 0.9142493009567261,
                    "Y": 0.6114242672920227
                },
                {
                    "X": 0.7643495202064514,
                    "Y": 0.6114399433135986
                }
            ]
        },
        "Id": "dc5b15d2-7d72-4c7e-b682-8a672f9587f1",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "ad397220-686a-4341-821c-e7a299a31c28",
                    "25c06405-aa99-47c6-828e-b533e6f13acd"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 94.11566925048828,
        "Text": "111 34 Stockholm",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07741532474756241,
                "Height": 0.006064963527023792,
                "Left": 0.06384459137916565,
                "Top": 0.6152256727218628
            },
            "Polygon": [
                {
                    "X": 0.06384459137916565,
                    "Y": 0.6152336597442627
                },
                {
                    "X": 0.14125865697860718,
                    "Y": 0.6152256727218628
                },
                {
                    "X": 0.14125992357730865,
                    "Y": 0.621282696723938
                },
                {
                    "X": 0.06384570896625519,
                    "Y": 0.6212906241416931
                }
            ]
        },
        "Id": "0dd74a45-1398-4e09-8541-fa703cc41e71",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "160f4002-b622-4559-91ca-5d7f91654747",
                    "40be6b65-fa97-4f5d-a9fb-97c61772e2b4",
                    "fdb8b6bc-2019-4290-8d9b-af64e0c934c7"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.4925765991211,
        "Text": "Postfach 900162",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07337494194507599,
                "Height": 0.0059273275546729565,
                "Left": 0.18398430943489075,
                "Top": 0.6151033639907837
            },
            "Polygon": [
                {
                    "X": 0.18398430943489075,
                    "Y": 0.6151109933853149
                },
                {
                    "X": 0.25735780596733093,
                    "Y": 0.6151033639907837
                },
                {
                    "X": 0.25735926628112793,
                    "Y": 0.6210231781005859
                },
                {
                    "X": 0.183985635638237,
                    "Y": 0.6210306882858276
                }
            ]
        },
        "Id": "357bbb94-f75a-4840-a0ed-95672052a510",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "4c5c9c1b-fb52-4171-bcd2-5f3b39db02b4",
                    "4714dc5e-90fa-4d79-a4d4-e1142426a454"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.1492691040039,
        "Text": "SE556737043101",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07702156156301498,
                "Height": 0.005942271091043949,
                "Left": 0.5737752914428711,
                "Top": 0.6137163639068604
            },
            "Polygon": [
                {
                    "X": 0.5737752914428711,
                    "Y": 0.613724410533905
                },
                {
                    "X": 0.6507946848869324,
                    "Y": 0.6137163639068604
                },
                {
                    "X": 0.6507968306541443,
                    "Y": 0.6196507215499878
                },
                {
                    "X": 0.5737773776054382,
                    "Y": 0.6196586489677429
                }
            ]
        },
        "Id": "0759a5ee-a9ca-48c2-b3ae-7c6b53c73619",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "1cf14bfe-e860-4e5e-91ab-c6931507672d"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.37567138671875,
        "Text": "BIC: DEUTDEMM760",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09425502270460129,
                "Height": 0.005953306332230568,
                "Left": 0.7637808918952942,
                "Top": 0.6126559376716614
            },
            "Polygon": [
                {
                    "X": 0.7637808918952942,
                    "Y": 0.6126657128334045
                },
                {
                    "X": 0.8580333590507507,
                    "Y": 0.6126559376716614
                },
                {
                    "X": 0.8580359220504761,
                    "Y": 0.618599534034729
                },
                {
                    "X": 0.76378333568573,
                    "Y": 0.6186092495918274
                }
            ]
        },
        "Id": "d51e26b3-8cb2-4787-b3d4-5a5a8c6426b4",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "b45e9295-3a23-4198-a903-dde7c1d3e952",
                    "16b0fa0b-07c8-43ca-a102-488348560447"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 99.33570861816406,
        "Text": "Schweden",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04578959569334984,
                "Height": 0.005929904989898205,
                "Left": 0.06317832320928574,
                "Top": 0.6223414540290833
            },
            "Polygon": [
                {
                    "X": 0.06317832320928574,
                    "Y": 0.6223461627960205
                },
                {
                    "X": 0.10896673798561096,
                    "Y": 0.6223414540290833
                },
                {
                    "X": 0.10896791517734528,
                    "Y": 0.6282666921615601
                },
                {
                    "X": 0.06317941844463348,
                    "Y": 0.6282713413238525
                }
            ]
        },
        "Id": "3111633b-ec91-413b-a11d-f6993f49a91c",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "34ab3e7b-e919-4d98-ac5c-38e3c58fed09"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.2461166381836,
        "Text": "90492 Nürnberg",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07026311755180359,
                "Height": 0.0071105328388512135,
                "Left": 0.18371641635894775,
                "Top": 0.6221063137054443
            },
            "Polygon": [
                {
                    "X": 0.18371641635894775,
                    "Y": 0.6221135258674622
                },
                {
                    "X": 0.25397780537605286,
                    "Y": 0.6221063137054443
                },
                {
                    "X": 0.25397953391075134,
                    "Y": 0.6292096972465515
                },
                {
                    "X": 0.1837179958820343,
                    "Y": 0.6292168498039246
                }
            ]
        },
        "Id": "667d6aee-269c-44c4-a466-218689e75c3b",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "7f81e601-e501-46ff-bd8e-876690e5a3df",
                    "2b4d70e6-45a6-4ba8-ae6b-46ff1009c15f"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 89.82600402832031,
        "Text": "Vorstandsvorsitzender",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.1070750281214714,
                "Height": 0.005822672042995691,
                "Left": 0.5729473829269409,
                "Top": 0.6207273006439209
            },
            "Polygon": [
                {
                    "X": 0.5729473829269409,
                    "Y": 0.6207382678985596
                },
                {
                    "X": 0.6800202131271362,
                    "Y": 0.6207273006439209
                },
                {
                    "X": 0.6800224184989929,
                    "Y": 0.6265390515327454
                },
                {
                    "X": 0.5729494094848633,
                    "Y": 0.6265499591827393
                }
            ]
        },
        "Id": "33465f55-131a-4144-ac97-d827dbe0d1a5",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "a653d5f2-11b0-4344-a611-bff3e6ee5469"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 89.74618530273438,
        "Text": "Bank: Deutsche Bank AG",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.11042264103889465,
                "Height": 0.005947251338511705,
                "Left": 0.7637368440628052,
                "Top": 0.6199091672897339
            },
            "Polygon": [
                {
                    "X": 0.7637368440628052,
                    "Y": 0.6199204921722412
                },
                {
                    "X": 0.8741568922996521,
                    "Y": 0.6199091672897339
                },
                {
                    "X": 0.8741595149040222,
                    "Y": 0.6258451342582703
                },
                {
                    "X": 0.7637392282485962,
                    "Y": 0.6258563995361328
                }
            ]
        },
        "Id": "6ded4a4b-fcc9-412a-ac6b-15f3f2a30e63",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "b5c73ce2-b824-489f-95b4-dfd621c1a576",
                    "3287210b-c944-4eba-8a5e-a5327cad8f78",
                    "930e7391-22f6-447f-b979-f7e878cc795d",
                    "eee89f8d-0939-4b4e-96af-29ec4d1d6b50"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 97.72433471679688,
        "Text": "Sebastian Siemiatkowski",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.1080247089266777,
                "Height": 0.005969527177512646,
                "Left": 0.5728938579559326,
                "Top": 0.6277613639831543
            },
            "Polygon": [
                {
                    "X": 0.5728938579559326,
                    "Y": 0.627772331237793
                },
                {
                    "X": 0.6809163093566895,
                    "Y": 0.6277613639831543
                },
                {
                    "X": 0.6809185743331909,
                    "Y": 0.6337200403213501
                },
                {
                    "X": 0.572895884513855,
                    "Y": 0.6337308883666992
                }
            ]
        },
        "Id": "74cc0b83-0382-4f53-b14a-c84ab57578c4",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "f6c5b9e8-eb67-4977-b77d-b234d8aa584d",
                    "0e7c529e-27f2-4ec6-978e-9814558f815b"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 95.3182601928711,
        "Text": "Beleg/Quittung für Kontoinhaber/Zahler",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.2467014640569687,
                "Height": 0.009424206800758839,
                "Left": 0.024460332468152046,
                "Top": 0.6442208886146545
            },
            "Polygon": [
                {
                    "X": 0.024460332468152046,
                    "Y": 0.6442452669143677
                },
                {
                    "X": 0.27115944027900696,
                    "Y": 0.6442208886146545
                },
                {
                    "X": 0.2711617946624756,
                    "Y": 0.6536211371421814
                },
                {
                    "X": 0.024461951106786728,
                    "Y": 0.6536450982093811
                }
            ]
        },
        "Id": "265822c7-dfa0-45bb-92ae-1df6c734207b",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "377510d7-d30e-4fc8-9d33-195aa8b33e76",
                    "b473c2b5-2ccd-4647-9186-28db076b1c7c",
                    "b1ad2539-d0e7-43c3-9e7c-e32b5a48d42b"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 87.36225128173828,
        "Text": "SEPA-Überweisung",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.14987485110759735,
                "Height": 0.012797017581760883,
                "Left": 0.30430668592453003,
                "Top": 0.6421756148338318
            },
            "Polygon": [
                {
                    "X": 0.30430668592453003,
                    "Y": 0.6421904563903809
                },
                {
                    "X": 0.4541776180267334,
                    "Y": 0.6421756148338318
                },
                {
                    "X": 0.4541815519332886,
                    "Y": 0.6549580693244934
                },
                {
                    "X": 0.30431002378463745,
                    "Y": 0.6549726128578186
                }
            ]
        },
        "Id": "7cd95be2-98de-496b-a668-2b27810efaa5",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "eb67c61d-0169-4278-b19c-c28e68253f9e"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 93.26884460449219,
        "Text": "Für Überweisungen in Deutschland. in andere",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.2498912513256073,
                "Height": 0.008355257101356983,
                "Left": 0.6571847796440125,
                "Top": 0.6499680280685425
            },
            "Polygon": [
                {
                    "X": 0.6571847796440125,
                    "Y": 0.6499924659729004
                },
                {
                    "X": 0.9070723056793213,
                    "Y": 0.6499680280685425
                },
                {
                    "X": 0.9070760011672974,
                    "Y": 0.6582992076873779
                },
                {
                    "X": 0.6571878790855408,
                    "Y": 0.6583232879638672
                }
            ]
        },
        "Id": "97823180-87a0-4847-ab1f-90b44131cd4c",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "2cdd7209-91f2-46d2-aee9-594f83ae2822",
                    "2cf6a19d-00f8-4412-a563-884a01158574",
                    "3abc8e55-229b-4b81-8860-2cda5cb56032",
                    "5a0288d6-554b-473c-936b-660cfddaed77",
                    "43087b26-6534-4a36-adb3-0989c37a07cc",
                    "0795f2da-6848-4e8d-bba9-924e00a59c85"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 97.42424011230469,
        "Text": "IBAN des Kontoinhabers",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.12124209851026535,
                "Height": 0.00615073274821043,
                "Left": 0.08950316160917282,
                "Top": 0.6575849652290344
            },
            "Polygon": [
                {
                    "X": 0.08950316160917282,
                    "Y": 0.6575966477394104
                },
                {
                    "X": 0.21074384450912476,
                    "Y": 0.6575849652290344
                },
                {
                    "X": 0.21074526011943817,
                    "Y": 0.6637241244316101
                },
                {
                    "X": 0.08950434625148773,
                    "Y": 0.6637356877326965
                }
            ]
        },
        "Id": "95b0cd64-c4d4-4a07-9c4d-2f8634a13018",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "d572b613-dc84-42f0-9f96-cb61cc892296",
                    "e30cda20-1545-416f-ac99-48e0d17de044",
                    "a73ad77e-424f-4961-9feb-94b686f0d649"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 95.04378509521484,
        "Text": "EU-/EWR-Staaten und in die Schweiz in Euro.",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.2457990050315857,
                "Height": 0.007442173082381487,
                "Left": 0.6569897532463074,
                "Top": 0.6593413352966309
            },
            "Polygon": [
                {
                    "X": 0.6569897532463074,
                    "Y": 0.6593649387359619
                },
                {
                    "X": 0.9027854204177856,
                    "Y": 0.6593413352966309
                },
                {
                    "X": 0.9027887582778931,
                    "Y": 0.6667602062225342
                },
                {
                    "X": 0.656992495059967,
                    "Y": 0.6667835116386414
                }
            ]
        },
        "Id": "36b2ec10-fc00-4c0e-ad71-5ea04fa6ecfe",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "8e396f56-cb3c-468f-b5ed-f1713754a240",
                    "975f4eb4-ecce-4734-8f78-8eaf649bb463",
                    "66915cbb-e3ec-4eaf-97da-9260831e72ac",
                    "7f87892c-783d-4950-8bba-08f347de6a08",
                    "6fc8e910-3a0b-4a45-99aa-70cc24b34a95",
                    "6dd4f0da-791a-4839-b7ac-9e499a719f04",
                    "1b97fdb2-2e63-425c-9b3d-5f8c9b1fb73e"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 83.85015106201172,
        "Text": "Bitte Meldepflicht gemäß Außenwirtschaftsverordnung beachten",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.28078755736351013,
                "Height": 0.008174368180334568,
                "Left": 0.6573808193206787,
                "Top": 0.6682248115539551
            },
            "Polygon": [
                {
                    "X": 0.6573808193206787,
                    "Y": 0.6682513952255249
                },
                {
                    "X": 0.9381645917892456,
                    "Y": 0.6682248115539551
                },
                {
                    "X": 0.9381683468818665,
                    "Y": 0.6763730049133301
                },
                {
                    "X": 0.6573838591575623,
                    "Y": 0.6763991713523865
                }
            ]
        },
        "Id": "19cbc988-d3a5-4a07-8fac-b579128f097f",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "8f5b8583-d275-4eda-a72e-03deaf8faa6f",
                    "5cf979ea-a50a-4e1d-b2ab-8181e9f6d834",
                    "d7c3a53c-3882-43ab-a382-52ef72bf0386",
                    "d9103e3c-2f9c-481e-96fd-8d6a3b1d3c1f",
                    "24f975ae-9a5a-4ef9-86d0-d14704887cf4"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 95.72504425048828,
        "Text": "Angaben zum Zahlungsempfänger",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.16899879276752472,
                "Height": 0.007355379872024059,
                "Left": 0.03839997574687004,
                "Top": 0.696146547794342
            },
            "Polygon": [
                {
                    "X": 0.03839997574687004,
                    "Y": 0.696161687374115
                },
                {
                    "X": 0.20739707350730896,
                    "Y": 0.696146547794342
                },
                {
                    "X": 0.20739875733852386,
                    "Y": 0.7034869194030762
                },
                {
                    "X": 0.038401272147893906,
                    "Y": 0.7035019397735596
                }
            ]
        },
        "Id": "eb8e393d-cd6a-4bbd-a513-83ba94ebdcb9",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "4eb0e76c-f6bd-4474-9e75-38493f475d1d",
                    "3fa341bc-4825-4a4d-bf70-b5adf69a5d73",
                    "760e5609-585e-45d8-bf23-93cdd7390394"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 84.45264434814453,
        "Text": "Angaben zum Zahlungsempfänger: Name, Vorname/Firma (max. 27 Stellen, bei maschineller Beschriftung max 35 Stellen)",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.5222017168998718,
                "Height": 0.008389022201299667,
                "Left": 0.3327406942844391,
                "Top": 0.6985933780670166
            },
            "Polygon": [
                {
                    "X": 0.3327406942844391,
                    "Y": 0.6986400485038757
                },
                {
                    "X": 0.8549387454986572,
                    "Y": 0.6985933780670166
                },
                {
                    "X": 0.8549423813819885,
                    "Y": 0.7069364786148071
                },
                {
                    "X": 0.33274292945861816,
                    "Y": 0.7069823741912842
                }
            ]
        },
        "Id": "bdf8f6a1-6466-4111-b34d-c82405ccb282",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "3f9ec173-f01d-4389-ba2f-fadc70cc1c5b",
                    "df656a76-24f1-4433-be29-b494b318994d",
                    "3369a80c-1cfb-435f-b9f5-05e94e76d6db",
                    "b113cdf6-f7b0-4bf8-98df-8238463e15d7",
                    "f723fbb7-120f-4e08-8b9e-a48c70566058",
                    "a39071bf-893c-497d-84a0-4302d515441c",
                    "5205a107-dd0a-4266-be21-0eb101db49d7",
                    "de47e4cc-24d9-4806-9edc-85ba8b4d7893",
                    "3df84aa8-3660-4117-b37d-1852b2cc7cc3",
                    "79d2a2a8-ef99-418f-b9f9-06dbe9a74c41",
                    "fe5121a8-ae66-406b-a2a7-e576741f4d8d",
                    "4e814a53-3f9c-4046-a408-9e6f3e36ecd4",
                    "24aa96ae-8f8a-4419-ae31-c7ed3894fe17",
                    "6d228279-c717-491d-92a4-f4eafeddbc93"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 95.34160614013672,
        "Text": "K L A R N A",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.1253168284893036,
                "Height": 0.009622673504054546,
                "Left": 0.33133360743522644,
                "Top": 0.7095550894737244
            },
            "Polygon": [
                {
                    "X": 0.33133360743522644,
                    "Y": 0.709566056728363
                },
                {
                    "X": 0.45664748549461365,
                    "Y": 0.7095550894737244
                },
                {
                    "X": 0.45665043592453003,
                    "Y": 0.7191669940948486
                },
                {
                    "X": 0.33133620023727417,
                    "Y": 0.719177782535553
                }
            ]
        },
        "Id": "644b47aa-d7fc-4839-8e7b-8b7f560aa9be",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "9e4b7899-0b2f-401e-9405-d1cdc8d06465",
                    "6144c3d4-ea44-4b1f-9e5c-b9e5cb2aa7a7",
                    "eba1a4a4-cc54-414f-9791-0e5978f9831c",
                    "f7605d9a-95d6-4164-bca0-e84db6cf400d",
                    "081ac4ac-80fd-4fd8-a0ff-1b09721491c3",
                    "d39a32c3-d091-48af-a080-7ae17034fee9"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 99.52265167236328,
        "Text": "IBAN",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024273546412587166,
                "Height": 0.005809295456856489,
                "Left": 0.03626905381679535,
                "Top": 0.7318523526191711
            },
            "Polygon": [
                {
                    "X": 0.03626905381679535,
                    "Y": 0.7318543791770935
                },
                {
                    "X": 0.060541536659002304,
                    "Y": 0.7318523526191711
                },
                {
                    "X": 0.060542602092027664,
                    "Y": 0.7376596331596375
                },
                {
                    "X": 0.036270078271627426,
                    "Y": 0.7376616597175598
                }
            ]
        },
        "Id": "242676d5-89d5-4c5e-b441-a4f6759e3860",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "4df09139-4eca-470d-a91b-829ef5afc362"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 91.5149917602539,
        "Text": "IBAN",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02281096950173378,
                "Height": 0.005060724448412657,
                "Left": 0.33329635858535767,
                "Top": 0.7294782996177673
            },
            "Polygon": [
                {
                    "X": 0.33329635858535767,
                    "Y": 0.7294802069664001
                },
                {
                    "X": 0.3561059236526489,
                    "Y": 0.7294782996177673
                },
                {
                    "X": 0.35610732436180115,
                    "Y": 0.7345371246337891
                },
                {
                    "X": 0.3332976996898651,
                    "Y": 0.7345390319824219
                }
            ]
        },
        "Id": "e7743eb2-e570-4cb4-a7e7-6456e4d1fb05",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "9bf12917-88ea-4fbe-9a94-2388b9726f5e"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 92.45582580566406,
        "Text": "D E 1 3 7 6 0 7 0 0 2 0 5 0 0 1 5 4 0 00",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.3904257118701935,
                "Height": 0.01168576255440712,
                "Left": 0.330827921628952,
                "Top": 0.7360528111457825
            },
            "Polygon": [
                {
                    "X": 0.330827921628952,
                    "Y": 0.7360851764678955
                },
                {
                    "X": 0.7212490439414978,
                    "Y": 0.7360528111457825
                },
                {
                    "X": 0.7212536334991455,
                    "Y": 0.747706949710846
                },
                {
                    "X": 0.33083105087280273,
                    "Y": 0.7477385401725769
                }
            ]
        },
        "Id": "0c2332d8-d461-4d89-9649-604da2246026",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "a52c5673-4d74-424a-ae2a-f81b3b0ae549",
                    "9d913810-8b8a-44f6-809d-adc577d601ec",
                    "7a6d0241-daa2-44b3-bd59-8302c5808e36",
                    "a18d3135-2f05-41db-b55c-83ae890a2f4a",
                    "ebff7982-acf6-4940-9af4-eab68123a256",
                    "fc9070cc-7e6c-4f1d-9c56-74c382da681f",
                    "77d97ad0-1806-4bec-b733-ad797b043c2e",
                    "8f1d3e47-fe4e-4ea9-9b53-0936a03aa39e",
                    "031356fc-f56e-4fc8-91f5-e931570bb798",
                    "8c5c74fe-b684-4779-a809-a58469859bf5",
                    "60ebe34e-bc21-4ba8-92bd-e2573ecbc8fb",
                    "02a6b9af-17fd-4cb0-80be-82f391dfdece",
                    "ff95d3e3-3d84-4661-a8b7-b305ebe16f38",
                    "c32e34be-e583-4d32-9569-6bb5ddb84577",
                    "fae0ced4-19d0-450b-b089-74dc895fadcd",
                    "ec9c5506-1883-4f30-922e-49095e256f13",
                    "d77a46ff-fd65-4d0d-a921-6025d77e01fb",
                    "626a7261-d468-4c38-b4a5-be746e3a5158",
                    "0e6d800a-03d7-4e61-aa7f-9eb19a321163",
                    "793570ef-c0fc-475c-81dd-a27f58585dde"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 88.8840560913086,
        "Text": "BIC des (2 oder 11 Stellen)",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.28860998153686523,
                "Height": 0.006215454079210758,
                "Left": 0.3334827423095703,
                "Top": 0.7575553059577942
            },
            "Polygon": [
                {
                    "X": 0.3334827423095703,
                    "Y": 0.7575781941413879
                },
                {
                    "X": 0.6220904588699341,
                    "Y": 0.7575553059577942
                },
                {
                    "X": 0.6220927238464355,
                    "Y": 0.7637481689453125
                },
                {
                    "X": 0.333484411239624,
                    "Y": 0.7637707591056824
                }
            ]
        },
        "Id": "1ce9218e-e289-4f21-af03-c824b281c7b6",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "c6923ec2-5a67-43e6-b009-243195b05eba",
                    "87ed8e73-61c7-484a-affd-98e6e1d1338d",
                    "7bc77d6c-5411-4a0f-8b02-707d12c38c20",
                    "4e6cc9a6-8961-4345-8a8c-46c901725a7a",
                    "9e7642eb-0ec6-4231-97f7-bafad9766236",
                    "12df8d5a-98a8-46c0-8397-4b448135b13e"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 94.41581726074219,
        "Text": "BIC des Kreditinstituts/Zahlungsdienstleisters",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.22648927569389343,
                "Height": 0.007223987951874733,
                "Left": 0.03704594448208809,
                "Top": 0.7616313099861145
            },
            "Polygon": [
                {
                    "X": 0.03704594448208809,
                    "Y": 0.7616491317749023
                },
                {
                    "X": 0.26353344321250916,
                    "Y": 0.7616313099861145
                },
                {
                    "X": 0.2635352313518524,
                    "Y": 0.7688378095626831
                },
                {
                    "X": 0.037047214806079865,
                    "Y": 0.7688553333282471
                }
            ]
        },
        "Id": "7d403f13-30a1-4fb5-9a90-06a57a5ed81b",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "c69d2d1f-6cec-4d10-9104-27951c19bcad",
                    "bbf7ef0a-3104-4984-90a0-d73fb459dcf0",
                    "639c8b9d-598f-4c7c-9738-5abf365ae358"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.38497161865234,
        "Text": "D E U T D E M M 7 6",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.21640904247760773,
                "Height": 0.010399195365607738,
                "Left": 0.3319894075393677,
                "Top": 0.7658597826957703
            },
            "Polygon": [
                {
                    "X": 0.3319894075393677,
                    "Y": 0.7658766508102417
                },
                {
                    "X": 0.5483949780464172,
                    "Y": 0.7658597826957703
                },
                {
                    "X": 0.5483984351158142,
                    "Y": 0.7762424945831299
                },
                {
                    "X": 0.3319922089576721,
                    "Y": 0.7762589454650879
                }
            ]
        },
        "Id": "9308776f-cae9-4124-977b-9b5358e57697",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "4021587d-d51c-4fba-abcb-207a7c64141a",
                    "26f34470-5a4f-4f4a-ad1c-d245b948338f",
                    "1eb62ad6-8d4c-4bd0-89e7-286aa42df523",
                    "e2b14a2e-5b79-4b1e-9a50-3d12faf71880",
                    "e7c646da-e499-4632-b018-47c358e18829",
                    "351dc10e-4d11-429f-a665-edf5df05fb61",
                    "ae692593-a329-47d2-87a7-e81f90aa0782",
                    "0cef5bc8-36c3-4afa-9c07-42691762e77e",
                    "6c843f93-6e1e-4e2f-a6d4-94e15d91ef8e",
                    "1e6d0576-f49f-4df6-8d5b-b067161db4be"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 94.9438705444336,
        "Text": "Betrag: Euro, Cent",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09037794917821884,
                "Height": 0.006832946557551622,
                "Left": 0.04391160234808922,
                "Top": 0.7853293418884277
            },
            "Polygon": [
                {
                    "X": 0.04391160234808922,
                    "Y": 0.7853360772132874
                },
                {
                    "X": 0.13428814709186554,
                    "Y": 0.7853293418884277
                },
                {
                    "X": 0.13428954780101776,
                    "Y": 0.7921556234359741
                },
                {
                    "X": 0.043912820518016815,
                    "Y": 0.792162299156189
                }
            ]
        },
        "Id": "92bb0321-7815-4a8a-b40e-cb03eb631eaa",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "a8e43ed6-c751-4dc1-8905-4284bf4ff0ca",
                    "2145169a-0d1a-473e-8c64-591ae0a5b449",
                    "033ec13a-9e16-4edd-bbb4-94b2b8cd875b"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 90.40653991699219,
        "Text": "Betrag: Euro. Cent",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08565676212310791,
                "Height": 0.007147881202399731,
                "Left": 0.6814653873443604,
                "Top": 0.7812172770500183
            },
            "Polygon": [
                {
                    "X": 0.6814653873443604,
                    "Y": 0.781223714351654
                },
                {
                    "X": 0.767119288444519,
                    "Y": 0.7812172770500183
                },
                {
                    "X": 0.7671221494674683,
                    "Y": 0.7883588075637817
                },
                {
                    "X": 0.68146812915802,
                    "Y": 0.7883651256561279
                }
            ]
        },
        "Id": "c6451ece-4e06-4c58-9303-0371f810032c",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "2121b827-5178-460f-a183-0be107b7febc",
                    "b51acea0-72f7-4723-97d3-a955fc28defb",
                    "dab82232-ba27-4448-8fe1-b95283a173d5"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 92.56584930419922,
        "Text": "1 1 5 4",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10127881169319153,
                "Height": 0.010475958697497845,
                "Left": 0.6788924932479858,
                "Top": 0.7901288270950317
            },
            "Polygon": [
                {
                    "X": 0.6788924932479858,
                    "Y": 0.7901363372802734
                },
                {
                    "X": 0.7801670432090759,
                    "Y": 0.7901288270950317
                },
                {
                    "X": 0.7801713347434998,
                    "Y": 0.8005975484848022
                },
                {
                    "X": 0.6788964867591858,
                    "Y": 0.8006048202514648
                }
            ]
        },
        "Id": "9de24328-e24c-4db0-b3af-4b5baff12e3b",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "43780db8-d6c2-4245-87fb-9fd2babde21a",
                    "16ec4161-d55b-4d21-9958-b067cf65d5bf",
                    "7c355b96-ad7f-4b67-849d-8299fbca35d0",
                    "4042602d-01e8-4e3d-9844-ab156c4ff38f"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 84.88812255859375,
        "Text": "Kunden-Referenznummer Verwendungszweck, ggf. Name und Anschrift des Zahlers (not für Zahlungsempfänger)",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.4726792573928833,
                "Height": 0.006993328686803579,
                "Left": 0.328923761844635,
                "Top": 0.8109188675880432
            },
            "Polygon": [
                {
                    "X": 0.328923761844635,
                    "Y": 0.8109520673751831
                },
                {
                    "X": 0.8016000986099243,
                    "Y": 0.8109188675880432
                },
                {
                    "X": 0.8016030192375183,
                    "Y": 0.8178795576095581
                },
                {
                    "X": 0.32892563939094543,
                    "Y": 0.817912220954895
                }
            ]
        },
        "Id": "e66a260a-34dc-4ecb-bd78-03bb826863f8",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "41feabf2-9d54-44b9-becf-bbbdaa67f2f2",
                    "4975fe53-86ad-4a45-9322-0bb02143c5a7",
                    "1864f4bc-292c-4078-86ab-2b99a0aeeedd",
                    "5899b3ea-e15e-4848-ae63-60e7a46d4e44",
                    "d8769df2-98b0-41af-9f59-443d01d2d042",
                    "6609275b-0d45-4e5a-bbf5-377c85cc622f",
                    "1a31336b-a9cf-4697-b80f-38e116b43de3",
                    "168aeef2-a77e-46d1-86b9-abcb73261979",
                    "e7d34236-a2ec-48e3-90c9-9ca228680fb5",
                    "da64e18f-7407-441c-9e2d-4c2829eb2a30",
                    "54be1dbb-119c-4f18-b435-be95d06684bf"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 91.69854736328125,
        "Text": "Kunden-Referenznummer",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.12585967779159546,
                "Height": 0.005768930539488792,
                "Left": 0.03712254762649536,
                "Top": 0.8207778334617615
            },
            "Polygon": [
                {
                    "X": 0.03712254762649536,
                    "Y": 0.8207864761352539
                },
                {
                    "X": 0.16298097372055054,
                    "Y": 0.8207778334617615
                },
                {
                    "X": 0.16298222541809082,
                    "Y": 0.8265382647514343
                },
                {
                    "X": 0.03712356463074684,
                    "Y": 0.8265467882156372
                }
            ]
        },
        "Id": "0c759519-6917-41fd-80e0-b49c69c98e30",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "0615dfc9-910f-4aac-a70f-fca1cc03db31"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 96.35181427001953,
        "Text": "noch Verwendungszweck",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09349938482046127,
                "Height": 0.005667929537594318,
                "Left": 0.04092298075556755,
                "Top": 0.8282378315925598
            },
            "Polygon": [
                {
                    "X": 0.04092298075556755,
                    "Y": 0.828244149684906
                },
                {
                    "X": 0.1344211995601654,
                    "Y": 0.8282378315925598
                },
                {
                    "X": 0.13442236185073853,
                    "Y": 0.8338995575904846
                },
                {
                    "X": 0.040923986583948135,
                    "Y": 0.8339057564735413
                }
            ]
        },
        "Id": "9a41cffd-3089-4c9b-a064-c4ec2fa64fd8",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "eaf823ff-1e15-481a-815e-eac93aa05b94",
                    "edfa9f80-1a0a-44c8-bd25-628de5499f8d"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 87.02786254882812,
        "Text": "noch Verwendungszweck (insgesamt max 2 Zeilen à 27 Stellen be maschineller Beschriftung max 2 Zeilen à 35 Stellen,",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.493147611618042,
                "Height": 0.007920983247458935,
                "Left": 0.32860317826271057,
                "Top": 0.8392676711082458
            },
            "Polygon": [
                {
                    "X": 0.32860317826271057,
                    "Y": 0.8392999172210693
                },
                {
                    "X": 0.8217474818229675,
                    "Y": 0.8392676711082458
                },
                {
                    "X": 0.821750819683075,
                    "Y": 0.8471571207046509
                },
                {
                    "X": 0.3286052942276001,
                    "Y": 0.8471886515617371
                }
            ]
        },
        "Id": "cb2213cc-9628-40be-a6e8-6ffde9be4353",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "cd5266e1-4118-4bf9-94f4-f35573744ae9",
                    "5a44b654-8653-40a4-950f-38f819ccba39",
                    "9fe5efbf-c077-4360-8d33-e236e871d6ee",
                    "2e5f04c1-8ec5-48fb-ac83-f38c6227553b",
                    "11ae35c8-f84d-494f-a486-bb37fc1ecc42",
                    "b285f2d2-b318-4753-a8c4-d1b8fec86a7a",
                    "ac51eae9-610b-4308-8056-29581451a682",
                    "07c52e39-2805-462a-a3c5-b412dea9184e",
                    "511ed585-daf8-4387-ac7f-bcfc35e0abe2",
                    "5bc383e3-f2fa-4760-b2c2-b0683bed81ae",
                    "bbc29df2-da46-4086-9afb-af1719ba6d33",
                    "040b05f8-7eeb-4fcf-8fb1-85923499da3e",
                    "13db7ef7-0bf8-4656-b625-2c7813ef42c8",
                    "6b7c14f0-666a-4a50-ae10-5aa915d8bc30",
                    "0215b1fe-659e-43e1-a9e5-745c1ac25b90",
                    "51c00e67-c2da-49dd-a8e0-bf79115fdc4b",
                    "e0823c26-ebe7-435b-b1c8-003f84260157",
                    "65879395-bdf9-41cc-8e7b-f91c0fb0bca6"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 95.23217010498047,
        "Text": "8 6 6 8 5 5 6 1 3 0 4 3 9",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.28600308299064636,
                "Height": 0.010644945316016674,
                "Left": 0.3320085108280182,
                "Top": 0.8466143608093262
            },
            "Polygon": [
                {
                    "X": 0.3320085108280182,
                    "Y": 0.8466326594352722
                },
                {
                    "X": 0.6180077791213989,
                    "Y": 0.8466143608093262
                },
                {
                    "X": 0.6180115938186646,
                    "Y": 0.8572414517402649
                },
                {
                    "X": 0.3320113718509674,
                    "Y": 0.8572592735290527
                }
            ]
        },
        "Id": "c4fbfd32-c05f-4e03-ac69-873003e8bd05",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "dbe8562b-f974-41fa-a2ae-9b1e9bd3de55",
                    "6a922f50-b114-4068-ac45-cb39d86f6122",
                    "53a355a4-71d9-469a-a6dd-d1de19e67584",
                    "398b0156-a3b1-4f71-9c2d-3fefc97a3d89",
                    "37450730-c82c-4032-a8de-dd80877068ae",
                    "43049838-ce3f-4508-a688-d44f6c548f2d",
                    "29897be4-0f78-44cf-9886-06c6055597e8",
                    "3dc3b617-fbae-4ea7-9d2c-48653e2cbb30",
                    "eff9b28e-aab5-4f63-9bd2-8dfe58567ba0",
                    "51502732-d304-4c83-b2d3-cdb7c5e5cc53",
                    "735a2b41-25ac-450d-91e3-1c14b0aacd81",
                    "ef37051d-83e9-4743-a370-7ac10f7cb509",
                    "f9760450-37ea-4f10-bd7a-0b0501bd9da2"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 85.98747253417969,
        "Text": "Angaben zum Kontainhaber: Name Vorname/Firma Ort (max. 27 Stellen keine Stroßen- oder Postfachangaben)",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.481546014547348,
                "Height": 0.007066019345074892,
                "Left": 0.33309313654899597,
                "Top": 0.8677850961685181
            },
            "Polygon": [
                {
                    "X": 0.33309313654899597,
                    "Y": 0.8678142428398132
                },
                {
                    "X": 0.8146361708641052,
                    "Y": 0.8677850961685181
                },
                {
                    "X": 0.814639151096344,
                    "Y": 0.8748225569725037
                },
                {
                    "X": 0.3330950140953064,
                    "Y": 0.8748511075973511
                }
            ]
        },
        "Id": "25387f2b-49b5-4a0c-8e34-dc6439272106",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "3c235eb0-271a-4a40-ad39-ea6b3003425d",
                    "467561a0-f2c7-40a1-ad0e-e01c89e9892b",
                    "819cf739-6a90-4fe6-a3a1-3434c7bec2e3",
                    "c15114f5-4bfa-457a-9f29-5c81ba090b17",
                    "ca2bcc21-43b0-4521-94b2-063ec35f7a53",
                    "33ebc465-6305-4fc7-9660-cc52d265db0e",
                    "6f168820-dac6-4685-90db-9709c5ed7345",
                    "d277ebe9-a157-4a76-b67f-b0132a890f07",
                    "775df378-77f6-4a16-9384-da17c0ac5a8e",
                    "39cb0e78-d3c8-45c8-9a01-f1779ceb85e1",
                    "1cac397f-55de-4973-9813-68cb16901ce6",
                    "cfbeadc6-9cfc-4d0b-b291-abc62f833967",
                    "a892eb97-6ca6-49aa-9b5d-db72ded0a676"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 95.6440200805664,
        "Text": "Angaben zum Kontoinhaber/Zahler",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.17094656825065613,
                "Height": 0.007135120220482349,
                "Left": 0.03670842573046684,
                "Top": 0.8743481040000916
            },
            "Polygon": [
                {
                    "X": 0.03670842573046684,
                    "Y": 0.8743582963943481
                },
                {
                    "X": 0.20765335857868195,
                    "Y": 0.8743481040000916
                },
                {
                    "X": 0.20765499770641327,
                    "Y": 0.8814733028411865
                },
                {
                    "X": 0.036709681153297424,
                    "Y": 0.881483256816864
                }
            ]
        },
        "Id": "ef1a7732-dadd-44ec-a404-e8ea94d62424",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "ef4a3707-3ec4-4325-9072-6a59f681928f",
                    "26e44816-e40c-4a26-909b-f419a7fb626f",
                    "0d49687d-0d38-423f-a84e-5e8c456a6c2d"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 99.20945739746094,
        "Text": "IBAN",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.022993844002485275,
                "Height": 0.005320412106812,
                "Left": 0.333993136882782,
                "Top": 0.8976134657859802
            },
            "Polygon": [
                {
                    "X": 0.333993136882782,
                    "Y": 0.8976147174835205
                },
                {
                    "X": 0.35698550939559937,
                    "Y": 0.8976134657859802
                },
                {
                    "X": 0.35698699951171875,
                    "Y": 0.9029325842857361
                },
                {
                    "X": 0.3339945673942566,
                    "Y": 0.9029338359832764
                }
            ]
        },
        "Id": "df725699-be3c-40d4-b8fd-52498281135a",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "07c59a93-39c8-4ef8-95f3-fb0d1850b039"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.88870239257812,
        "Text": "16",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.021122736856341362,
                "Height": 0.010271705687046051,
                "Left": 0.9129649996757507,
                "Top": 0.9046462178230286
            },
            "Polygon": [
                {
                    "X": 0.9129649996757507,
                    "Y": 0.9046474099159241
                },
                {
                    "X": 0.9340829849243164,
                    "Y": 0.9046462178230286
                },
                {
                    "X": 0.9340877532958984,
                    "Y": 0.9149168133735657
                },
                {
                    "X": 0.9129696488380432,
                    "Y": 0.9149179458618164
                }
            ]
        },
        "Id": "335d4a68-6ae1-4fdd-a7b7-9df19ec5faca",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "442fe2a4-d2d2-4da7-a548-051b6d04506a"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 98.98844909667969,
        "Text": "Datum",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.029642224311828613,
                "Height": 0.005516664125025272,
                "Left": 0.33174657821655273,
                "Top": 0.9347564578056335
            },
            "Polygon": [
                {
                    "X": 0.33174657821655273,
                    "Y": 0.9347579479217529
                },
                {
                    "X": 0.3613872528076172,
                    "Y": 0.9347564578056335
                },
                {
                    "X": 0.36138880252838135,
                    "Y": 0.9402717351913452
                },
                {
                    "X": 0.33174803853034973,
                    "Y": 0.9402731657028198
                }
            ]
        },
        "Id": "6aad27fa-c879-41b0-adb7-82dcbd45c401",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "bbe009af-ee83-494c-97c2-5e21f749bd9e"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 93.97171783447266,
        "Text": "Unterschrift(en)",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07314342260360718,
                "Height": 0.007108882535248995,
                "Left": 0.5144945383071899,
                "Top": 0.933878481388092
            },
            "Polygon": [
                {
                    "X": 0.5144945383071899,
                    "Y": 0.9338820576667786
                },
                {
                    "X": 0.5876355171203613,
                    "Y": 0.933878481388092
                },
                {
                    "X": 0.5876379609107971,
                    "Y": 0.9409838318824768
                },
                {
                    "X": 0.5144968628883362,
                    "Y": 0.9409873485565186
                }
            ]
        },
        "Id": "8542ae1e-024b-4a86-8369-b7ff24dee87f",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "dd3d9cc6-9d46-436b-b37a-2bd004e6dc12"
                ]
            }
        ]
    },
    {
        "BlockType": "LINE",
        "Confidence": 97.2619857788086,
        "Text": "(Quittung bei Bareinzahlung)",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.14101508259773254,
                "Height": 0.007347895763814449,
                "Left": 0.03456611931324005,
                "Top": 0.9670664072036743
            },
            "Polygon": [
                {
                    "X": 0.03456611931324005,
                    "Y": 0.9670725464820862
                },
                {
                    "X": 0.17557959258556366,
                    "Y": 0.9670664072036743
                },
                {
                    "X": 0.1755812019109726,
                    "Y": 0.9744083285331726
                },
                {
                    "X": 0.03456740826368332,
                    "Y": 0.9744142889976501
                }
            ]
        },
        "Id": "68babb9e-2f88-48a7-97f5-81eb49959b1e",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "670f31fb-f003-4ea4-ac21-cddafc36c654",
                    "ac2ff84e-5087-4f68-91ec-07e3f426c65b",
                    "6886be35-4668-4be9-b3fd-05fda095634f"
                ]
            }
        ]
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.61481475830078,
        "Text": "Letzte",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07008234411478043,
                "Height": 0.013801749795675278,
                "Left": 0.07626963406801224,
                "Top": 0.03783142939209938
            },
            "Polygon": [
                {
                    "X": 0.07626963406801224,
                    "Y": 0.03784561529755592
                },
                {
                    "X": 0.14634907245635986,
                    "Y": 0.03783142939209938
                },
                {
                    "X": 0.14635197818279266,
                    "Y": 0.051619160920381546
                },
                {
                    "X": 0.07627223432064056,
                    "Y": 0.05163317918777466
                }
            ]
        },
        "Id": "6346c0df-5635-4b5e-8205-0f0c16121bde"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.60511779785156,
        "Text": "Mahnung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10655435174703598,
                "Height": 0.01705922558903694,
                "Left": 0.15449345111846924,
                "Top": 0.037639226764440536
            },
            "Polygon": [
                {
                    "X": 0.15449345111846924,
                    "Y": 0.03766079619526863
                },
                {
                    "X": 0.26104357838630676,
                    "Y": 0.037639226764440536
                },
                {
                    "X": 0.2610478103160858,
                    "Y": 0.054677195847034454
                },
                {
                    "X": 0.15449707210063934,
                    "Y": 0.05469845235347748
                }
            ]
        },
        "Id": "5d4fa54a-dacb-4886-95f3-386892cb3dc3"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.36026000976562,
        "Text": "Seite",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.036499228328466415,
                "Height": 0.0093143405392766,
                "Left": 0.33585405349731445,
                "Top": 0.041545700281858444
            },
            "Polygon": [
                {
                    "X": 0.33585405349731445,
                    "Y": 0.041553061455488205
                },
                {
                    "X": 0.37235066294670105,
                    "Y": 0.041545700281858444
                },
                {
                    "X": 0.37235328555107117,
                    "Y": 0.050852734595537186
                },
                {
                    "X": 0.335856556892395,
                    "Y": 0.05086003988981247
                }
            ]
        },
        "Id": "44369894-436a-4329-9ec4-8ecc1a8eef40"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.455810546875,
        "Text": "1/1",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.019113486632704735,
                "Height": 0.009374620392918587,
                "Left": 0.3781306743621826,
                "Top": 0.04135643690824509
            },
            "Polygon": [
                {
                    "X": 0.3781306743621826,
                    "Y": 0.041360292583703995
                },
                {
                    "X": 0.3972414433956146,
                    "Y": 0.04135643690824509
                },
                {
                    "X": 0.3972441852092743,
                    "Y": 0.0507272332906723
                },
                {
                    "X": 0.3781333267688751,
                    "Y": 0.05073105916380882
                }
            ]
        },
        "Id": "6f3ba9a9-ab54-48ee-ab07-2e74efaa3600"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.21580505371094,
        "Text": "Klarna.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.21216411888599396,
                "Height": 0.03474602848291397,
                "Left": 0.5225362777709961,
                "Top": 0.030483532696962357
            },
            "Polygon": [
                {
                    "X": 0.5225362777709961,
                    "Y": 0.03052673302590847
                },
                {
                    "X": 0.7346866726875305,
                    "Y": 0.030483532696962357
                },
                {
                    "X": 0.7347003817558289,
                    "Y": 0.06518761813640594
                },
                {
                    "X": 0.522547721862793,
                    "Y": 0.06522956490516663
                }
            ]
        },
        "Id": "56a3a41b-01c2-44e2-a710-3f5a92870b9a"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.92326354980469,
        "Text": "Referenznummer:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10366184264421463,
                "Height": 0.0073131388053298,
                "Left": 0.07594723254442215,
                "Top": 0.0658070519566536
            },
            "Polygon": [
                {
                    "X": 0.07594723254442215,
                    "Y": 0.06582753360271454
                },
                {
                    "X": 0.17960746586322784,
                    "Y": 0.0658070519566536
                },
                {
                    "X": 0.17960907518863678,
                    "Y": 0.07309983670711517
                },
                {
                    "X": 0.07594860345125198,
                    "Y": 0.07312019169330597
                }
            ]
        },
        "Id": "66eb9f1f-74e3-4c9a-bf73-4d73544676f6"
    },
    {
        "BlockType": "WORD",
        "Confidence": 45.933597564697266,
        "Text": "8 6685 5613 0439",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10549276322126389,
                "Height": 0.007102364208549261,
                "Left": 0.293311208486557,
                "Top": 0.06551889330148697
            },
            "Polygon": [
                {
                    "X": 0.293311208486557,
                    "Y": 0.06553974002599716
                },
                {
                    "X": 0.39880189299583435,
                    "Y": 0.06551889330148697
                },
                {
                    "X": 0.3988039493560791,
                    "Y": 0.07260053604841232
                },
                {
                    "X": 0.29331302642822266,
                    "Y": 0.07262125611305237
                }
            ]
        },
        "Id": "2dab7437-52bd-4eea-bbd9-dd9665d70fc3"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.54410552978516,
        "Text": "Datum:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04059480503201485,
                "Height": 0.0070434147492051125,
                "Left": 0.07620954513549805,
                "Top": 0.07677704840898514
            },
            "Polygon": [
                {
                    "X": 0.07620954513549805,
                    "Y": 0.07678499072790146
                },
                {
                    "X": 0.11680293083190918,
                    "Y": 0.07677704840898514
                },
                {
                    "X": 0.1168043464422226,
                    "Y": 0.08381256461143494
                },
                {
                    "X": 0.0762108713388443,
                    "Y": 0.08382046222686768
                }
            ]
        },
        "Id": "bea4ed08-d6ac-42ea-ba68-b8ab24534a7b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.10163879394531,
        "Text": "28.02.2023",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06486362963914871,
                "Height": 0.007158142514526844,
                "Left": 0.334421306848526,
                "Top": 0.07652942091226578
            },
            "Polygon": [
                {
                    "X": 0.334421306848526,
                    "Y": 0.07654211670160294
                },
                {
                    "X": 0.39928287267684937,
                    "Y": 0.07652942091226578
                },
                {
                    "X": 0.3992849290370941,
                    "Y": 0.08367494493722916
                },
                {
                    "X": 0.3344232439994812,
                    "Y": 0.08368756622076035
                }
            ]
        },
        "Id": "ec4de695-574b-4605-a098-710a9458e620"
    },
    {
        "BlockType": "WORD",
        "Confidence": 93.57010650634766,
        "Text": "Bestellnummer:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09018152952194214,
                "Height": 0.007578643038868904,
                "Left": 0.07605332881212234,
                "Top": 0.08792930841445923
            },
            "Polygon": [
                {
                    "X": 0.07605332881212234,
                    "Y": 0.08794678747653961
                },
                {
                    "X": 0.16623322665691376,
                    "Y": 0.08792930841445923
                },
                {
                    "X": 0.16623486578464508,
                    "Y": 0.09549058973789215
                },
                {
                    "X": 0.07605475187301636,
                    "Y": 0.09550795704126358
                }
            ]
        },
        "Id": "0a2d8f08-4a1f-4791-9dab-9e9a3702c828"
    },
    {
        "BlockType": "WORD",
        "Confidence": 69.87776184082031,
        "Text": "ZOF435O5AI2AZ",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10096799582242966,
                "Height": 0.007621494121849537,
                "Left": 0.2983926236629486,
                "Top": 0.08745747059583664
            },
            "Polygon": [
                {
                    "X": 0.2983926236629486,
                    "Y": 0.08747704327106476
                },
                {
                    "X": 0.3993583917617798,
                    "Y": 0.08745747059583664
                },
                {
                    "X": 0.3993605971336365,
                    "Y": 0.09505951404571533
                },
                {
                    "X": 0.2983945906162262,
                    "Y": 0.0950789600610733
                }
            ]
        },
        "Id": "c02f6566-57aa-4f06-9723-c1492bf37c6b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 91.71910095214844,
        "Text": "Bestelldatum:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0780925452709198,
                "Height": 0.007536998484283686,
                "Left": 0.07613439112901688,
                "Top": 0.09894565492868423
            },
            "Polygon": [
                {
                    "X": 0.07613439112901688,
                    "Y": 0.09896064549684525
                },
                {
                    "X": 0.15422533452510834,
                    "Y": 0.09894565492868423
                },
                {
                    "X": 0.15422692894935608,
                    "Y": 0.10646776854991913
                },
                {
                    "X": 0.07613580673933029,
                    "Y": 0.10648265480995178
                }
            ]
        },
        "Id": "c9d442b3-33a3-4643-bd33-35d60d7ceb7a"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.23060607910156,
        "Text": "10.01.2023",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0635380819439888,
                "Height": 0.007508055306971073,
                "Left": 0.33576440811157227,
                "Top": 0.09863600134849548
            },
            "Polygon": [
                {
                    "X": 0.33576440811157227,
                    "Y": 0.09864819794893265
                },
                {
                    "X": 0.39930030703544617,
                    "Y": 0.09863600134849548
                },
                {
                    "X": 0.39930248260498047,
                    "Y": 0.10613193362951279
                },
                {
                    "X": 0.33576643466949463,
                    "Y": 0.10614405572414398
                }
            ]
        },
        "Id": "350e3c6a-2c4e-4365-ac8f-c7799fdd7575"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.49485778808594,
        "Text": "Wir",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.029637467116117477,
                "Height": 0.010719668120145798,
                "Left": 0.516568124294281,
                "Top": 0.1065124124288559
            },
            "Polygon": [
                {
                    "X": 0.516568124294281,
                    "Y": 0.10651805996894836
                },
                {
                    "X": 0.5462019443511963,
                    "Y": 0.1065124124288559
                },
                {
                    "X": 0.5462055802345276,
                    "Y": 0.1172264888882637
                },
                {
                    "X": 0.516571581363678,
                    "Y": 0.11723208427429199
                }
            ]
        },
        "Id": "daccb713-e8f2-4e4e-a18c-13d2960c4c2d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.6087646484375,
        "Text": "möchten",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07745277136564255,
                "Height": 0.01116684079170227,
                "Left": 0.5518631935119629,
                "Top": 0.10618815571069717
            },
            "Polygon": [
                {
                    "X": 0.5518631935119629,
                    "Y": 0.10620292276144028
                },
                {
                    "X": 0.6293119192123413,
                    "Y": 0.10618815571069717
                },
                {
                    "X": 0.629315972328186,
                    "Y": 0.11734037101268768
                },
                {
                    "X": 0.5518669486045837,
                    "Y": 0.11735499650239944
                }
            ]
        },
        "Id": "6cf058c0-ba59-4f00-b7a4-0e23e9f57c0a"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.69757843017578,
        "Text": "dich",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.037904877215623856,
                "Height": 0.011152615770697594,
                "Left": 0.635012686252594,
                "Top": 0.10581556707620621
            },
            "Polygon": [
                {
                    "X": 0.635012686252594,
                    "Y": 0.10582280158996582
                },
                {
                    "X": 0.6729133725166321,
                    "Y": 0.10581556707620621
                },
                {
                    "X": 0.6729175448417664,
                    "Y": 0.1169610321521759
                },
                {
                    "X": 0.6350167393684387,
                    "Y": 0.11696818470954895
                }
            ]
        },
        "Id": "f06600ab-5bee-4e38-bba0-70aa83140aaa"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.83741760253906,
        "Text": "an",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.021187270060181618,
                "Height": 0.008624515496194363,
                "Left": 0.6788558959960938,
                "Top": 0.10805544257164001
            },
            "Polygon": [
                {
                    "X": 0.6788558959960938,
                    "Y": 0.10805947333574295
                },
                {
                    "X": 0.7000398635864258,
                    "Y": 0.10805544257164001
                },
                {
                    "X": 0.7000432014465332,
                    "Y": 0.1166759580373764
                },
                {
                    "X": 0.6788591742515564,
                    "Y": 0.11667995899915695
                }
            ]
        },
        "Id": "74310332-ffed-48b7-bad9-337835644cd3"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.6047134399414,
        "Text": "die",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.026656409725546837,
                "Height": 0.010706399567425251,
                "Left": 0.7056419849395752,
                "Top": 0.10559499263763428
            },
            "Polygon": [
                {
                    "X": 0.7056419849395752,
                    "Y": 0.10560008138418198
                },
                {
                    "X": 0.7322941422462463,
                    "Y": 0.10559499263763428
                },
                {
                    "X": 0.7322983741760254,
                    "Y": 0.11629635840654373
                },
                {
                    "X": 0.7056460976600647,
                    "Y": 0.11630139499902725
                }
            ]
        },
        "Id": "3d000ac8-d114-460c-b859-d3865b7ab665"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.46819305419922,
        "Text": "Zahlung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0721203163266182,
                "Height": 0.012807689607143402,
                "Left": 0.7376176118850708,
                "Top": 0.10553663223981857
            },
            "Polygon": [
                {
                    "X": 0.7376176118850708,
                    "Y": 0.10555039346218109
                },
                {
                    "X": 0.8097325563430786,
                    "Y": 0.10553663223981857
                },
                {
                    "X": 0.8097379207611084,
                    "Y": 0.11833072453737259
                },
                {
                    "X": 0.7376226782798767,
                    "Y": 0.11834432184696198
                }
            ]
        },
        "Id": "095a2387-e7a4-47be-b64d-3105201d94f2"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.69309997558594,
        "Text": "für",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.025534555315971375,
                "Height": 0.011011835187673569,
                "Left": 0.8156852722167969,
                "Top": 0.10502201318740845
            },
            "Polygon": [
                {
                    "X": 0.8156852722167969,
                    "Y": 0.10502688586711884
                },
                {
                    "X": 0.8412151336669922,
                    "Y": 0.10502201318740845
                },
                {
                    "X": 0.8412198424339294,
                    "Y": 0.11602902412414551
                },
                {
                    "X": 0.8156899213790894,
                    "Y": 0.11603385210037231
                }
            ]
        },
        "Id": "0343ea4c-273b-4a25-8a40-3699b1333229"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.65837860107422,
        "Text": "deinen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0604298897087574,
                "Height": 0.011060958728194237,
                "Left": 0.8461394309997559,
                "Top": 0.1048555076122284
            },
            "Polygon": [
                {
                    "X": 0.8461394309997559,
                    "Y": 0.10486704111099243
                },
                {
                    "X": 0.9065643548965454,
                    "Y": 0.1048555076122284
                },
                {
                    "X": 0.9065693020820618,
                    "Y": 0.1159050390124321
                },
                {
                    "X": 0.8461441993713379,
                    "Y": 0.11591646075248718
                }
            ]
        },
        "Id": "0d0818dc-1a35-4b6c-937e-f985a493eac0"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.54741668701172,
        "Text": "Einkauf",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06648357957601547,
                "Height": 0.010284931398928165,
                "Left": 0.5171661376953125,
                "Top": 0.12112987786531448
            },
            "Polygon": [
                {
                    "X": 0.5171661376953125,
                    "Y": 0.12114238739013672
                },
                {
                    "X": 0.5836461186408997,
                    "Y": 0.12112987786531448
                },
                {
                    "X": 0.5836496949195862,
                    "Y": 0.1314024180173874
                },
                {
                    "X": 0.5171694755554199,
                    "Y": 0.13141481578350067
                }
            ]
        },
        "Id": "fcf676d0-9fc4-4524-b25e-e39ce0ad5ae1"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.26944732666016,
        "Text": "bei",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.025823960080742836,
                "Height": 0.010699495673179626,
                "Left": 0.589492917060852,
                "Top": 0.12073074281215668
            },
            "Polygon": [
                {
                    "X": 0.589492917060852,
                    "Y": 0.12073560059070587
                },
                {
                    "X": 0.6153130531311035,
                    "Y": 0.12073074281215668
                },
                {
                    "X": 0.6153168678283691,
                    "Y": 0.1314254254102707
                },
                {
                    "X": 0.5894966721534729,
                    "Y": 0.1314302384853363
                }
            ]
        },
        "Id": "689fea51-99fd-4a1e-897e-40d4c5224d70"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.58435821533203,
        "Text": "Neutron",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07090010493993759,
                "Height": 0.010634160600602627,
                "Left": 0.6219688653945923,
                "Top": 0.12059205025434494
            },
            "Polygon": [
                {
                    "X": 0.6219688653945923,
                    "Y": 0.12060539424419403
                },
                {
                    "X": 0.6928648948669434,
                    "Y": 0.12059205025434494
                },
                {
                    "X": 0.6928689479827881,
                    "Y": 0.1312129944562912
                },
                {
                    "X": 0.6219726800918579,
                    "Y": 0.13122621178627014
                }
            ]
        },
        "Id": "a8404b38-a939-4255-9828-60ff7516b570"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.75357818603516,
        "Text": "Holdings,",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08427958935499191,
                "Height": 0.013501212932169437,
                "Left": 0.6985807418823242,
                "Top": 0.12004584819078445
            },
            "Polygon": [
                {
                    "X": 0.6985807418823242,
                    "Y": 0.1200617179274559
                },
                {
                    "X": 0.7828547954559326,
                    "Y": 0.12004584819078445
                },
                {
                    "X": 0.7828603386878967,
                    "Y": 0.133531391620636
                },
                {
                    "X": 0.6985859274864197,
                    "Y": 0.13354706764221191
                }
            ]
        },
        "Id": "3e8bd597-3dbf-441a-9a68-a851f6b15a2d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.49507141113281,
        "Text": "Inc.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.030827028676867485,
                "Height": 0.010663259774446487,
                "Left": 0.7890727519989014,
                "Top": 0.11979565769433975
            },
            "Polygon": [
                {
                    "X": 0.7890727519989014,
                    "Y": 0.11980146914720535
                },
                {
                    "X": 0.8198952674865723,
                    "Y": 0.11979565769433975
                },
                {
                    "X": 0.8198997378349304,
                    "Y": 0.1304531693458557
                },
                {
                    "X": 0.78907710313797,
                    "Y": 0.13045892119407654
                }
            ]
        },
        "Id": "0c990d53-f657-4b4e-af7a-12dbe9709e6b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.67247009277344,
        "Text": "erinnern.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0799814909696579,
                "Height": 0.010495352558791637,
                "Left": 0.8255947828292847,
                "Top": 0.11969984322786331
            },
            "Polygon": [
                {
                    "X": 0.8255947828292847,
                    "Y": 0.11971490830183029
                },
                {
                    "X": 0.9055715799331665,
                    "Y": 0.11969984322786331
                },
                {
                    "X": 0.9055762887001038,
                    "Y": 0.1301802694797516
                },
                {
                    "X": 0.8255992531776428,
                    "Y": 0.13019520044326782
                }
            ]
        },
        "Id": "1af73972-b5bf-4631-873d-ae92985d2bfd"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.13011932373047,
        "Text": "Wir",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01869230531156063,
                "Height": 0.007495427504181862,
                "Left": 0.5160793662071228,
                "Top": 0.1381145715713501
            },
            "Polygon": [
                {
                    "X": 0.5160793662071228,
                    "Y": 0.13811802864074707
                },
                {
                    "X": 0.5347691774368286,
                    "Y": 0.1381145715713501
                },
                {
                    "X": 0.5347716808319092,
                    "Y": 0.14560656249523163
                },
                {
                    "X": 0.5160818099975586,
                    "Y": 0.1456100046634674
                }
            ]
        },
        "Id": "396ba950-d76c-4908-9c5a-4d4b8b19c133"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.54764556884766,
        "Text": "haben",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03474140912294388,
                "Height": 0.0075266617350280285,
                "Left": 0.5406021475791931,
                "Top": 0.1381317377090454
            },
            "Polygon": [
                {
                    "X": 0.5406021475791931,
                    "Y": 0.13813817501068115
                },
                {
                    "X": 0.575340986251831,
                    "Y": 0.1381317377090454
                },
                {
                    "X": 0.5753435492515564,
                    "Y": 0.14565201103687286
                },
                {
                    "X": 0.5406046509742737,
                    "Y": 0.14565840363502502
                }
            ]
        },
        "Id": "092810e0-9ce4-4822-8a9b-528e928337bb"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.7386474609375,
        "Text": "nach",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.026785433292388916,
                "Height": 0.007554828654974699,
                "Left": 0.581831693649292,
                "Top": 0.13808296620845795
            },
            "Polygon": [
                {
                    "X": 0.581831693649292,
                    "Y": 0.1380879282951355
                },
                {
                    "X": 0.608614444732666,
                    "Y": 0.13808296620845795
                },
                {
                    "X": 0.6086171269416809,
                    "Y": 0.14563286304473877
                },
                {
                    "X": 0.5818343162536621,
                    "Y": 0.14563779532909393
                }
            ]
        },
        "Id": "abdc4def-bd47-4886-bd5d-e938040a006d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.40231323242188,
        "Text": "Ablauf",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03600212186574936,
                "Height": 0.007601326331496239,
                "Left": 0.6146853566169739,
                "Top": 0.13783276081085205
            },
            "Polygon": [
                {
                    "X": 0.6146853566169739,
                    "Y": 0.1378394365310669
                },
                {
                    "X": 0.6506847143173218,
                    "Y": 0.13783276081085205
                },
                {
                    "X": 0.6506875157356262,
                    "Y": 0.14542746543884277
                },
                {
                    "X": 0.6146880984306335,
                    "Y": 0.14543408155441284
                }
            ]
        },
        "Id": "f5457b92-9a70-43d8-9f8d-9a58ab9942e1"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.61131286621094,
        "Text": "der",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.018395857885479927,
                "Height": 0.007542349398136139,
                "Left": 0.6562256217002869,
                "Top": 0.13774222135543823
            },
            "Polygon": [
                {
                    "X": 0.6562256217002869,
                    "Y": 0.13774561882019043
                },
                {
                    "X": 0.6746186017990112,
                    "Y": 0.13774222135543823
                },
                {
                    "X": 0.6746214628219604,
                    "Y": 0.14528118073940277
                },
                {
                    "X": 0.6562284231185913,
                    "Y": 0.14528456330299377
                }
            ]
        },
        "Id": "e0bfe60d-a18d-449e-984b-5040554e8959"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.53229522705078,
        "Text": "in",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008997618220746517,
                "Height": 0.007339605130255222,
                "Left": 0.6804510951042175,
                "Top": 0.13759852945804596
            },
            "Polygon": [
                {
                    "X": 0.6804510951042175,
                    "Y": 0.13760019838809967
                },
                {
                    "X": 0.6894459128379822,
                    "Y": 0.13759852945804596
                },
                {
                    "X": 0.6894487142562866,
                    "Y": 0.1449364721775055
                },
                {
                    "X": 0.6804538369178772,
                    "Y": 0.144938126206398
                }
            ]
        },
        "Id": "2fcf0c44-7f95-4df3-a909-e5135d22ffaa"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.10295867919922,
        "Text": "unserer",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04303861781954765,
                "Height": 0.006213485263288021,
                "Left": 0.6957358121871948,
                "Top": 0.13887891173362732
            },
            "Polygon": [
                {
                    "X": 0.6957358121871948,
                    "Y": 0.13888688385486603
                },
                {
                    "X": 0.7387719750404358,
                    "Y": 0.13887891173362732
                },
                {
                    "X": 0.7387744188308716,
                    "Y": 0.14508448541164398
                },
                {
                    "X": 0.6957381963729858,
                    "Y": 0.14509239792823792
                }
            ]
        },
        "Id": "3893c605-72e4-491f-976e-7da7c97892c2"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.22535705566406,
        "Text": "Mahnung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.05239199474453926,
                "Height": 0.009391034953296185,
                "Left": 0.7446260452270508,
                "Top": 0.13689689338207245
            },
            "Polygon": [
                {
                    "X": 0.7446260452270508,
                    "Y": 0.13690660893917084
                },
                {
                    "X": 0.7970141768455505,
                    "Y": 0.13689689338207245
                },
                {
                    "X": 0.7970180511474609,
                    "Y": 0.14627830684185028
                },
                {
                    "X": 0.7446298003196716,
                    "Y": 0.1462879329919815
                }
            ]
        },
        "Id": "e03aaef6-4e3f-432d-a716-688b6d2b2c00"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.97821807861328,
        "Text": "gesetzten",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.05500189587473869,
                "Height": 0.008920589461922646,
                "Left": 0.8026454448699951,
                "Top": 0.13716797530651093
            },
            "Polygon": [
                {
                    "X": 0.8026454448699951,
                    "Y": 0.13717816770076752
                },
                {
                    "X": 0.8576434850692749,
                    "Y": 0.13716797530651093
                },
                {
                    "X": 0.8576473593711853,
                    "Y": 0.1460784524679184
                },
                {
                    "X": 0.802649199962616,
                    "Y": 0.14608857035636902
                }
            ]
        },
        "Id": "9dd94660-78a6-40fd-926e-7587fb4e69bf"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.62962341308594,
        "Text": "Frist",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024055572226643562,
                "Height": 0.007520435843616724,
                "Left": 0.8645251393318176,
                "Top": 0.13647961616516113
            },
            "Polygon": [
                {
                    "X": 0.8645251393318176,
                    "Y": 0.1364840716123581
                },
                {
                    "X": 0.8885773420333862,
                    "Y": 0.13647961616516113
                },
                {
                    "X": 0.8885806798934937,
                    "Y": 0.14399561285972595
                },
                {
                    "X": 0.8645284175872803,
                    "Y": 0.14400005340576172
                }
            ]
        },
        "Id": "34992cf1-d22d-4e78-8f73-eaa68904d67b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.53336334228516,
        "Text": "keine",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.029996564611792564,
                "Height": 0.007341166026890278,
                "Left": 0.8938477039337158,
                "Top": 0.13648885488510132
            },
            "Polygon": [
                {
                    "X": 0.8938477039337158,
                    "Y": 0.13649442791938782
                },
                {
                    "X": 0.9238409399986267,
                    "Y": 0.13648885488510132
                },
                {
                    "X": 0.9238442778587341,
                    "Y": 0.143824502825737
                },
                {
                    "X": 0.8938509821891785,
                    "Y": 0.14383003115653992
                }
            ]
        },
        "Id": "d71c8a18-d6df-4424-9e20-77e3b4e18369"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.14605712890625,
        "Text": "Zahlung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.045266859233379364,
                "Height": 0.009299102239310741,
                "Left": 0.5159291625022888,
                "Top": 0.14746439456939697
            },
            "Polygon": [
                {
                    "X": 0.5159291625022888,
                    "Y": 0.14747269451618195
                },
                {
                    "X": 0.5611928701400757,
                    "Y": 0.14746439456939697
                },
                {
                    "X": 0.5611960291862488,
                    "Y": 0.1567552536725998
                },
                {
                    "X": 0.5159322023391724,
                    "Y": 0.15676349401474
                }
            ]
        },
        "Id": "0b8e4e1e-5e27-48f5-9dc8-8405a70c8410"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.13746643066406,
        "Text": "von",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01977006532251835,
                "Height": 0.00581052340567112,
                "Left": 0.5671833753585815,
                "Top": 0.1493089199066162
            },
            "Polygon": [
                {
                    "X": 0.5671833753585815,
                    "Y": 0.14931254088878632
                },
                {
                    "X": 0.5869514346122742,
                    "Y": 0.1493089199066162
                },
                {
                    "X": 0.5869534611701965,
                    "Y": 0.15511584281921387
                },
                {
                    "X": 0.5671853423118591,
                    "Y": 0.15511944890022278
                }
            ]
        },
        "Id": "c830bfa5-f6e7-456b-9947-131e929297ea"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.73281860351562,
        "Text": "dir",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.013558817096054554,
                "Height": 0.0075575215741992,
                "Left": 0.5928858518600464,
                "Top": 0.14755886793136597
            },
            "Polygon": [
                {
                    "X": 0.5928858518600464,
                    "Y": 0.14756135642528534
                },
                {
                    "X": 0.6064419746398926,
                    "Y": 0.14755886793136597
                },
                {
                    "X": 0.6064446568489075,
                    "Y": 0.15511392056941986
                },
                {
                    "X": 0.5928884744644165,
                    "Y": 0.15511639416217804
                }
            ]
        },
        "Id": "3457f087-51ee-4a4b-8c59-f9c34545247d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 84.98897552490234,
        "Text": "erhalten.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04832865670323372,
                "Height": 0.007469551637768745,
                "Left": 0.6119927763938904,
                "Top": 0.14745746552944183
            },
            "Polygon": [
                {
                    "X": 0.6119927763938904,
                    "Y": 0.14746634662151337
                },
                {
                    "X": 0.6603186726570129,
                    "Y": 0.14745746552944183
                },
                {
                    "X": 0.6603214740753174,
                    "Y": 0.15491820871829987
                },
                {
                    "X": 0.6119954586029053,
                    "Y": 0.15492701530456543
                }
            ]
        },
        "Id": "e14dc8bf-2aad-4205-a6b6-6a622029e266"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.33665466308594,
        "Text": "Stelle",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.030589982867240906,
                "Height": 0.0075170802883803844,
                "Left": 0.6670339107513428,
                "Top": 0.14696714282035828
            },
            "Polygon": [
                {
                    "X": 0.6670339107513428,
                    "Y": 0.14697276055812836
                },
                {
                    "X": 0.6976210474967957,
                    "Y": 0.14696714282035828
                },
                {
                    "X": 0.6976239085197449,
                    "Y": 0.15447863936424255
                },
                {
                    "X": 0.6670367121696472,
                    "Y": 0.15448422729969025
                }
            ]
        },
        "Id": "ca916807-5bdd-4ca4-9768-3deedb015017"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.46788024902344,
        "Text": "daher",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03245288133621216,
                "Height": 0.007265051361173391,
                "Left": 0.7031852602958679,
                "Top": 0.14683687686920166
            },
            "Polygon": [
                {
                    "X": 0.7031852602958679,
                    "Y": 0.1468428373336792
                },
                {
                    "X": 0.7356352210044861,
                    "Y": 0.14683687686920166
                },
                {
                    "X": 0.7356381416320801,
                    "Y": 0.15409600734710693
                },
                {
                    "X": 0.7031880617141724,
                    "Y": 0.1541019231081009
                }
            ]
        },
        "Id": "4a1503a8-c415-4c16-a75e-9775fdc17a91"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.53398132324219,
        "Text": "bitte",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02323896996676922,
                "Height": 0.007320924662053585,
                "Left": 0.741367518901825,
                "Top": 0.14665816724300385
            },
            "Polygon": [
                {
                    "X": 0.741367518901825,
                    "Y": 0.14666244387626648
                },
                {
                    "X": 0.7646035552024841,
                    "Y": 0.14665816724300385
                },
                {
                    "X": 0.7646064758300781,
                    "Y": 0.15397484600543976
                },
                {
                    "X": 0.741370439529419,
                    "Y": 0.15397909283638
                }
            ]
        },
        "Id": "c52db5ad-91d8-42d5-8a08-4e8f854d9d4b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 48.201744079589844,
        "Text": "sicher.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03606982156634331,
                "Height": 0.007969027385115623,
                "Left": 0.7701950073242188,
                "Top": 0.14668506383895874
            },
            "Polygon": [
                {
                    "X": 0.7701950073242188,
                    "Y": 0.14669169485569
                },
                {
                    "X": 0.8062614798545837,
                    "Y": 0.14668506383895874
                },
                {
                    "X": 0.8062648177146912,
                    "Y": 0.15464751422405243
                },
                {
                    "X": 0.7701982259750366,
                    "Y": 0.15465408563613892
                }
            ]
        },
        "Id": "d5ddd324-cdf0-4a91-994a-99938bcb507c"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.75663757324219,
        "Text": "die",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01656610146164894,
                "Height": 0.007467746268957853,
                "Left": 0.8126269578933716,
                "Top": 0.1462966501712799
            },
            "Polygon": [
                {
                    "X": 0.8126269578933716,
                    "Y": 0.14629969000816345
                },
                {
                    "X": 0.8291898965835571,
                    "Y": 0.1462966501712799
                },
                {
                    "X": 0.8291930556297302,
                    "Y": 0.1537613719701767
                },
                {
                    "X": 0.8126301169395447,
                    "Y": 0.15376439690589905
                }
            ]
        },
        "Id": "1c8f8a70-a247-49f4-89a8-f13c0496b340"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.54296112060547,
        "Text": "offene",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.034505490213632584,
                "Height": 0.007273610215634108,
                "Left": 0.8350790143013,
                "Top": 0.14629869163036346
            },
            "Polygon": [
                {
                    "X": 0.8350790143013,
                    "Y": 0.14630503952503204
                },
                {
                    "X": 0.8695813417434692,
                    "Y": 0.14629869163036346
                },
                {
                    "X": 0.8695845007896423,
                    "Y": 0.15356600284576416
                },
                {
                    "X": 0.8350821137428284,
                    "Y": 0.15357230603694916
                }
            ]
        },
        "Id": "f0dd373c-4970-4c54-ad4c-2b74d6e0ecf1"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.67218780517578,
        "Text": "Gesamt-",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04817899689078331,
                "Height": 0.0077629792504012585,
                "Left": 0.8756071925163269,
                "Top": 0.14592263102531433
            },
            "Polygon": [
                {
                    "X": 0.8756071925163269,
                    "Y": 0.14593149721622467
                },
                {
                    "X": 0.9237826466560364,
                    "Y": 0.14592263102531433
                },
                {
                    "X": 0.9237861633300781,
                    "Y": 0.1536768078804016
                },
                {
                    "X": 0.8756105899810791,
                    "Y": 0.15368561446666718
                }
            ]
        },
        "Id": "15a379ee-c750-468e-b82a-b71f99284bf4"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.80420684814453,
        "Text": "Klarna",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03276212513446808,
                "Height": 0.006028730887919664,
                "Left": 0.09770476818084717,
                "Top": 0.15631306171417236
            },
            "Polygon": [
                {
                    "X": 0.09770476818084717,
                    "Y": 0.1563190370798111
                },
                {
                    "X": 0.13046565651893616,
                    "Y": 0.15631306171417236
                },
                {
                    "X": 0.13046689331531525,
                    "Y": 0.1623358577489853
                },
                {
                    "X": 0.09770594537258148,
                    "Y": 0.16234180331230164
                }
            ]
        },
        "Id": "c8436da2-77cc-44c0-b70f-32733d2ac0d5"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.7759017944336,
        "Text": "Bank",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0259113572537899,
                "Height": 0.00606849230825901,
                "Left": 0.13489875197410583,
                "Top": 0.15629439055919647
            },
            "Polygon": [
                {
                    "X": 0.13489875197410583,
                    "Y": 0.15629911422729492
                },
                {
                    "X": 0.16080880165100098,
                    "Y": 0.15629439055919647
                },
                {
                    "X": 0.16081009805202484,
                    "Y": 0.16235819458961487
                },
                {
                    "X": 0.13490000367164612,
                    "Y": 0.16236288845539093
                }
            ]
        },
        "Id": "877f9b45-6ebf-4a35-a51d-b17a20207d48"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.42279815673828,
        "Text": "AB",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.013421705923974514,
                "Height": 0.005695665720850229,
                "Left": 0.16516275703907013,
                "Top": 0.15636922419071198
            },
            "Polygon": [
                {
                    "X": 0.16516275703907013,
                    "Y": 0.15637166798114777
                },
                {
                    "X": 0.17858320474624634,
                    "Y": 0.15636922419071198
                },
                {
                    "X": 0.17858445644378662,
                    "Y": 0.16206245124340057
                },
                {
                    "X": 0.16516397893428802,
                    "Y": 0.16206488013267517
                }
            ]
        },
        "Id": "3e3e1d28-4b0a-4e27-af36-03165160afb5"
    },
    {
        "BlockType": "WORD",
        "Confidence": 89.721923828125,
        "Text": "(publ),",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.032085951417684555,
                "Height": 0.0069707538932561874,
                "Left": 0.18358303606510162,
                "Top": 0.1562274545431137
            },
            "Polygon": [
                {
                    "X": 0.18358303606510162,
                    "Y": 0.1562333106994629
                },
                {
                    "X": 0.21566736698150635,
                    "Y": 0.1562274545431137
                },
                {
                    "X": 0.21566897630691528,
                    "Y": 0.16319240629673004
                },
                {
                    "X": 0.18358458578586578,
                    "Y": 0.16319821774959564
                }
            ]
        },
        "Id": "850aea46-4530-465e-a62e-08a01ff09654"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.97595977783203,
        "Text": "Postfach",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04392741248011589,
                "Height": 0.006079032551497221,
                "Left": 0.22149059176445007,
                "Top": 0.1560744196176529
            },
            "Polygon": [
                {
                    "X": 0.22149059176445007,
                    "Y": 0.156082421541214
                },
                {
                    "X": 0.2654165029525757,
                    "Y": 0.1560744196176529
                },
                {
                    "X": 0.26541799306869507,
                    "Y": 0.1621454954147339
                },
                {
                    "X": 0.2214920073747635,
                    "Y": 0.1621534526348114
                }
            ]
        },
        "Id": "926fa31d-e287-4386-b21e-36fd3aa4b6cd"
    },
    {
        "BlockType": "WORD",
        "Confidence": 88.71670532226562,
        "Text": "90",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.011320768855512142,
                "Height": 0.005794160068035126,
                "Left": 0.2705742418766022,
                "Top": 0.15623584389686584
            },
            "Polygon": [
                {
                    "X": 0.2705742418766022,
                    "Y": 0.1562379002571106
                },
                {
                    "X": 0.2818935513496399,
                    "Y": 0.15623584389686584
                },
                {
                    "X": 0.2818950116634369,
                    "Y": 0.16202795505523682
                },
                {
                    "X": 0.27057570219039917,
                    "Y": 0.16203001141548157
                }
            ]
        },
        "Id": "9d623676-9222-4404-b4d1-546ddf354121"
    },
    {
        "BlockType": "WORD",
        "Confidence": 86.4712142944336,
        "Text": "01",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.010714483447372913,
                "Height": 0.005679035093635321,
                "Left": 0.2866322696208954,
                "Top": 0.15622569620609283
            },
            "Polygon": [
                {
                    "X": 0.2866322696208954,
                    "Y": 0.15622764825820923
                },
                {
                    "X": 0.29734528064727783,
                    "Y": 0.15622569620609283
                },
                {
                    "X": 0.29734674096107483,
                    "Y": 0.1619027853012085
                },
                {
                    "X": 0.28663370013237,
                    "Y": 0.1619047224521637
                }
            ]
        },
        "Id": "a8ff6200-813c-4eaf-827f-14f146fe49d6"
    },
    {
        "BlockType": "WORD",
        "Confidence": 84.35100555419922,
        "Text": "62,",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.015538794919848442,
                "Height": 0.006456915754824877,
                "Left": 0.3033130168914795,
                "Top": 0.15618878602981567
            },
            "Polygon": [
                {
                    "X": 0.3033130168914795,
                    "Y": 0.1561916172504425
                },
                {
                    "X": 0.3188501000404358,
                    "Y": 0.15618878602981567
                },
                {
                    "X": 0.3188518285751343,
                    "Y": 0.16264288127422333
                },
                {
                    "X": 0.3033147156238556,
                    "Y": 0.16264569759368896
                }
            ]
        },
        "Id": "b24080ed-9a8b-4639-a2e1-20f102ffe95b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.58871459960938,
        "Text": "90492",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03083975613117218,
                "Height": 0.005810420028865337,
                "Left": 0.3236066699028015,
                "Top": 0.15615898370742798
            },
            "Polygon": [
                {
                    "X": 0.3236066699028015,
                    "Y": 0.15616460144519806
                },
                {
                    "X": 0.35444483160972595,
                    "Y": 0.15615898370742798
                },
                {
                    "X": 0.3544464409351349,
                    "Y": 0.1619638055562973
                },
                {
                    "X": 0.3236082196235657,
                    "Y": 0.161969393491745
                }
            ]
        },
        "Id": "d3037759-55d3-4ebe-9990-1c42e05736a6"
    },
    {
        "BlockType": "WORD",
        "Confidence": 92.50588989257812,
        "Text": "Nürnberg",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04675762355327606,
                "Height": 0.00724340695887804,
                "Left": 0.3592425286769867,
                "Top": 0.1557406336069107
            },
            "Polygon": [
                {
                    "X": 0.3592425286769867,
                    "Y": 0.1557491421699524
                },
                {
                    "X": 0.4059980511665344,
                    "Y": 0.1557406336069107
                },
                {
                    "X": 0.40600016713142395,
                    "Y": 0.16297556459903717
                },
                {
                    "X": 0.35924455523490906,
                    "Y": 0.16298402845859528
                }
            ]
        },
        "Id": "d6d6f375-f143-4447-b6c4-f43f4cd2ded9"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.37947845458984,
        "Text": "summe",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04066155478358269,
                "Height": 0.006136044394224882,
                "Left": 0.5165126323699951,
                "Top": 0.15852877497673035
            },
            "Polygon": [
                {
                    "X": 0.5165126323699951,
                    "Y": 0.1585361659526825
                },
                {
                    "X": 0.5571720600128174,
                    "Y": 0.15852877497673035
                },
                {
                    "X": 0.5571741461753845,
                    "Y": 0.16465747356414795
                },
                {
                    "X": 0.5165145993232727,
                    "Y": 0.16466481983661652
                }
            ]
        },
        "Id": "92752988-20c0-4a58-ad68-8dc9c5e3f745"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.54731750488281,
        "Text": "bis",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01562897115945816,
                "Height": 0.007227112073451281,
                "Left": 0.5629760026931763,
                "Top": 0.15707342326641083
            },
            "Polygon": [
                {
                    "X": 0.5629760026931763,
                    "Y": 0.15707626938819885
                },
                {
                    "X": 0.5786024332046509,
                    "Y": 0.15707342326641083
                },
                {
                    "X": 0.5786049365997314,
                    "Y": 0.16429771482944489
                },
                {
                    "X": 0.5629784464836121,
                    "Y": 0.16430053114891052
                }
            ]
        },
        "Id": "41ac2acc-d99c-4e4e-9e67-c436e846be29"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.14403533935547,
        "Text": "spätestens",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06159999594092369,
                "Height": 0.008648126386106014,
                "Left": 0.5831847190856934,
                "Top": 0.15712998807430267
            },
            "Polygon": [
                {
                    "X": 0.5831847190856934,
                    "Y": 0.15714119374752045
                },
                {
                    "X": 0.6447815299034119,
                    "Y": 0.15712998807430267
                },
                {
                    "X": 0.6447847485542297,
                    "Y": 0.16576699912548065
                },
                {
                    "X": 0.5831877589225769,
                    "Y": 0.16577811539173126
                }
            ]
        },
        "Id": "ec696cce-cc8e-4921-a643-7ee6b6167bfc"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.86064147949219,
        "Text": "08.03.2023",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0637349858880043,
                "Height": 0.007439910434186459,
                "Left": 0.6495162844657898,
                "Top": 0.15664054453372955
            },
            "Polygon": [
                {
                    "X": 0.6495162844657898,
                    "Y": 0.15665213763713837
                },
                {
                    "X": 0.7132483720779419,
                    "Y": 0.15664054453372955
                },
                {
                    "X": 0.7132512331008911,
                    "Y": 0.16406892240047455
                },
                {
                    "X": 0.6495190262794495,
                    "Y": 0.1640804558992386
                }
            ]
        },
        "Id": "19ae3aa2-d628-46b2-98d5-3b14b74aab91"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.1634750366211,
        "Text": "zu",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.012931895442306995,
                "Height": 0.005780875217169523,
                "Left": 0.7183526754379272,
                "Top": 0.1579236090183258
            },
            "Polygon": [
                {
                    "X": 0.7183526754379272,
                    "Y": 0.15792594850063324
                },
                {
                    "X": 0.7312822937965393,
                    "Y": 0.1579236090183258
                },
                {
                    "X": 0.7312846183776855,
                    "Y": 0.16370214521884918
                },
                {
                    "X": 0.7183549404144287,
                    "Y": 0.16370446979999542
                }
            ]
        },
        "Id": "8541cd33-2a39-411c-a426-f138ecc68f37"
    },
    {
        "BlockType": "WORD",
        "Confidence": 71.72225189208984,
        "Text": "begleichen.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06405768543481827,
                "Height": 0.009005113504827023,
                "Left": 0.7357537746429443,
                "Top": 0.15603359043598175
            },
            "Polygon": [
                {
                    "X": 0.7357537746429443,
                    "Y": 0.15604525804519653
                },
                {
                    "X": 0.7998076677322388,
                    "Y": 0.15603359043598175
                },
                {
                    "X": 0.7998114228248596,
                    "Y": 0.16502712666988373
                },
                {
                    "X": 0.7357572913169861,
                    "Y": 0.16503870487213135
                }
            ]
        },
        "Id": "0a4ecc46-da0b-481f-9e5f-4268af0fa8ed"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.99848175048828,
        "Text": "Dabei",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03273691609501839,
                "Height": 0.007638248614966869,
                "Left": 0.8059785962104797,
                "Top": 0.15577730536460876
            },
            "Polygon": [
                {
                    "X": 0.8059785962104797,
                    "Y": 0.1557832807302475
                },
                {
                    "X": 0.838712215423584,
                    "Y": 0.15577730536460876
                },
                {
                    "X": 0.8387154936790466,
                    "Y": 0.16340963542461395
                },
                {
                    "X": 0.8059818148612976,
                    "Y": 0.1634155660867691
                }
            ]
        },
        "Id": "0dc7aac4-82c7-4120-a266-dfba9152211e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.69332885742188,
        "Text": "ist",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01265737134963274,
                "Height": 0.007426872383803129,
                "Left": 0.8437902331352234,
                "Top": 0.15568965673446655
            },
            "Polygon": [
                {
                    "X": 0.8437902331352234,
                    "Y": 0.1556919664144516
                },
                {
                    "X": 0.8564443588256836,
                    "Y": 0.15568965673446655
                },
                {
                    "X": 0.8564476370811462,
                    "Y": 0.1631142497062683
                },
                {
                    "X": 0.8437934517860413,
                    "Y": 0.16311652958393097
                }
            ]
        },
        "Id": "b7764b23-c5d8-4bbb-b8a5-e2057186ccd2"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.18415069580078,
        "Text": "für",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01464174035936594,
                "Height": 0.007091062609106302,
                "Left": 0.8610081076622009,
                "Top": 0.15581583976745605
            },
            "Polygon": [
                {
                    "X": 0.8610081076622009,
                    "Y": 0.15581850707530975
                },
                {
                    "X": 0.8756467700004578,
                    "Y": 0.15581583976745605
                },
                {
                    "X": 0.8756498694419861,
                    "Y": 0.16290424764156342
                },
                {
                    "X": 0.8610112071037292,
                    "Y": 0.16290690004825592
                }
            ]
        },
        "Id": "35c00d82-7718-44b2-8fa5-1c30a441275a"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.62525939941406,
        "Text": "die",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.016586294397711754,
                "Height": 0.007286084350198507,
                "Left": 0.880193829536438,
                "Top": 0.15566231310367584
            },
            "Polygon": [
                {
                    "X": 0.880193829536438,
                    "Y": 0.155665323138237
                },
                {
                    "X": 0.8967768549919128,
                    "Y": 0.15566231310367584
                },
                {
                    "X": 0.8967800736427307,
                    "Y": 0.16294538974761963
                },
                {
                    "X": 0.8801970481872559,
                    "Y": 0.1629483848810196
                }
            ]
        },
        "Id": "3c518659-d274-4752-95a5-25bc149d9370"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.49173736572266,
        "Text": "Ein-",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.021077245473861694,
                "Height": 0.007223702501505613,
                "Left": 0.9024471044540405,
                "Top": 0.15560507774353027
            },
            "Polygon": [
                {
                    "X": 0.9024471044540405,
                    "Y": 0.1556089222431183
                },
                {
                    "X": 0.9235210418701172,
                    "Y": 0.15560507774353027
                },
                {
                    "X": 0.9235243201255798,
                    "Y": 0.16282497346401215
                },
                {
                    "X": 0.9024503231048584,
                    "Y": 0.16282878816127777
                }
            ]
        },
        "Id": "7342ca43-dddf-4c9a-87b8-e257dfeddc38"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.75003814697266,
        "Text": "Premiumadress",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08458327502012253,
                "Height": 0.006426560692489147,
                "Left": 0.08817147463560104,
                "Top": 0.16751882433891296
            },
            "Polygon": [
                {
                    "X": 0.08817147463560104,
                    "Y": 0.16753405332565308
                },
                {
                    "X": 0.17275334894657135,
                    "Y": 0.16751882433891296
                },
                {
                    "X": 0.17275474965572357,
                    "Y": 0.17393022775650024
                },
                {
                    "X": 0.08817271143198013,
                    "Y": 0.1739453822374344
                }
            ]
        },
        "Id": "fc9c5767-7f84-46bd-98f4-726c069e57d0"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.1817855834961,
        "Text": "haltung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04028284177184105,
                "Height": 0.008880160748958588,
                "Left": 0.5166605114936829,
                "Top": 0.16667406260967255
            },
            "Polygon": [
                {
                    "X": 0.5166605114936829,
                    "Y": 0.16668131947517395
                },
                {
                    "X": 0.5569403171539307,
                    "Y": 0.16667406260967255
                },
                {
                    "X": 0.5569433569908142,
                    "Y": 0.1755470186471939
                },
                {
                    "X": 0.5166634321212769,
                    "Y": 0.17555421590805054
                }
            ]
        },
        "Id": "1cd22bd1-6f9c-424d-8d63-004f76a24266"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.40631866455078,
        "Text": "der",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.018275538459420204,
                "Height": 0.007279171142727137,
                "Left": 0.5732690691947937,
                "Top": 0.16666081547737122
            },
            "Polygon": [
                {
                    "X": 0.5732690691947937,
                    "Y": 0.16666410863399506
                },
                {
                    "X": 0.5915420651435852,
                    "Y": 0.16666081547737122
                },
                {
                    "X": 0.5915446281433105,
                    "Y": 0.17393670976161957
                },
                {
                    "X": 0.5732715725898743,
                    "Y": 0.17393998801708221
                }
            ]
        },
        "Id": "2426d6c7-7710-4e36-b1e8-6a0fcd1a7a2a"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.34107971191406,
        "Text": "Zahlungsfrist",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07308195531368256,
                "Height": 0.00927999522536993,
                "Left": 0.6069513559341431,
                "Top": 0.16611887514591217
            },
            "Polygon": [
                {
                    "X": 0.6069513559341431,
                    "Y": 0.16613206267356873
                },
                {
                    "X": 0.6800298094749451,
                    "Y": 0.16611887514591217
                },
                {
                    "X": 0.680033266544342,
                    "Y": 0.17538580298423767
                },
                {
                    "X": 0.6069546341896057,
                    "Y": 0.17539887130260468
                }
            ]
        },
        "Id": "35020a76-b3f6-405d-8a99-9ef1ec3f87d7"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.4349136352539,
        "Text": "der",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01811067946255207,
                "Height": 0.007207056973129511,
                "Left": 0.695745050907135,
                "Top": 0.16595244407653809
            },
            "Polygon": [
                {
                    "X": 0.695745050907135,
                    "Y": 0.16595570743083954
                },
                {
                    "X": 0.7138529419898987,
                    "Y": 0.16595244407653809
                },
                {
                    "X": 0.7138557434082031,
                    "Y": 0.1731562465429306
                },
                {
                    "X": 0.6957477927207947,
                    "Y": 0.17315949499607086
                }
            ]
        },
        "Id": "7c2cbb78-07d7-4573-a05a-86a977fc5108"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.24860382080078,
        "Text": "Eingang",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04555907100439072,
                "Height": 0.009117812849581242,
                "Left": 0.7305129170417786,
                "Top": 0.1656760722398758
            },
            "Polygon": [
                {
                    "X": 0.7305129170417786,
                    "Y": 0.1656842976808548
                },
                {
                    "X": 0.7760682702064514,
                    "Y": 0.1656760722398758
                },
                {
                    "X": 0.7760719656944275,
                    "Y": 0.17478573322296143
                },
                {
                    "X": 0.7305164933204651,
                    "Y": 0.17479388415813446
                }
            ]
        },
        "Id": "297f20fb-884a-4176-8b91-f322a501fe02"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.22789001464844,
        "Text": "auf",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.017257461324334145,
                "Height": 0.00720503693446517,
                "Left": 0.7925511598587036,
                "Top": 0.16564027965068817
            },
            "Polygon": [
                {
                    "X": 0.7925511598587036,
                    "Y": 0.16564339399337769
                },
                {
                    "X": 0.8098056316375732,
                    "Y": 0.16564027965068817
                },
                {
                    "X": 0.809808611869812,
                    "Y": 0.17284221947193146
                },
                {
                    "X": 0.7925541400909424,
                    "Y": 0.17284531891345978
                }
            ]
        },
        "Id": "3f195f15-180e-4a46-adcc-86b100b845e9"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.47075653076172,
        "Text": "unserem",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.048942480236291885,
                "Height": 0.006136870011687279,
                "Left": 0.8257869482040405,
                "Top": 0.16665542125701904
            },
            "Polygon": [
                {
                    "X": 0.8257869482040405,
                    "Y": 0.1666642427444458
                },
                {
                    "X": 0.8747267127037048,
                    "Y": 0.16665542125701904
                },
                {
                    "X": 0.8747293949127197,
                    "Y": 0.1727835237979889
                },
                {
                    "X": 0.8257895112037659,
                    "Y": 0.17279228568077087
                }
            ]
        },
        "Id": "0cc53ed8-a1a5-4e15-9da1-fd9b8d268780"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.18505859375,
        "Text": "Konto",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.032598432153463364,
                "Height": 0.007315776310861111,
                "Left": 0.8913264274597168,
                "Top": 0.16506078839302063
            },
            "Polygon": [
                {
                    "X": 0.8913264274597168,
                    "Y": 0.1650666743516922
                },
                {
                    "X": 0.9239215850830078,
                    "Y": 0.16506078839302063
                },
                {
                    "X": 0.9239248633384705,
                    "Y": 0.17237071692943573
                },
                {
                    "X": 0.8913297057151794,
                    "Y": 0.17237655818462372
                }
            ]
        },
        "Id": "0eed9230-8c38-4ac6-8fa1-fd066a3bcb1f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.84303283691406,
        "Text": "P",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.022703951224684715,
                "Height": 0.019746821373701096,
                "Left": 0.08973183482885361,
                "Top": 0.17660947144031525
            },
            "Polygon": [
                {
                    "X": 0.08973183482885361,
                    "Y": 0.17661352455615997
                },
                {
                    "X": 0.1124318391084671,
                    "Y": 0.17660947144031525
                },
                {
                    "X": 0.11243578046560287,
                    "Y": 0.19635231792926788
                },
                {
                    "X": 0.08973564207553864,
                    "Y": 0.19635629653930664
                }
            ]
        },
        "Id": "752e6b58-2c6d-4da0-9e28-2070dcc8a4af"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.57536315917969,
        "Text": "6B",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.012814904563128948,
                "Height": 0.006318952888250351,
                "Left": 0.1681595742702484,
                "Top": 0.17697839438915253
            },
            "Polygon": [
                {
                    "X": 0.1681595742702484,
                    "Y": 0.17698067426681519
                },
                {
                    "X": 0.180973082780838,
                    "Y": 0.17697839438915253
                },
                {
                    "X": 0.18097448348999023,
                    "Y": 0.18329507112503052
                },
                {
                    "X": 0.16816094517707825,
                    "Y": 0.18329733610153198
                }
            ]
        },
        "Id": "8bedb801-1986-4c32-aded-81bc0ba429cb"
    },
    {
        "BlockType": "WORD",
        "Confidence": 52.46643829345703,
        "Text": "2EEF",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02655959129333496,
                "Height": 0.006264903582632542,
                "Left": 0.18512701988220215,
                "Top": 0.17692163586616516
            },
            "Polygon": [
                {
                    "X": 0.18512701988220215,
                    "Y": 0.176926389336586
                },
                {
                    "X": 0.2116851657629013,
                    "Y": 0.17692163586616516
                },
                {
                    "X": 0.2116866111755371,
                    "Y": 0.18318183720111847
                },
                {
                    "X": 0.18512840569019318,
                    "Y": 0.18318654596805573
                }
            ]
        },
        "Id": "942259d3-f41b-4ab4-9108-46abbf758b1d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 88.70494079589844,
        "Text": "C310",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.026598330587148666,
                "Height": 0.006300823297351599,
                "Left": 0.21575146913528442,
                "Top": 0.17690232396125793
            },
            "Polygon": [
                {
                    "X": 0.21575146913528442,
                    "Y": 0.17690707743167877
                },
                {
                    "X": 0.24234828352928162,
                    "Y": 0.17690232396125793
                },
                {
                    "X": 0.2423497885465622,
                    "Y": 0.18319842219352722
                },
                {
                    "X": 0.21575292944908142,
                    "Y": 0.18320314586162567
                }
            ]
        },
        "Id": "506b3600-a5b7-4a03-8ee2-4b03ace54d5f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 94.81652069091797,
        "Text": "29",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.011924129910767078,
                "Height": 0.006344469729810953,
                "Left": 0.24635472893714905,
                "Top": 0.1769888550043106
            },
            "Polygon": [
                {
                    "X": 0.24635472893714905,
                    "Y": 0.17699098587036133
                },
                {
                    "X": 0.2582772970199585,
                    "Y": 0.1769888550043106
                },
                {
                    "X": 0.25827884674072266,
                    "Y": 0.1833312064409256
                },
                {
                    "X": 0.24635626375675201,
                    "Y": 0.18333332240581512
                }
            ]
        },
        "Id": "30add774-f2e3-4006-8e14-ae6ff67a67ac"
    },
    {
        "BlockType": "WORD",
        "Confidence": 93.0759506225586,
        "Text": "4000",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02464355155825615,
                "Height": 0.006131594069302082,
                "Left": 0.262164443731308,
                "Top": 0.17693157494068146
            },
            "Polygon": [
                {
                    "X": 0.262164443731308,
                    "Y": 0.17693597078323364
                },
                {
                    "X": 0.2868064343929291,
                    "Y": 0.17693157494068146
                },
                {
                    "X": 0.28680798411369324,
                    "Y": 0.18305878341197968
                },
                {
                    "X": 0.26216596364974976,
                    "Y": 0.18306316435337067
                }
            ]
        },
        "Id": "93df3d7a-71c8-4ee5-bb2a-6a8dc55b91e4"
    },
    {
        "BlockType": "WORD",
        "Confidence": 94.1572036743164,
        "Text": "471B",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02580752968788147,
                "Height": 0.005976035725325346,
                "Left": 0.290780246257782,
                "Top": 0.17685896158218384
            },
            "Polygon": [
                {
                    "X": 0.290780246257782,
                    "Y": 0.17686356604099274
                },
                {
                    "X": 0.3165861964225769,
                    "Y": 0.17685896158218384
                },
                {
                    "X": 0.31658777594566345,
                    "Y": 0.18283040821552277
                },
                {
                    "X": 0.29078176617622375,
                    "Y": 0.18283499777317047
                }
            ]
        },
        "Id": "6b9311a7-5878-4fe7-8428-e3428f913633"
    },
    {
        "BlockType": "WORD",
        "Confidence": 71.09307861328125,
        "Text": "ausschlaggebend.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10152410715818405,
                "Height": 0.009103109128773212,
                "Left": 0.5164182186126709,
                "Top": 0.17614150047302246
            },
            "Polygon": [
                {
                    "X": 0.5164182186126709,
                    "Y": 0.17615965008735657
                },
                {
                    "X": 0.6179390549659729,
                    "Y": 0.17614150047302246
                },
                {
                    "X": 0.6179423332214355,
                    "Y": 0.18522661924362183
                },
                {
                    "X": 0.5164211988449097,
                    "Y": 0.1852446049451828
                }
            ]
        },
        "Id": "23b34ba3-b311-4b93-b2e7-8a2eaa4b775a"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.94837188720703,
        "Text": "DV",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.016902344301342964,
                "Height": 0.00684205861762166,
                "Left": 0.14777584373950958,
                "Top": 0.18653714656829834
            },
            "Polygon": [
                {
                    "X": 0.14777584373950958,
                    "Y": 0.1865401417016983
                },
                {
                    "X": 0.1646767109632492,
                    "Y": 0.18653714656829834
                },
                {
                    "X": 0.1646781861782074,
                    "Y": 0.19337622821331024
                },
                {
                    "X": 0.14777728915214539,
                    "Y": 0.193379208445549
                }
            ]
        },
        "Id": "0b840adf-7cb4-4f4e-b5e5-45b3976614eb"
    },
    {
        "BlockType": "WORD",
        "Confidence": 78.81661987304688,
        "Text": "02.23",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.027778757736086845,
                "Height": 0.006008554715663195,
                "Left": 0.1680547446012497,
                "Top": 0.1874442845582962
            },
            "Polygon": [
                {
                    "X": 0.1680547446012497,
                    "Y": 0.18744918704032898
                },
                {
                    "X": 0.19583214819431305,
                    "Y": 0.1874442845582962
                },
                {
                    "X": 0.1958335041999817,
                    "Y": 0.19344794750213623
                },
                {
                    "X": 0.16805605590343475,
                    "Y": 0.1934528350830078
                }
            ]
        },
        "Id": "36f53747-b1d9-406f-83f7-498c05bd00b9"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.2381820678711,
        "Text": "0,85",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02189958468079567,
                "Height": 0.006975890137255192,
                "Left": 0.21593496203422546,
                "Top": 0.18724890053272247
            },
            "Polygon": [
                {
                    "X": 0.21593496203422546,
                    "Y": 0.18725277483463287
                },
                {
                    "X": 0.23783287405967712,
                    "Y": 0.18724890053272247
                },
                {
                    "X": 0.23783454298973083,
                    "Y": 0.19422094523906708
                },
                {
                    "X": 0.2159365862607956,
                    "Y": 0.1942247897386551
                }
            ]
        },
        "Id": "5eea1c2e-1427-42a0-9ada-b4eaeedf3976"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.76686096191406,
        "Text": "Deutsche",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.049285661429166794,
                "Height": 0.006418616510927677,
                "Left": 0.24829837679862976,
                "Top": 0.1873292177915573
            },
            "Polygon": [
                {
                    "X": 0.24829837679862976,
                    "Y": 0.1873379349708557
                },
                {
                    "X": 0.29758238792419434,
                    "Y": 0.1873292177915573
                },
                {
                    "X": 0.29758405685424805,
                    "Y": 0.1937391757965088
                },
                {
                    "X": 0.24829994142055511,
                    "Y": 0.19374783337116241
                }
            ]
        },
        "Id": "5d86f688-51a5-4700-b62d-0edb9ef132e5"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.47215270996094,
        "Text": "Post",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.022947560995817184,
                "Height": 0.006423091981559992,
                "Left": 0.3012158274650574,
                "Top": 0.18734069168567657
            },
            "Polygon": [
                {
                    "X": 0.3012158274650574,
                    "Y": 0.1873447448015213
                },
                {
                    "X": 0.32416167855262756,
                    "Y": 0.18734069168567657
                },
                {
                    "X": 0.32416337728500366,
                    "Y": 0.1937597393989563
                },
                {
                    "X": 0.3012174963951111,
                    "Y": 0.19376377761363983
                }
            ]
        },
        "Id": "9de71193-4a8b-4464-b5da-7653e43e94f0"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.64141845703125,
        "Text": "Zahlungsziel:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07637891918420792,
                "Height": 0.009282702580094337,
                "Left": 0.524024248123169,
                "Top": 0.1935654878616333
            },
            "Polygon": [
                {
                    "X": 0.524024248123169,
                    "Y": 0.19357891380786896
                },
                {
                    "X": 0.6003998517990112,
                    "Y": 0.1935654878616333
                },
                {
                    "X": 0.6004031300544739,
                    "Y": 0.20283488929271698
                },
                {
                    "X": 0.5240272879600525,
                    "Y": 0.20284819602966309
                }
            ]
        },
        "Id": "cb174627-bc26-44a3-81df-ccf60560488e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.2822494506836,
        "Text": "08.03.2023",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0650574117898941,
                "Height": 0.007540243677794933,
                "Left": 0.850509524345398,
                "Top": 0.19212448596954346
            },
            "Polygon": [
                {
                    "X": 0.850509524345398,
                    "Y": 0.19213594496250153
                },
                {
                    "X": 0.9155635237693787,
                    "Y": 0.19212448596954346
                },
                {
                    "X": 0.9155669212341309,
                    "Y": 0.19965337216854095
                },
                {
                    "X": 0.8505127429962158,
                    "Y": 0.19966474175453186
                }
            ]
        },
        "Id": "b61fe103-917a-4ffa-a80c-3568bca5a679"
    },
    {
        "BlockType": "WORD",
        "Confidence": 85.55465698242188,
        "Text": "Zahlungsempfänger:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.11962558329105377,
                "Height": 0.009331676177680492,
                "Left": 0.5244100689888,
                "Top": 0.20664361119270325
            },
            "Polygon": [
                {
                    "X": 0.5244100689888,
                    "Y": 0.20666436851024628
                },
                {
                    "X": 0.6440322399139404,
                    "Y": 0.20664361119270325
                },
                {
                    "X": 0.6440356969833374,
                    "Y": 0.2159547209739685
                },
                {
                    "X": 0.5244131684303284,
                    "Y": 0.21597528457641602
                }
            ]
        },
        "Id": "69a2fa4c-334b-4cff-b0fa-134a3dd62970"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.44129180908203,
        "Text": "Klarna",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.037786997854709625,
                "Height": 0.007973114028573036,
                "Left": 0.8782814741134644,
                "Top": 0.20504966378211975
            },
            "Polygon": [
                {
                    "X": 0.8782814741134644,
                    "Y": 0.20505623519420624
                },
                {
                    "X": 0.9160648584365845,
                    "Y": 0.20504966378211975
                },
                {
                    "X": 0.9160684943199158,
                    "Y": 0.21301627159118652
                },
                {
                    "X": 0.8782849907875061,
                    "Y": 0.21302278339862823
                }
            ]
        },
        "Id": "a4ce42dc-a79c-44a2-948c-de7c55dc51f2"
    },
    {
        "BlockType": "WORD",
        "Confidence": 79.14774322509766,
        "Text": "*117*1137*1**K4000*",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.12891142070293427,
                "Height": 0.007045602425932884,
                "Left": 0.09852313250303268,
                "Top": 0.2113194763660431
            },
            "Polygon": [
                {
                    "X": 0.09852313250303268,
                    "Y": 0.2113417536020279
                },
                {
                    "X": 0.22743289172649384,
                    "Y": 0.2113194763660431
                },
                {
                    "X": 0.22743454575538635,
                    "Y": 0.21834297478199005
                },
                {
                    "X": 0.09852451086044312,
                    "Y": 0.21836508810520172
                }
            ]
        },
        "Id": "25fbe5f5-30bb-4e38-9818-710cd4a4666f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 62.715328216552734,
        "Text": "IBAN:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03243675082921982,
                "Height": 0.007218779530376196,
                "Left": 0.5248004794120789,
                "Top": 0.21977178752422333
            },
            "Polygon": [
                {
                    "X": 0.5248004794120789,
                    "Y": 0.21977734565734863
                },
                {
                    "X": 0.5572347640991211,
                    "Y": 0.21977178752422333
                },
                {
                    "X": 0.5572372078895569,
                    "Y": 0.22698505222797394
                },
                {
                    "X": 0.5248028635978699,
                    "Y": 0.22699056565761566
                }
            ]
        },
        "Id": "8397b4c2-6db6-43f9-8009-bb0be752a241"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.59996795654297,
        "Text": "DE13760700120500154000",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.16287846863269806,
                "Height": 0.007568179164081812,
                "Left": 0.7533211708068848,
                "Top": 0.2183956354856491
            },
            "Polygon": [
                {
                    "X": 0.7533211708068848,
                    "Y": 0.21842357516288757
                },
                {
                    "X": 0.9161962270736694,
                    "Y": 0.2183956354856491
                },
                {
                    "X": 0.9161996245384216,
                    "Y": 0.22593609988689423
                },
                {
                    "X": 0.7533242106437683,
                    "Y": 0.22596381604671478
                }
            ]
        },
        "Id": "c18e257e-935d-4034-90bb-205c1eb41170"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.8257064819336,
        "Text": "Robert",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04819211736321449,
                "Height": 0.009052595123648643,
                "Left": 0.09995157271623611,
                "Top": 0.22367635369300842
            },
            "Polygon": [
                {
                    "X": 0.09995157271623611,
                    "Y": 0.22368457913398743
                },
                {
                    "X": 0.1481417864561081,
                    "Y": 0.22367635369300842
                },
                {
                    "X": 0.1481436938047409,
                    "Y": 0.23272079229354858
                },
                {
                    "X": 0.09995334595441818,
                    "Y": 0.23272894322872162
                }
            ]
        },
        "Id": "c060ee34-d0f7-4c0a-a66f-a8fe7c6c732f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.08456420898438,
        "Text": "Baluta",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.044896449893713,
                "Height": 0.009073425084352493,
                "Left": 0.153401717543602,
                "Top": 0.22367434203624725
            },
            "Polygon": [
                {
                    "X": 0.153401717543602,
                    "Y": 0.2236820012331009
                },
                {
                    "X": 0.19829611480236053,
                    "Y": 0.22367434203624725
                },
                {
                    "X": 0.19829817116260529,
                    "Y": 0.23274017870426178
                },
                {
                    "X": 0.1534036546945572,
                    "Y": 0.23274777829647064
                }
            ]
        },
        "Id": "1a1381c6-3093-4b36-bfb6-b8c9dc8f9df5"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.5063247680664,
        "Text": "Tecklenburger",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10405456274747849,
                "Height": 0.011021872982382774,
                "Left": 0.0993075966835022,
                "Top": 0.2356022447347641
            },
            "Polygon": [
                {
                    "X": 0.0993075966835022,
                    "Y": 0.23561978340148926
                },
                {
                    "X": 0.20335963368415833,
                    "Y": 0.2356022447347641
                },
                {
                    "X": 0.20336215198040009,
                    "Y": 0.24660678207874298
                },
                {
                    "X": 0.09930974990129471,
                    "Y": 0.24662412703037262
                }
            ]
        },
        "Id": "9cb8be3e-f483-4e39-a6ba-13721be9a37c"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.31825256347656,
        "Text": "Str.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.023773884400725365,
                "Height": 0.009136569686233997,
                "Left": 0.20824936032295227,
                "Top": 0.23553335666656494
            },
            "Polygon": [
                {
                    "X": 0.20824936032295227,
                    "Y": 0.2355373650789261
                },
                {
                    "X": 0.23202107846736908,
                    "Y": 0.23553335666656494
                },
                {
                    "X": 0.23202325403690338,
                    "Y": 0.2446659654378891
                },
                {
                    "X": 0.2082514613866806,
                    "Y": 0.24466992914676666
                }
            ]
        },
        "Id": "445c81e6-5aec-4f9b-ad28-ecb4e989eafe"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.33367919921875,
        "Text": "66",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.017480522394180298,
                "Height": 0.00866512581706047,
                "Left": 0.2380315661430359,
                "Top": 0.23584598302841187
            },
            "Polygon": [
                {
                    "X": 0.2380315661430359,
                    "Y": 0.23584893345832825
                },
                {
                    "X": 0.25550997257232666,
                    "Y": 0.23584598302841187
                },
                {
                    "X": 0.2555120885372162,
                    "Y": 0.24450819194316864
                },
                {
                    "X": 0.23803365230560303,
                    "Y": 0.24451111257076263
                }
            ]
        },
        "Id": "0a540398-a846-4d6e-9ea2-296339db54b8"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.01102447509766,
        "Text": "BIC:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024006083607673645,
                "Height": 0.007848327979445457,
                "Left": 0.5248608589172363,
                "Top": 0.23250342905521393
            },
            "Polygon": [
                {
                    "X": 0.5248608589172363,
                    "Y": 0.23250748217105865
                },
                {
                    "X": 0.5488643050193787,
                    "Y": 0.23250342905521393
                },
                {
                    "X": 0.5488669276237488,
                    "Y": 0.2403477281332016
                },
                {
                    "X": 0.5248634219169617,
                    "Y": 0.24035175144672394
                }
            ]
        },
        "Id": "2e1ed8c1-0f7f-474d-8866-342c22e357e2"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.86616516113281,
        "Text": "DEUTDEMM760",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09647513926029205,
                "Height": 0.007731375750154257,
                "Left": 0.8196604251861572,
                "Top": 0.23091819882392883
            },
            "Polygon": [
                {
                    "X": 0.8196604251861572,
                    "Y": 0.23093454539775848
                },
                {
                    "X": 0.9161320328712463,
                    "Y": 0.23091819882392883
                },
                {
                    "X": 0.9161355495452881,
                    "Y": 0.23863336443901062
                },
                {
                    "X": 0.8196636438369751,
                    "Y": 0.23864957690238953
                }
            ]
        },
        "Id": "95bac26f-e186-4c2a-981f-8fdf95090d28"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.44287872314453,
        "Text": "49205",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04544449225068092,
                "Height": 0.009120572358369827,
                "Left": 0.0990210771560669,
                "Top": 0.24811048805713654
            },
            "Polygon": [
                {
                    "X": 0.0990210771560669,
                    "Y": 0.248118057847023
                },
                {
                    "X": 0.1444636583328247,
                    "Y": 0.24811048805713654
                },
                {
                    "X": 0.14446556568145752,
                    "Y": 0.25722357630729675
                },
                {
                    "X": 0.09902285784482956,
                    "Y": 0.25723105669021606
                }
            ]
        },
        "Id": "d25e78d6-b535-45ee-9e80-0f532da2529f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.10050964355469,
        "Text": "Hasbergen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07777245342731476,
                "Height": 0.011039631441235542,
                "Left": 0.15034283697605133,
                "Top": 0.24782727658748627
            },
            "Polygon": [
                {
                    "X": 0.15034283697605133,
                    "Y": 0.24784022569656372
                },
                {
                    "X": 0.22811268270015717,
                    "Y": 0.24782727658748627
                },
                {
                    "X": 0.2281152904033661,
                    "Y": 0.25885409116744995
                },
                {
                    "X": 0.15034517645835876,
                    "Y": 0.25886690616607666
                }
            ]
        },
        "Id": "5e646b37-01c3-4b9f-80f0-93b87450c475"
    },
    {
        "BlockType": "WORD",
        "Confidence": 66.69126892089844,
        "Text": "Gesamtbetrag",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08472704887390137,
                "Height": 0.009364407509565353,
                "Left": 0.524623692035675,
                "Top": 0.24554100632667542
            },
            "Polygon": [
                {
                    "X": 0.524623692035675,
                    "Y": 0.24555514752864838
                },
                {
                    "X": 0.609347403049469,
                    "Y": 0.24554100632667542
                },
                {
                    "X": 0.6093507409095764,
                    "Y": 0.25489142537117004
                },
                {
                    "X": 0.5246267914772034,
                    "Y": 0.2549054026603699
                }
            ]
        },
        "Id": "f44d4674-0078-4f5a-9bcf-3f1196fe144b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 85.54585266113281,
        "Text": "11,54 EUR",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06275676190853119,
                "Height": 0.008749913424253464,
                "Left": 0.8531820774078369,
                "Top": 0.2437792867422104
            },
            "Polygon": [
                {
                    "X": 0.8531820774078369,
                    "Y": 0.24378977715969086
                },
                {
                    "X": 0.9159348607063293,
                    "Y": 0.2437792867422104
                },
                {
                    "X": 0.9159387946128845,
                    "Y": 0.25251880288124084
                },
                {
                    "X": 0.8531858325004578,
                    "Y": 0.25252920389175415
                }
            ]
        },
        "Id": "b003a9cf-1d3f-4291-a879-1c9b99c719d2"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.7459487915039,
        "Text": "Deutschland",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0885259211063385,
                "Height": 0.009103115648031235,
                "Left": 0.10031549632549286,
                "Top": 0.2595459818840027
            },
            "Polygon": [
                {
                    "X": 0.10031549632549286,
                    "Y": 0.2595605254173279
                },
                {
                    "X": 0.188839390873909,
                    "Y": 0.2595459818840027
                },
                {
                    "X": 0.18884141743183136,
                    "Y": 0.2686346769332886
                },
                {
                    "X": 0.10031728446483612,
                    "Y": 0.2686491012573242
                }
            ]
        },
        "Id": "d2d89795-cfea-4597-8fce-c261584dbb32"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.98406982421875,
        "Text": "Verwendungszweck:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.14372971653938293,
                "Height": 0.009760557673871517,
                "Left": 0.5408612489700317,
                "Top": 0.2600610554218292
            },
            "Polygon": [
                {
                    "X": 0.5408612489700317,
                    "Y": 0.26008468866348267
                },
                {
                    "X": 0.6845872402191162,
                    "Y": 0.2600610554218292
                },
                {
                    "X": 0.6845909953117371,
                    "Y": 0.269798219203949
                },
                {
                    "X": 0.5408645272254944,
                    "Y": 0.2698216140270233
                }
            ]
        },
        "Id": "7c58e019-6301-4f05-bd2f-3bb28fb4c584"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.8499526977539,
        "Text": "8668556130439",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10544036328792572,
                "Height": 0.008548851124942303,
                "Left": 0.8104568123817444,
                "Top": 0.2585929036140442
            },
            "Polygon": [
                {
                    "X": 0.8104568123817444,
                    "Y": 0.2586102783679962
                },
                {
                    "X": 0.9158933162689209,
                    "Y": 0.2585929036140442
                },
                {
                    "X": 0.9158971309661865,
                    "Y": 0.26712456345558167
                },
                {
                    "X": 0.8104603886604309,
                    "Y": 0.26714175939559937
                }
            ]
        },
        "Id": "9bb904f8-8ddd-496a-8adb-ed2b91f599ea"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.35917663574219,
        "Text": "Bitte",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01881280168890953,
                "Height": 0.0057723200879991055,
                "Left": 0.5224922895431519,
                "Top": 0.27392086386680603
            },
            "Polygon": [
                {
                    "X": 0.5224922895431519,
                    "Y": 0.2739239037036896
                },
                {
                    "X": 0.5413031578063965,
                    "Y": 0.27392086386680603
                },
                {
                    "X": 0.5413050651550293,
                    "Y": 0.279690146446228
                },
                {
                    "X": 0.5224941968917847,
                    "Y": 0.2796931862831116
                }
            ]
        },
        "Id": "a4248ff2-2a75-4ced-8fea-8375e40d217f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.81380462646484,
        "Text": "bezahle",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0338636115193367,
                "Height": 0.006021661218255758,
                "Left": 0.5444236993789673,
                "Top": 0.27377626299858093
            },
            "Polygon": [
                {
                    "X": 0.5444236993789673,
                    "Y": 0.27378174662590027
                },
                {
                    "X": 0.5782852172851562,
                    "Y": 0.27377626299858093
                },
                {
                    "X": 0.5782873034477234,
                    "Y": 0.279792457818985
                },
                {
                    "X": 0.5444257259368896,
                    "Y": 0.27979791164398193
                }
            ]
        },
        "Id": "ec3241a2-9ea0-42f5-883c-53c1332c427e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.39469146728516,
        "Text": "jeden",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.023368390277028084,
                "Height": 0.0057817609049379826,
                "Left": 0.5816863775253296,
                "Top": 0.2741369605064392
            },
            "Polygon": [
                {
                    "X": 0.5816863775253296,
                    "Y": 0.27414074540138245
                },
                {
                    "X": 0.6050527691841125,
                    "Y": 0.2741369605064392
                },
                {
                    "X": 0.6050547957420349,
                    "Y": 0.2799149453639984
                },
                {
                    "X": 0.581688404083252,
                    "Y": 0.27991870045661926
                }
            ]
        },
        "Id": "0f1f187c-e254-4600-a7af-a28cc9edf404"
    },
    {
        "BlockType": "WORD",
        "Confidence": 71.71744537353516,
        "Text": "Einkau",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03136378526687622,
                "Height": 0.005931088235229254,
                "Left": 0.6084398627281189,
                "Top": 0.2736169397830963
            },
            "Polygon": [
                {
                    "X": 0.6084398627281189,
                    "Y": 0.2736220359802246
                },
                {
                    "X": 0.6398014426231384,
                    "Y": 0.2736169397830963
                },
                {
                    "X": 0.6398036479949951,
                    "Y": 0.2795429825782776
                },
                {
                    "X": 0.608441948890686,
                    "Y": 0.2795480191707611
                }
            ]
        },
        "Id": "cce13603-b1b9-43c7-b172-39d966ac94ab"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.7419662475586,
        "Text": "separat",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03255799412727356,
                "Height": 0.006553949788212776,
                "Left": 0.6435089111328125,
                "Top": 0.2734439969062805
            },
            "Polygon": [
                {
                    "X": 0.6435089111328125,
                    "Y": 0.27344927191734314
                },
                {
                    "X": 0.6760644316673279,
                    "Y": 0.2734439969062805
                },
                {
                    "X": 0.6760668754577637,
                    "Y": 0.2799926996231079
                },
                {
                    "X": 0.6435112953186035,
                    "Y": 0.27999794483184814
                }
            ]
        },
        "Id": "f26e9149-498d-48a2-8942-6c3d2b4d3c52"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.9415512084961,
        "Text": "und",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.015990760177373886,
                "Height": 0.005412016063928604,
                "Left": 0.6789843440055847,
                "Top": 0.2731921672821045
            },
            "Polygon": [
                {
                    "X": 0.6789843440055847,
                    "Y": 0.2731947600841522
                },
                {
                    "X": 0.6949730515480042,
                    "Y": 0.2731921672821045
                },
                {
                    "X": 0.6949751377105713,
                    "Y": 0.27860158681869507
                },
                {
                    "X": 0.6789863705635071,
                    "Y": 0.2786041796207428
                }
            ]
        },
        "Id": "5a1664de-2f5e-4d28-829f-5e955196bb1a"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.5334701538086,
        "Text": "gib",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.013036433607339859,
                "Height": 0.006597360596060753,
                "Left": 0.6977774500846863,
                "Top": 0.27318814396858215
            },
            "Polygon": [
                {
                    "X": 0.6977774500846863,
                    "Y": 0.2731902599334717
                },
                {
                    "X": 0.7108113169670105,
                    "Y": 0.27318814396858215
                },
                {
                    "X": 0.7108138799667358,
                    "Y": 0.2797833979129791
                },
                {
                    "X": 0.6977799534797668,
                    "Y": 0.27978548407554626
                }
            ]
        },
        "Id": "bb3d7478-794d-4bbc-b1ac-b16c53d5dc4e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.48873138427734,
        "Text": "dabei",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.023820746690034866,
                "Height": 0.005548710469156504,
                "Left": 0.7139277458190918,
                "Top": 0.2730725407600403
            },
            "Polygon": [
                {
                    "X": 0.7139277458190918,
                    "Y": 0.2730763852596283
                },
                {
                    "X": 0.7377462983131409,
                    "Y": 0.2730725407600403
                },
                {
                    "X": 0.7377485036849976,
                    "Y": 0.27861741185188293
                },
                {
                    "X": 0.7139298915863037,
                    "Y": 0.27862125635147095
                }
            ]
        },
        "Id": "c35f06cf-558d-4b95-b391-033349e942e7"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.19102478027344,
        "Text": "immer",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.026840250939130783,
                "Height": 0.005464448127895594,
                "Left": 0.740727961063385,
                "Top": 0.2729477882385254
            },
            "Polygon": [
                {
                    "X": 0.740727961063385,
                    "Y": 0.272952139377594
                },
                {
                    "X": 0.7675660252571106,
                    "Y": 0.2729477882385254
                },
                {
                    "X": 0.7675682306289673,
                    "Y": 0.27840790152549744
                },
                {
                    "X": 0.7407301664352417,
                    "Y": 0.27841225266456604
                }
            ]
        },
        "Id": "dfa2e2c1-f2f6-47a9-a89d-c9cf3c3ab580"
    },
    {
        "BlockType": "WORD",
        "Confidence": 93.24462127685547,
        "Text": "den",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.015734057873487473,
                "Height": 0.005362357012927532,
                "Left": 0.7704235315322876,
                "Top": 0.27301767468452454
            },
            "Polygon": [
                {
                    "X": 0.7704235315322876,
                    "Y": 0.2730202078819275
                },
                {
                    "X": 0.7861554026603699,
                    "Y": 0.27301767468452454
                },
                {
                    "X": 0.7861576080322266,
                    "Y": 0.278377503156662
                },
                {
                    "X": 0.7704257369041443,
                    "Y": 0.27838003635406494
                }
            ]
        },
        "Id": "610a3545-125b-4548-afd4-d8bc6f700ee2"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.5572509765625,
        "Text": "jeweiligen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.043321117758750916,
                "Height": 0.006760727614164352,
                "Left": 0.7891324162483215,
                "Top": 0.2726316452026367
            },
            "Polygon": [
                {
                    "X": 0.7891324162483215,
                    "Y": 0.2726386487483978
                },
                {
                    "X": 0.8324506878852844,
                    "Y": 0.2726316452026367
                },
                {
                    "X": 0.8324535489082336,
                    "Y": 0.27938538789749146
                },
                {
                    "X": 0.789135217666626,
                    "Y": 0.2793923616409302
                }
            ]
        },
        "Id": "5627f85b-be99-41a9-8bba-ecc92919df81"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.83497619628906,
        "Text": "Verwendungszweck",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08727160096168518,
                "Height": 0.006656331475824118,
                "Left": 0.5225615501403809,
                "Top": 0.28129351139068604
            },
            "Polygon": [
                {
                    "X": 0.5225615501403809,
                    "Y": 0.28130754828453064
                },
                {
                    "X": 0.6098307371139526,
                    "Y": 0.28129351139068604
                },
                {
                    "X": 0.6098331212997437,
                    "Y": 0.28793591260910034
                },
                {
                    "X": 0.5225636959075928,
                    "Y": 0.2879498600959778
                }
            ]
        },
        "Id": "31cf54ac-13e9-4c71-aac4-673ef9865ed7"
    },
    {
        "BlockType": "WORD",
        "Confidence": 82.7552261352539,
        "Text": "an.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.014293243177235126,
                "Height": 0.005294106900691986,
                "Left": 0.610913872718811,
                "Top": 0.2817837595939636
            },
            "Polygon": [
                {
                    "X": 0.610913872718811,
                    "Y": 0.2817860543727875
                },
                {
                    "X": 0.6252052187919617,
                    "Y": 0.2817837595939636
                },
                {
                    "X": 0.6252071261405945,
                    "Y": 0.28707557916641235
                },
                {
                    "X": 0.6109157800674438,
                    "Y": 0.2870778441429138
                }
            ]
        },
        "Id": "c9ee7439-76a1-46e5-84de-c413643a51c4"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.97203826904297,
        "Text": "da",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.010500544682145119,
                "Height": 0.005609686486423016,
                "Left": 0.6282820105552673,
                "Top": 0.2809080481529236
            },
            "Polygon": [
                {
                    "X": 0.6282820105552673,
                    "Y": 0.2809097468852997
                },
                {
                    "X": 0.6387804746627808,
                    "Y": 0.2809080481529236
                },
                {
                    "X": 0.6387825608253479,
                    "Y": 0.28651607036590576
                },
                {
                    "X": 0.6282840371131897,
                    "Y": 0.2865177392959595
                }
            ]
        },
        "Id": "989ee3b9-55ed-42ea-8cc5-8c6a256ccda9"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.0026626586914,
        "Text": "wir",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.011746302247047424,
                "Height": 0.00541065214201808,
                "Left": 0.6424255967140198,
                "Top": 0.280994713306427
            },
            "Polygon": [
                {
                    "X": 0.6424255967140198,
                    "Y": 0.2809965908527374
                },
                {
                    "X": 0.6541699171066284,
                    "Y": 0.280994713306427
                },
                {
                    "X": 0.654171884059906,
                    "Y": 0.28640347719192505
                },
                {
                    "X": 0.6424275636672974,
                    "Y": 0.2864053547382355
                }
            ]
        },
        "Id": "69b0d4da-26b2-4d5a-85d9-ea5abc8eb817"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.44549560546875,
        "Text": "deine",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.023966597393155098,
                "Height": 0.0055950600653886795,
                "Left": 0.6570099592208862,
                "Top": 0.2809828221797943
            },
            "Polygon": [
                {
                    "X": 0.6570099592208862,
                    "Y": 0.2809866964817047
                },
                {
                    "X": 0.6809744238853455,
                    "Y": 0.2809828221797943
                },
                {
                    "X": 0.6809765696525574,
                    "Y": 0.2865740656852722
                },
                {
                    "X": 0.6570120453834534,
                    "Y": 0.28657788038253784
                }
            ]
        },
        "Id": "9791fcec-7214-44e5-a763-c4ff5bbdbf06"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.20256805419922,
        "Text": "Zahlung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.035126328468322754,
                "Height": 0.00676485151052475,
                "Left": 0.6838985085487366,
                "Top": 0.2806984484195709
            },
            "Polygon": [
                {
                    "X": 0.6838985085487366,
                    "Y": 0.2807041108608246
                },
                {
                    "X": 0.7190221548080444,
                    "Y": 0.2806984484195709
                },
                {
                    "X": 0.7190248370170593,
                    "Y": 0.2874577045440674
                },
                {
                    "X": 0.6839010715484619,
                    "Y": 0.28746330738067627
                }
            ]
        },
        "Id": "8d1b67f1-8f2e-46fb-ab19-923c9842b32b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 92.35810852050781,
        "Text": "sonst",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.023466045036911964,
                "Height": 0.005329478066414595,
                "Left": 0.7219445705413818,
                "Top": 0.28066641092300415
            },
            "Polygon": [
                {
                    "X": 0.7219445705413818,
                    "Y": 0.2806701958179474
                },
                {
                    "X": 0.7454084753990173,
                    "Y": 0.28066641092300415
                },
                {
                    "X": 0.7454106211662292,
                    "Y": 0.2859921455383301
                },
                {
                    "X": 0.721946656703949,
                    "Y": 0.2859959006309509
                }
            ]
        },
        "Id": "a526c80c-9925-47a8-ad32-84a556567ca8"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.35197448730469,
        "Text": "nicht",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02079785242676735,
                "Height": 0.0055976673029363155,
                "Left": 0.7482325434684753,
                "Top": 0.28036612272262573
            },
            "Polygon": [
                {
                    "X": 0.7482325434684753,
                    "Y": 0.28036949038505554
                },
                {
                    "X": 0.7690281271934509,
                    "Y": 0.28036612272262573
                },
                {
                    "X": 0.7690303921699524,
                    "Y": 0.28596046566963196
                },
                {
                    "X": 0.7482348084449768,
                    "Y": 0.2859638035297394
                }
            ]
        },
        "Id": "ee62f565-66c4-4cef-8fce-d73d96c9f1a2"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.282470703125,
        "Text": "zuordnen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04014983028173447,
                "Height": 0.005470632575452328,
                "Left": 0.7719051241874695,
                "Top": 0.2804437577724457
            },
            "Polygon": [
                {
                    "X": 0.7719051241874695,
                    "Y": 0.2804502248764038
                },
                {
                    "X": 0.8120526671409607,
                    "Y": 0.2804437577724457
                },
                {
                    "X": 0.8120549917221069,
                    "Y": 0.28590795397758484
                },
                {
                    "X": 0.771907389163971,
                    "Y": 0.2859143912792206
                }
            ]
        },
        "Id": "a565d4ee-dc02-4c11-95b8-a24e0fe767f3"
    },
    {
        "BlockType": "WORD",
        "Confidence": 86.35144805908203,
        "Text": "können",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.033614352345466614,
                "Height": 0.005913445260375738,
                "Left": 0.815239429473877,
                "Top": 0.2798672318458557
            },
            "Polygon": [
                {
                    "X": 0.815239429473877,
                    "Y": 0.2798726558685303
                },
                {
                    "X": 0.848851203918457,
                    "Y": 0.2798672318458557
                },
                {
                    "X": 0.8488537669181824,
                    "Y": 0.2857753038406372
                },
                {
                    "X": 0.8152419328689575,
                    "Y": 0.285780668258667
                }
            ]
        },
        "Id": "c381ecbb-f5b8-4723-9d35-41f65d7618f7"
    },
    {
        "BlockType": "WORD",
        "Confidence": 82.47224426269531,
        "Text": "Art.-Nr.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.041317109018564224,
                "Height": 0.006982545834034681,
                "Left": 0.06985720247030258,
                "Top": 0.32878920435905457
            },
            "Polygon": [
                {
                    "X": 0.06985720247030258,
                    "Y": 0.32879552245140076
                },
                {
                    "X": 0.11117291450500488,
                    "Y": 0.32878920435905457
                },
                {
                    "X": 0.11117430776357651,
                    "Y": 0.3357654809951782
                },
                {
                    "X": 0.06985849887132645,
                    "Y": 0.33577173948287964
                }
            ]
        },
        "Id": "40bf0c35-bea2-4352-bbb2-801f653af198"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.3211669921875,
        "Text": "Bezeichnung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08065538853406906,
                "Height": 0.008890158496797085,
                "Left": 0.22919315099716187,
                "Top": 0.32854509353637695
            },
            "Polygon": [
                {
                    "X": 0.22919315099716187,
                    "Y": 0.32855740189552307
                },
                {
                    "X": 0.3098462224006653,
                    "Y": 0.32854509353637695
                },
                {
                    "X": 0.3098485469818115,
                    "Y": 0.33742305636405945
                },
                {
                    "X": 0.2291952520608902,
                    "Y": 0.337435245513916
                }
            ]
        },
        "Id": "59a7f206-b651-4f76-8692-ffc8da8103b9"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.08455657958984,
        "Text": "Menge",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04015796631574631,
                "Height": 0.008770711719989777,
                "Left": 0.5439122915267944,
                "Top": 0.32772302627563477
            },
            "Polygon": [
                {
                    "X": 0.5439122915267944,
                    "Y": 0.32772916555404663
                },
                {
                    "X": 0.5840672254562378,
                    "Y": 0.32772302627563477
                },
                {
                    "X": 0.5840702652931213,
                    "Y": 0.33648765087127686
                },
                {
                    "X": 0.5439152717590332,
                    "Y": 0.33649373054504395
                }
            ]
        },
        "Id": "928f589b-7088-4d4a-85a5-a81a034b4a3e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.79209899902344,
        "Text": "Preis",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.030615270137786865,
                "Height": 0.007223864551633596,
                "Left": 0.64076167345047,
                "Top": 0.3274260461330414
            },
            "Polygon": [
                {
                    "X": 0.64076167345047,
                    "Y": 0.32743072509765625
                },
                {
                    "X": 0.6713742017745972,
                    "Y": 0.3274260461330414
                },
                {
                    "X": 0.6713769435882568,
                    "Y": 0.33464527130126953
                },
                {
                    "X": 0.6407642960548401,
                    "Y": 0.334649920463562
                }
            ]
        },
        "Id": "6214c22d-ed88-4749-9482-effbb2004d32"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.13484191894531,
        "Text": "Gesamt",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0483258031308651,
                "Height": 0.007560946978628635,
                "Left": 0.8700188994407654,
                "Top": 0.3262917995452881
            },
            "Polygon": [
                {
                    "X": 0.8700188994407654,
                    "Y": 0.3262992203235626
                },
                {
                    "X": 0.9183412790298462,
                    "Y": 0.3262917995452881
                },
                {
                    "X": 0.9183447360992432,
                    "Y": 0.33384543657302856
                },
                {
                    "X": 0.8700222373008728,
                    "Y": 0.33385276794433594
                }
            ]
        },
        "Id": "6342d5c8-bff1-40eb-b8e4-2418c8a5e279"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.83045959472656,
        "Text": "Recurring",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.055235229432582855,
                "Height": 0.009295702911913395,
                "Left": 0.22930815815925598,
                "Top": 0.34261074662208557
            },
            "Polygon": [
                {
                    "X": 0.22930815815925598,
                    "Y": 0.34261903166770935
                },
                {
                    "X": 0.2845410406589508,
                    "Y": 0.34261074662208557
                },
                {
                    "X": 0.28454339504241943,
                    "Y": 0.3518982231616974
                },
                {
                    "X": 0.22931036353111267,
                    "Y": 0.3519064486026764
                }
            ]
        },
        "Id": "0a65fa72-9a84-4303-9fa1-08bb9ab47c67"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.6716079711914,
        "Text": "purchase",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.05269031599164009,
                "Height": 0.009205574169754982,
                "Left": 0.289251446723938,
                "Top": 0.3425939381122589
            },
            "Polygon": [
                {
                    "X": 0.289251446723938,
                    "Y": 0.34260186553001404
                },
                {
                    "X": 0.341939240694046,
                    "Y": 0.3425939381122589
                },
                {
                    "X": 0.3419417440891266,
                    "Y": 0.3517916798591614
                },
                {
                    "X": 0.28925377130508423,
                    "Y": 0.35179951786994934
                }
            ]
        },
        "Id": "55ee5ccf-32ff-4c05-8414-c6b2ab82eeff"
    },
    {
        "BlockType": "WORD",
        "Confidence": 93.00516510009766,
        "Text": "1",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.004152514971792698,
                "Height": 0.006548542063683271,
                "Left": 0.5783001780509949,
                "Top": 0.3425332009792328
            },
            "Polygon": [
                {
                    "X": 0.5783001780509949,
                    "Y": 0.34253382682800293
                },
                {
                    "X": 0.5824503898620605,
                    "Y": 0.3425332009792328
                },
                {
                    "X": 0.5824527144432068,
                    "Y": 0.3490811288356781
                },
                {
                    "X": 0.5783024430274963,
                    "Y": 0.34908172488212585
                }
            ]
        },
        "Id": "e5ccc4e9-885f-4bf7-992f-ac1be6b7b491"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.14772033691406,
        "Text": "5,99",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02474024146795273,
                "Height": 0.008255120366811752,
                "Left": 0.6468024253845215,
                "Top": 0.34178581833839417
            },
            "Polygon": [
                {
                    "X": 0.6468024253845215,
                    "Y": 0.34178951382637024
                },
                {
                    "X": 0.6715395450592041,
                    "Y": 0.34178581833839417
                },
                {
                    "X": 0.6715426445007324,
                    "Y": 0.35003724694252014
                },
                {
                    "X": 0.646805465221405,
                    "Y": 0.35004091262817383
                }
            ]
        },
        "Id": "6516d0f6-edbd-4212-a06e-3cc606c4be7c"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.71410369873047,
        "Text": "5,99",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024855125695466995,
                "Height": 0.007980681955814362,
                "Left": 0.8927947878837585,
                "Top": 0.34084591269493103
            },
            "Polygon": [
                {
                    "X": 0.8927947878837585,
                    "Y": 0.3408496677875519
                },
                {
                    "X": 0.9176463484764099,
                    "Y": 0.34084591269493103
                },
                {
                    "X": 0.9176499247550964,
                    "Y": 0.3488228917121887
                },
                {
                    "X": 0.8927983641624451,
                    "Y": 0.3488265872001648
                }
            ]
        },
        "Id": "09c728b0-8a9a-4798-84c2-2c74808c00a4"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.45387268066406,
        "Text": "Rechnungsbetrag",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10232065618038177,
                "Height": 0.009236535988748074,
                "Left": 0.7193862795829773,
                "Top": 0.3805978298187256
            },
            "Polygon": [
                {
                    "X": 0.7193862795829773,
                    "Y": 0.3806125223636627
                },
                {
                    "X": 0.8217030167579651,
                    "Y": 0.3805978298187256
                },
                {
                    "X": 0.8217068910598755,
                    "Y": 0.38981980085372925
                },
                {
                    "X": 0.7193898558616638,
                    "Y": 0.38983437418937683
                }
            ]
        },
        "Id": "da2bd4a8-dc5c-4247-bfdb-53425450b893"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.12330627441406,
        "Text": "5,99",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024571750313043594,
                "Height": 0.00801131408661604,
                "Left": 0.8951415419578552,
                "Top": 0.38036787509918213
            },
            "Polygon": [
                {
                    "X": 0.8951415419578552,
                    "Y": 0.38037142157554626
                },
                {
                    "X": 0.9197096824645996,
                    "Y": 0.38036787509918213
                },
                {
                    "X": 0.9197133183479309,
                    "Y": 0.3883756995201111
                },
                {
                    "X": 0.8951451182365417,
                    "Y": 0.38837918639183044
                }
            ]
        },
        "Id": "db5d24bf-ccaa-4e07-aa80-e6f2ffb6971b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 20.755334854125977,
        "Text": "01/10",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008500080555677414,
                "Height": 0.021091846749186516,
                "Left": 0.034855134785175323,
                "Top": 0.3863324224948883
            },
            "Polygon": [
                {
                    "X": 0.034855134785175323,
                    "Y": 0.3863336145877838
                },
                {
                    "X": 0.04335145652294159,
                    "Y": 0.3863324224948883
                },
                {
                    "X": 0.04335521534085274,
                    "Y": 0.40742307901382446
                },
                {
                    "X": 0.034858837723731995,
                    "Y": 0.4074242413043976
                }
            ]
        },
        "Id": "e8b92bb0-2897-4077-92e8-1b9aa645edb6"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.8758773803711,
        "Text": "Getätigte",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.052379753440618515,
                "Height": 0.00943004246801138,
                "Left": 0.7185996770858765,
                "Top": 0.40220117568969727
            },
            "Polygon": [
                {
                    "X": 0.7185996770858765,
                    "Y": 0.40220850706100464
                },
                {
                    "X": 0.7709755897521973,
                    "Y": 0.40220117568969727
                },
                {
                    "X": 0.7709794640541077,
                    "Y": 0.4116239547729492
                },
                {
                    "X": 0.7186033725738525,
                    "Y": 0.41163119673728943
                }
            ]
        },
        "Id": "ec9dbf4c-b685-43d8-818f-3310aab0660e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.20475769042969,
        "Text": "Zahlung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04651603847742081,
                "Height": 0.009478260762989521,
                "Left": 0.7750268578529358,
                "Top": 0.4021807014942169
            },
            "Polygon": [
                {
                    "X": 0.7750268578529358,
                    "Y": 0.4021872282028198
                },
                {
                    "X": 0.8215388655662537,
                    "Y": 0.4021807014942169
                },
                {
                    "X": 0.8215428590774536,
                    "Y": 0.411652535200119
                },
                {
                    "X": 0.7750306725502014,
                    "Y": 0.41165897250175476
                }
            ]
        },
        "Id": "52d38553-cbe9-4561-a186-97477d5263df"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.34017181396484,
        "Text": "-5,99",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.028378380462527275,
                "Height": 0.008160642348229885,
                "Left": 0.8914907574653625,
                "Top": 0.4020048975944519
            },
            "Polygon": [
                {
                    "X": 0.8914907574653625,
                    "Y": 0.40200889110565186
                },
                {
                    "X": 0.9198654294013977,
                    "Y": 0.4020048975944519
                },
                {
                    "X": 0.9198691248893738,
                    "Y": 0.4101616144180298
                },
                {
                    "X": 0.8914943933486938,
                    "Y": 0.41016554832458496
                }
            ]
        },
        "Id": "5107e227-7ad4-4a1c-8679-2188bf1574df"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.9389419555664,
        "Text": "Getätigte",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.052188947796821594,
                "Height": 0.009120902046561241,
                "Left": 0.7187776565551758,
                "Top": 0.414775013923645
            },
            "Polygon": [
                {
                    "X": 0.7187776565551758,
                    "Y": 0.41478219628334045
                },
                {
                    "X": 0.7709628939628601,
                    "Y": 0.414775013923645
                },
                {
                    "X": 0.770966649055481,
                    "Y": 0.42388880252838135
                },
                {
                    "X": 0.7187812328338623,
                    "Y": 0.4238958954811096
                }
            ]
        },
        "Id": "98dd9cbc-48ca-4e21-aa1c-653c42970856"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.89822387695312,
        "Text": "Zahlung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04661170765757561,
                "Height": 0.009142762050032616,
                "Left": 0.7750321626663208,
                "Top": 0.4147658050060272
            },
            "Polygon": [
                {
                    "X": 0.7750321626663208,
                    "Y": 0.4147722125053406
                },
                {
                    "X": 0.8216400146484375,
                    "Y": 0.4147658050060272
                },
                {
                    "X": 0.8216438889503479,
                    "Y": 0.4239022135734558
                },
                {
                    "X": 0.7750359177589417,
                    "Y": 0.4239085614681244
                }
            ]
        },
        "Id": "55a306b6-257f-4b93-b79d-58e50b25a28f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.75942993164062,
        "Text": "5,99",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024230685085058212,
                "Height": 0.007731179241091013,
                "Left": 0.8955966830253601,
                "Top": 0.4147080183029175
            },
            "Polygon": [
                {
                    "X": 0.8955966830253601,
                    "Y": 0.4147113859653473
                },
                {
                    "X": 0.9198238253593445,
                    "Y": 0.4147080183029175
                },
                {
                    "X": 0.9198273420333862,
                    "Y": 0.4224359095096588
                },
                {
                    "X": 0.8956001400947571,
                    "Y": 0.42243921756744385
                }
            ]
        },
        "Id": "4e99bc76-f663-4032-93c9-d6cd519b1707"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.2585678100586,
        "Text": "Verzugskosten",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08606921136379242,
                "Height": 0.009036344476044178,
                "Left": 0.7354251146316528,
                "Top": 0.42690059542655945
            },
            "Polygon": [
                {
                    "X": 0.7354251146316528,
                    "Y": 0.4269123077392578
                },
                {
                    "X": 0.821490466594696,
                    "Y": 0.42690059542655945
                },
                {
                    "X": 0.8214942812919617,
                    "Y": 0.4359253942966461
                },
                {
                    "X": 0.7354286909103394,
                    "Y": 0.43593695759773254
                }
            ]
        },
        "Id": "219e1a25-cbf1-40bd-bbd5-b3988c56ab6c"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.14910888671875,
        "Text": "1,85",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.023698434233665466,
                "Height": 0.008145653642714024,
                "Left": 0.8967273831367493,
                "Top": 0.4265700578689575
            },
            "Polygon": [
                {
                    "X": 0.8967273831367493,
                    "Y": 0.4265732765197754
                },
                {
                    "X": 0.9204221367835999,
                    "Y": 0.4265700578689575
                },
                {
                    "X": 0.9204258322715759,
                    "Y": 0.4347125291824341
                },
                {
                    "X": 0.8967310190200806,
                    "Y": 0.43471571803092957
                }
            ]
        },
        "Id": "24d6b7aa-a06f-44c3-abb5-c9e838bf5372"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.20161437988281,
        "Text": "Verzugskosten",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08609896153211594,
                "Height": 0.009293550625443459,
                "Left": 0.7354576587677002,
                "Top": 0.43894174695014954
            },
            "Polygon": [
                {
                    "X": 0.7354576587677002,
                    "Y": 0.4389532804489136
                },
                {
                    "X": 0.8215526938438416,
                    "Y": 0.43894174695014954
                },
                {
                    "X": 0.8215566277503967,
                    "Y": 0.44822391867637634
                },
                {
                    "X": 0.7354613542556763,
                    "Y": 0.44823530316352844
                }
            ]
        },
        "Id": "c1529c6f-eac1-4703-8e63-fb2badaf4b40"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.42920684814453,
        "Text": "1,85",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.023731566965579987,
                "Height": 0.0081254281103611,
                "Left": 0.8965561985969543,
                "Top": 0.43894723057746887
            },
            "Polygon": [
                {
                    "X": 0.8965561985969543,
                    "Y": 0.43895041942596436
                },
                {
                    "X": 0.9202840328216553,
                    "Y": 0.43894723057746887
                },
                {
                    "X": 0.9202877283096313,
                    "Y": 0.44706952571868896
                },
                {
                    "X": 0.8965598344802856,
                    "Y": 0.4470726549625397
                }
            ]
        },
        "Id": "eda452a8-6d1c-4658-b6cd-d47ea1769a91"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.53936004638672,
        "Text": "Verzugskosten",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08628673106431961,
                "Height": 0.009258203208446503,
                "Left": 0.7353354096412659,
                "Top": 0.4513155519962311
            },
            "Polygon": [
                {
                    "X": 0.7353354096412659,
                    "Y": 0.4513269066810608
                },
                {
                    "X": 0.8216181993484497,
                    "Y": 0.4513155519962311
                },
                {
                    "X": 0.8216221332550049,
                    "Y": 0.460562527179718
                },
                {
                    "X": 0.7353390455245972,
                    "Y": 0.4605737626552582
                }
            ]
        },
        "Id": "8570c23e-14ca-466a-8774-5cde48f55eee"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.96286010742188,
        "Text": "1,85",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.023800112307071686,
                "Height": 0.008242525160312653,
                "Left": 0.8966653347015381,
                "Top": 0.4511588215827942
            },
            "Polygon": [
                {
                    "X": 0.8966653347015381,
                    "Y": 0.4511619508266449
                },
                {
                    "X": 0.9204616546630859,
                    "Y": 0.4511588215827942
                },
                {
                    "X": 0.9204654097557068,
                    "Y": 0.4593982398509979
                },
                {
                    "X": 0.8966689705848694,
                    "Y": 0.45940133929252625
                }
            ]
        },
        "Id": "76f5db2e-f0cc-4f47-972f-aa0bb6062802"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.80590057373047,
        "Text": "Gesamtsumme",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.1053435355424881,
                "Height": 0.00820288248360157,
                "Left": 0.7140707969665527,
                "Top": 0.47764360904693604
            },
            "Polygon": [
                {
                    "X": 0.7140707969665527,
                    "Y": 0.4776570200920105
                },
                {
                    "X": 0.8194108605384827,
                    "Y": 0.47764360904693604
                },
                {
                    "X": 0.8194143176078796,
                    "Y": 0.4858332574367523
                },
                {
                    "X": 0.7140739560127258,
                    "Y": 0.48584648966789246
                }
            ]
        },
        "Id": "e7bcfa3a-ade7-4e91-8ba3-343c27983b53"
    },
    {
        "BlockType": "WORD",
        "Confidence": 93.77875518798828,
        "Text": "11,54",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03527909144759178,
                "Height": 0.009423071518540382,
                "Left": 0.8825667500495911,
                "Top": 0.4771885573863983
            },
            "Polygon": [
                {
                    "X": 0.8825667500495911,
                    "Y": 0.47719302773475647
                },
                {
                    "X": 0.9178416132926941,
                    "Y": 0.4771885573863983
                },
                {
                    "X": 0.9178458452224731,
                    "Y": 0.4866071939468384
                },
                {
                    "X": 0.8825709223747253,
                    "Y": 0.48661163449287415
                }
            ]
        },
        "Id": "e6699393-9a70-414d-9420-0e9fd33d4c64"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.3820571899414,
        "Text": "Wenn",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02910558134317398,
                "Height": 0.006630306132137775,
                "Left": 0.06328944861888885,
                "Top": 0.4949367642402649
            },
            "Polygon": [
                {
                    "X": 0.06328944861888885,
                    "Y": 0.4949403703212738
                },
                {
                    "X": 0.09239374846220016,
                    "Y": 0.4949367642402649
                },
                {
                    "X": 0.09239502996206284,
                    "Y": 0.5015634894371033
                },
                {
                    "X": 0.06329067051410675,
                    "Y": 0.5015670657157898
                }
            ]
        },
        "Id": "6cb25ff7-3c71-4c0c-9f42-7b646bddc7c1"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.39273834228516,
        "Text": "du",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.012170339934527874,
                "Height": 0.006791949272155762,
                "Left": 0.09615666419267654,
                "Top": 0.49503716826438904
            },
            "Polygon": [
                {
                    "X": 0.09615666419267654,
                    "Y": 0.4950386583805084
                },
                {
                    "X": 0.10832566022872925,
                    "Y": 0.49503716826438904
                },
                {
                    "X": 0.10832700878381729,
                    "Y": 0.501827597618103
                },
                {
                    "X": 0.0961579903960228,
                    "Y": 0.5018290877342224
                }
            ]
        },
        "Id": "465acfd3-3949-4a13-b290-c4afbef0af19"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.42513275146484,
        "Text": "Fragen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03484627604484558,
                "Height": 0.007478147279471159,
                "Left": 0.11245927959680557,
                "Top": 0.4949178695678711
            },
            "Polygon": [
                {
                    "X": 0.11245927959680557,
                    "Y": 0.4949221909046173
                },
                {
                    "X": 0.1473039835691452,
                    "Y": 0.4949178695678711
                },
                {
                    "X": 0.14730554819107056,
                    "Y": 0.5023917555809021
                },
                {
                    "X": 0.11246076971292496,
                    "Y": 0.5023959875106812
                }
            ]
        },
        "Id": "864b9de0-baad-4e51-9a5b-7f04fdf5dad3"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.6338119506836,
        "Text": "zu",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01174841821193695,
                "Height": 0.00531845772638917,
                "Left": 0.15146492421627045,
                "Top": 0.49625471234321594
            },
            "Polygon": [
                {
                    "X": 0.15146492421627045,
                    "Y": 0.49625617265701294
                },
                {
                    "X": 0.16321219503879547,
                    "Y": 0.49625471234321594
                },
                {
                    "X": 0.1632133424282074,
                    "Y": 0.5015717148780823
                },
                {
                    "X": 0.15146605670452118,
                    "Y": 0.5015732049942017
                }
            ]
        },
        "Id": "610f3b1d-3d7b-4f19-a305-a5aeb10eae3c"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.56680297851562,
        "Text": "deiner",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.031934358179569244,
                "Height": 0.007221996784210205,
                "Left": 0.16688527166843414,
                "Top": 0.49480971693992615
            },
            "Polygon": [
                {
                    "X": 0.16688527166843414,
                    "Y": 0.4948136806488037
                },
                {
                    "X": 0.19881799817085266,
                    "Y": 0.49480971693992615
                },
                {
                    "X": 0.19881963729858398,
                    "Y": 0.5020277500152588
                },
                {
                    "X": 0.1668868511915207,
                    "Y": 0.502031683921814
                }
            ]
        },
        "Id": "bce41981-6d74-4537-ad3c-dfb93c4ef727"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.88406372070312,
        "Text": "Bestellung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.05276041477918625,
                "Height": 0.008007356896996498,
                "Left": 0.20194412767887115,
                "Top": 0.49466046690940857
            },
            "Polygon": [
                {
                    "X": 0.20194412767887115,
                    "Y": 0.49466702342033386
                },
                {
                    "X": 0.2547025680541992,
                    "Y": 0.49466046690940857
                },
                {
                    "X": 0.2547045350074768,
                    "Y": 0.5026613473892212
                },
                {
                    "X": 0.2019459456205368,
                    "Y": 0.5026678442955017
                }
            ]
        },
        "Id": "efd83edf-97f6-4097-8e19-a669d2dd15a2"
    },
    {
        "BlockType": "WORD",
        "Confidence": 85.39088439941406,
        "Text": "hast,",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02327038161456585,
                "Height": 0.007676863111555576,
                "Left": 0.2584172487258911,
                "Top": 0.49466222524642944
            },
            "Polygon": [
                {
                    "X": 0.2584172487258911,
                    "Y": 0.49466511607170105
                },
                {
                    "X": 0.2816856801509857,
                    "Y": 0.49466222524642944
                },
                {
                    "X": 0.2816876173019409,
                    "Y": 0.5023362636566162
                },
                {
                    "X": 0.25841912627220154,
                    "Y": 0.5023391246795654
                }
            ]
        },
        "Id": "6ebeb30a-8489-4761-a135-e6da1eeceeb8"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.37474060058594,
        "Text": "kontaktiere",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.055401671677827835,
                "Height": 0.0068153031170368195,
                "Left": 0.28623998165130615,
                "Top": 0.49466627836227417
            },
            "Polygon": [
                {
                    "X": 0.28623998165130615,
                    "Y": 0.4946731626987457
                },
                {
                    "X": 0.34163978695869446,
                    "Y": 0.49466627836227417
                },
                {
                    "X": 0.3416416347026825,
                    "Y": 0.5014747381210327
                },
                {
                    "X": 0.28624171018600464,
                    "Y": 0.5014815926551819
                }
            ]
        },
        "Id": "09fb3828-c334-4e36-8651-6cb69b687321"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.37059020996094,
        "Text": "bitte",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02072553150355816,
                "Height": 0.006746913306415081,
                "Left": 0.34553971886634827,
                "Top": 0.49458158016204834
            },
            "Polygon": [
                {
                    "X": 0.34553971886634827,
                    "Y": 0.4945841431617737
                },
                {
                    "X": 0.36626335978507996,
                    "Y": 0.49458158016204834
                },
                {
                    "X": 0.36626526713371277,
                    "Y": 0.5013259053230286
                },
                {
                    "X": 0.3455415666103363,
                    "Y": 0.5013284683227539
                }
            ]
        },
        "Id": "7baeb9a4-2774-4863-a8f3-953abcf9d247"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.62933349609375,
        "Text": "den",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.018071668222546577,
                "Height": 0.006757686380296946,
                "Left": 0.3701104521751404,
                "Top": 0.4945610761642456
            },
            "Polygon": [
                {
                    "X": 0.3701104521751404,
                    "Y": 0.49456334114074707
                },
                {
                    "X": 0.3881801962852478,
                    "Y": 0.4945610761642456
                },
                {
                    "X": 0.388182133436203,
                    "Y": 0.5013165473937988
                },
                {
                    "X": 0.3701123595237732,
                    "Y": 0.5013187527656555
                }
            ]
        },
        "Id": "ce4734be-6c15-4074-8307-8bd8c82c9de6"
    },
    {
        "BlockType": "WORD",
        "Confidence": 65.3211441040039,
        "Text": "Händler.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04156174510717392,
                "Height": 0.007618976756930351,
                "Left": 0.39283642172813416,
                "Top": 0.49435436725616455
            },
            "Polygon": [
                {
                    "X": 0.39283642172813416,
                    "Y": 0.49435955286026
                },
                {
                    "X": 0.4343958795070648,
                    "Y": 0.49435436725616455
                },
                {
                    "X": 0.43439817428588867,
                    "Y": 0.501968264579773
                },
                {
                    "X": 0.39283862709999084,
                    "Y": 0.5019733309745789
                }
            ]
        },
        "Id": "23f78938-f1ae-4ce8-9b5e-bfd5b697c2ca"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.91595458984375,
        "Text": "Bei",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01565273478627205,
                "Height": 0.006720688194036484,
                "Left": 0.4388258755207062,
                "Top": 0.49440839886665344
            },
            "Polygon": [
                {
                    "X": 0.4388258755207062,
                    "Y": 0.49441033601760864
                },
                {
                    "X": 0.454476535320282,
                    "Y": 0.49440839886665344
                },
                {
                    "X": 0.45447859168052673,
                    "Y": 0.5011271834373474
                },
                {
                    "X": 0.43882790207862854,
                    "Y": 0.5011290907859802
                }
            ]
        },
        "Id": "cbcbb3bf-1f7f-4e0e-a1a3-38c8f5bdf1ab"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.17296600341797,
        "Text": "Fragen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.035458359867334366,
                "Height": 0.00807252898812294,
                "Left": 0.45844408869743347,
                "Top": 0.4942282438278198
            },
            "Polygon": [
                {
                    "X": 0.45844408869743347,
                    "Y": 0.4942326545715332
                },
                {
                    "X": 0.4938998520374298,
                    "Y": 0.4942282438278198
                },
                {
                    "X": 0.49390244483947754,
                    "Y": 0.5022963881492615
                },
                {
                    "X": 0.45844656229019165,
                    "Y": 0.5023007392883301
                }
            ]
        },
        "Id": "ad5431af-67f4-45e4-9e92-898eec4821b9"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.22662353515625,
        "Text": "zur",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0161748044192791,
                "Height": 0.005158630199730396,
                "Left": 0.49754875898361206,
                "Top": 0.4957333207130432
            },
            "Polygon": [
                {
                    "X": 0.49754875898361206,
                    "Y": 0.4957353174686432
                },
                {
                    "X": 0.5137218832969666,
                    "Y": 0.4957333207130432
                },
                {
                    "X": 0.5137235522270203,
                    "Y": 0.5008899569511414
                },
                {
                    "X": 0.4975503981113434,
                    "Y": 0.500891923904419
                }
            ]
        },
        "Id": "5eb093bf-d835-4c80-8c26-37f604927e09"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.30030822753906,
        "Text": "Bezahlung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.052480388432741165,
                "Height": 0.008117042481899261,
                "Left": 0.5172543525695801,
                "Top": 0.49401986598968506
            },
            "Polygon": [
                {
                    "X": 0.5172543525695801,
                    "Y": 0.49402639269828796
                },
                {
                    "X": 0.5697319507598877,
                    "Y": 0.49401986598968506
                },
                {
                    "X": 0.5697347521781921,
                    "Y": 0.5021304488182068
                },
                {
                    "X": 0.5172569751739502,
                    "Y": 0.5021368861198425
                }
            ]
        },
        "Id": "4ea6df63-d5fb-4c3a-8516-198e0391084b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.01549530029297,
        "Text": "logge",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.027006253600120544,
                "Height": 0.008086996152997017,
                "Left": 0.5740231275558472,
                "Top": 0.4939706325531006
            },
            "Polygon": [
                {
                    "X": 0.5740231275558472,
                    "Y": 0.4939740002155304
                },
                {
                    "X": 0.6010265350341797,
                    "Y": 0.4939706325531006
                },
                {
                    "X": 0.6010293960571289,
                    "Y": 0.5020543336868286
                },
                {
                    "X": 0.5740259289741516,
                    "Y": 0.5020576119422913
                }
            ]
        },
        "Id": "bb697781-7e09-4fcc-b0f6-112f1cbf6d69"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.63735961914062,
        "Text": "dich",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.020063599571585655,
                "Height": 0.006788399536162615,
                "Left": 0.6048409938812256,
                "Top": 0.49376025795936584
            },
            "Polygon": [
                {
                    "X": 0.6048409938812256,
                    "Y": 0.4937627613544464
                },
                {
                    "X": 0.6249021291732788,
                    "Y": 0.49376025795936584
                },
                {
                    "X": 0.6249046325683594,
                    "Y": 0.5005462169647217
                },
                {
                    "X": 0.6048434376716614,
                    "Y": 0.5005486607551575
                }
            ]
        },
        "Id": "f31eed12-9c92-4102-8ebf-e047c1d8eefb"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.21859741210938,
        "Text": "auf",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.015740519389510155,
                "Height": 0.006661674473434687,
                "Left": 0.6288377642631531,
                "Top": 0.49373650550842285
            },
            "Polygon": [
                {
                    "X": 0.6288377642631531,
                    "Y": 0.49373847246170044
                },
                {
                    "X": 0.644575834274292,
                    "Y": 0.49373650550842285
                },
                {
                    "X": 0.6445782780647278,
                    "Y": 0.5003962516784668
                },
                {
                    "X": 0.6288401484489441,
                    "Y": 0.5003981590270996
                }
            ]
        },
        "Id": "09da6182-90d4-47bf-923a-094215f441c1"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.41914367675781,
        "Text": "www.klarna.de",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07463634014129639,
                "Height": 0.006989320740103722,
                "Left": 0.6477363109588623,
                "Top": 0.49334070086479187
            },
            "Polygon": [
                {
                    "X": 0.6477363109588623,
                    "Y": 0.49334999918937683
                },
                {
                    "X": 0.722369909286499,
                    "Y": 0.49334070086479187
                },
                {
                    "X": 0.7223726511001587,
                    "Y": 0.5003207921981812
                },
                {
                    "X": 0.6477388739585876,
                    "Y": 0.5003300309181213
                }
            ]
        },
        "Id": "df849451-e989-4a35-b0e5-0df988e31fc8"
    },
    {
        "BlockType": "WORD",
        "Confidence": 77.14311981201172,
        "Text": "ein.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.017374100163578987,
                "Height": 0.006696938071399927,
                "Left": 0.7264112234115601,
                "Top": 0.4933640658855438
            },
            "Polygon": [
                {
                    "X": 0.7264112234115601,
                    "Y": 0.49336621165275574
                },
                {
                    "X": 0.743782639503479,
                    "Y": 0.4933640658855438
                },
                {
                    "X": 0.7437853217124939,
                    "Y": 0.5000588297843933
                },
                {
                    "X": 0.7264138460159302,
                    "Y": 0.5000609755516052
                }
            ]
        },
        "Id": "8eb0bf3c-e32d-450f-b26e-9d7524795158"
    },
    {
        "BlockType": "WORD",
        "Confidence": 93.76718139648438,
        "Text": "Dort",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02116983011364937,
                "Height": 0.006311677396297455,
                "Left": 0.7479735016822815,
                "Top": 0.4932263195514679
            },
            "Polygon": [
                {
                    "X": 0.7479735016822815,
                    "Y": 0.493228942155838
                },
                {
                    "X": 0.7691407203674316,
                    "Y": 0.4932263195514679
                },
                {
                    "X": 0.769143283367157,
                    "Y": 0.49953538179397583
                },
                {
                    "X": 0.7479760050773621,
                    "Y": 0.49953800439834595
                }
            ]
        },
        "Id": "2e4efe04-2f9f-41ed-89d9-0420b542e763"
    },
    {
        "BlockType": "WORD",
        "Confidence": 94.91354370117188,
        "Text": "kannst",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03341926261782646,
                "Height": 0.006622976157814264,
                "Left": 0.7726861834526062,
                "Top": 0.49318546056747437
            },
            "Polygon": [
                {
                    "X": 0.7726861834526062,
                    "Y": 0.49318963289260864
                },
                {
                    "X": 0.8061026930809021,
                    "Y": 0.49318546056747437
                },
                {
                    "X": 0.8061054348945618,
                    "Y": 0.4998043179512024
                },
                {
                    "X": 0.7726888656616211,
                    "Y": 0.4998084306716919
                }
            ]
        },
        "Id": "7ca0cbbe-69b6-45dd-b41b-f4ac6bc04999"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.59691619873047,
        "Text": "du",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.012074856087565422,
                "Height": 0.006376019213348627,
                "Left": 0.8096160888671875,
                "Top": 0.49314084649086
            },
            "Polygon": [
                {
                    "X": 0.8096160888671875,
                    "Y": 0.49314233660697937
                },
                {
                    "X": 0.8216882348060608,
                    "Y": 0.49314084649086
                },
                {
                    "X": 0.8216909170150757,
                    "Y": 0.4995153546333313
                },
                {
                    "X": 0.8096187710762024,
                    "Y": 0.4995168447494507
                }
            ]
        },
        "Id": "7c7bdcf9-84ee-4cad-be1b-05f1e6416755"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.14915466308594,
        "Text": "Informationen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06890168786048889,
                "Height": 0.006444971077144146,
                "Left": 0.825868546962738,
                "Top": 0.4929734766483307
            },
            "Polygon": [
                {
                    "X": 0.825868546962738,
                    "Y": 0.49298205971717834
                },
                {
                    "X": 0.8947673439979553,
                    "Y": 0.4929734766483307
                },
                {
                    "X": 0.8947702050209045,
                    "Y": 0.499409943819046
                },
                {
                    "X": 0.8258712887763977,
                    "Y": 0.4994184672832489
                }
            ]
        },
        "Id": "af09f509-6175-4d8c-9c25-2cc67fadc52f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.55813598632812,
        "Text": "zu",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.011712471954524517,
                "Height": 0.005058538168668747,
                "Left": 0.8986469507217407,
                "Top": 0.4941462576389313
            },
            "Polygon": [
                {
                    "X": 0.8986469507217407,
                    "Y": 0.49414771795272827
                },
                {
                    "X": 0.9103571176528931,
                    "Y": 0.4941462576389313
                },
                {
                    "X": 0.9103594422340393,
                    "Y": 0.49920332431793213
                },
                {
                    "X": 0.8986492156982422,
                    "Y": 0.4992047846317291
                }
            ]
        },
        "Id": "656ba3f3-78c4-4463-bf07-d2c500c19c95"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.1266860961914,
        "Text": "deinen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03362454101443291,
                "Height": 0.006708164699375629,
                "Left": 0.06324005872011185,
                "Top": 0.5032275915145874
            },
            "Polygon": [
                {
                    "X": 0.06324005872011185,
                    "Y": 0.5032317638397217
                },
                {
                    "X": 0.09686329215765,
                    "Y": 0.5032275915145874
                },
                {
                    "X": 0.09686459600925446,
                    "Y": 0.5099316835403442
                },
                {
                    "X": 0.06324129551649094,
                    "Y": 0.5099357962608337
                }
            ]
        },
        "Id": "b4c2ea40-5d9e-42e5-b117-c8de7f7cb6fb"
    },
    {
        "BlockType": "WORD",
        "Confidence": 76.00381469726562,
        "Text": "Einkäufen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.049714528024196625,
                "Height": 0.006769578438252211,
                "Left": 0.10099092870950699,
                "Top": 0.5031062364578247
            },
            "Polygon": [
                {
                    "X": 0.10099092870950699,
                    "Y": 0.5031123161315918
                },
                {
                    "X": 0.150704026222229,
                    "Y": 0.5031062364578247
                },
                {
                    "X": 0.1507054567337036,
                    "Y": 0.5098697543144226
                },
                {
                    "X": 0.10099225491285324,
                    "Y": 0.5098758339881897
                }
            ]
        },
        "Id": "1ad59f7a-9de8-4d3a-a4b0-115f8c59e895"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.53633880615234,
        "Text": "mit",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.015445588156580925,
                "Height": 0.006370254792273045,
                "Left": 0.15452361106872559,
                "Top": 0.5034346580505371
            },
            "Polygon": [
                {
                    "X": 0.15452361106872559,
                    "Y": 0.5034365057945251
                },
                {
                    "X": 0.16996781527996063,
                    "Y": 0.5034346580505371
                },
                {
                    "X": 0.16996920108795166,
                    "Y": 0.5098029971122742
                },
                {
                    "X": 0.15452496707439423,
                    "Y": 0.509804904460907
                }
            ]
        },
        "Id": "51bc1a7a-434e-4c05-8275-23fcb65024a9"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.75460815429688,
        "Text": "Klarna",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03234868124127388,
                "Height": 0.006776565685868263,
                "Left": 0.17325277626514435,
                "Top": 0.5030938386917114
            },
            "Polygon": [
                {
                    "X": 0.17325277626514435,
                    "Y": 0.5030978322029114
                },
                {
                    "X": 0.20559990406036377,
                    "Y": 0.5030938386917114
                },
                {
                    "X": 0.20560145378112793,
                    "Y": 0.50986647605896
                },
                {
                    "X": 0.17325425148010254,
                    "Y": 0.5098704099655151
                }
            ]
        },
        "Id": "c7409e0e-6924-4803-9abb-62c4ac5dd8fa"
    },
    {
        "BlockType": "WORD",
        "Confidence": 88.4433822631836,
        "Text": "einsehen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04652021825313568,
                "Height": 0.006882877089083195,
                "Left": 0.2092714160680771,
                "Top": 0.5029336810112
            },
            "Polygon": [
                {
                    "X": 0.2092714160680771,
                    "Y": 0.5029394030570984
                },
                {
                    "X": 0.25578993558883667,
                    "Y": 0.5029336810112
                },
                {
                    "X": 0.25579163432121277,
                    "Y": 0.5098109245300293
                },
                {
                    "X": 0.20927299559116364,
                    "Y": 0.509816586971283
                }
            ]
        },
        "Id": "6fc28b87-d80f-415c-bd2b-9ab761992ec6"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.31413269042969,
        "Text": "und",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.018429072573781013,
                "Height": 0.006476517766714096,
                "Left": 0.2592344284057617,
                "Top": 0.5032600164413452
            },
            "Polygon": [
                {
                    "X": 0.2592344284057617,
                    "Y": 0.5032622814178467
                },
                {
                    "X": 0.27766185998916626,
                    "Y": 0.5032600164413452
                },
                {
                    "X": 0.2776634991168976,
                    "Y": 0.5097342729568481
                },
                {
                    "X": 0.25923600792884827,
                    "Y": 0.5097365379333496
                }
            ]
        },
        "Id": "71d6f46c-1395-4512-ae30-6a803cfae8f4"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.31143188476562,
        "Text": "mit",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.015455138869583607,
                "Height": 0.006116201169788837,
                "Left": 0.2812783420085907,
                "Top": 0.5035000443458557
            },
            "Polygon": [
                {
                    "X": 0.2812783420085907,
                    "Y": 0.5035019516944885
                },
                {
                    "X": 0.2967318892478943,
                    "Y": 0.5035000443458557
                },
                {
                    "X": 0.29673346877098083,
                    "Y": 0.5096143484115601
                },
                {
                    "X": 0.28127989172935486,
                    "Y": 0.5096162557601929
                }
            ]
        },
        "Id": "30252b00-f794-4456-9d80-8d1e67d7f7c3"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.64251708984375,
        "Text": "unserem",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0434972308576107,
                "Height": 0.005281124264001846,
                "Left": 0.30021393299102783,
                "Top": 0.5042755007743835
            },
            "Polygon": [
                {
                    "X": 0.30021393299102783,
                    "Y": 0.5042808651924133
                },
                {
                    "X": 0.3437097370624542,
                    "Y": 0.5042755007743835
                },
                {
                    "X": 0.34371116757392883,
                    "Y": 0.5095513463020325
                },
                {
                    "X": 0.30021530389785767,
                    "Y": 0.5095566511154175
                }
            ]
        },
        "Id": "042f3046-966c-418c-bc12-460ef4532a0d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.27421569824219,
        "Text": "Kundenservice",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07503596693277359,
                "Height": 0.006654811557382345,
                "Left": 0.34772512316703796,
                "Top": 0.5027500987052917
            },
            "Polygon": [
                {
                    "X": 0.34772512316703796,
                    "Y": 0.5027592778205872
                },
                {
                    "X": 0.42275911569595337,
                    "Y": 0.5027500987052917
                },
                {
                    "X": 0.42276111245155334,
                    "Y": 0.5093957781791687
                },
                {
                    "X": 0.347726970911026,
                    "Y": 0.5094048976898193
                }
            ]
        },
        "Id": "ba519680-f7c7-4e24-adce-0ce48510f5ad"
    },
    {
        "BlockType": "WORD",
        "Confidence": 53.1620979309082,
        "Text": "chatten.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03953086957335472,
                "Height": 0.006710822228342295,
                "Left": 0.4261138141155243,
                "Top": 0.5026512742042542
            },
            "Polygon": [
                {
                    "X": 0.4261138141155243,
                    "Y": 0.5026561617851257
                },
                {
                    "X": 0.4656426012516022,
                    "Y": 0.5026512742042542
                },
                {
                    "X": 0.4656446874141693,
                    "Y": 0.5093573331832886
                },
                {
                    "X": 0.42611584067344666,
                    "Y": 0.5093621015548706
                }
            ]
        },
        "Id": "1413a492-62d0-48bc-b70c-a5245c4c5218"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.21471405029297,
        "Text": "Im",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009523008018732071,
                "Height": 0.00567367859184742,
                "Left": 0.06379855424165726,
                "Top": 0.578579843044281
            },
            "Polygon": [
                {
                    "X": 0.06379855424165726,
                    "Y": 0.5785808563232422
                },
                {
                    "X": 0.07332049310207367,
                    "Y": 0.578579843044281
                },
                {
                    "X": 0.07332155853509903,
                    "Y": 0.5842524766921997
                },
                {
                    "X": 0.06379959732294083,
                    "Y": 0.5842534899711609
                }
            ]
        },
        "Id": "7b06e228-37d2-4b65-8bb4-339c9af2afbd"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.32670593261719,
        "Text": "Falle",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.020216243341565132,
                "Height": 0.005785144399851561,
                "Left": 0.07735101133584976,
                "Top": 0.5783912539482117
            },
            "Polygon": [
                {
                    "X": 0.07735101133584976,
                    "Y": 0.5783934593200684
                },
                {
                    "X": 0.09756612032651901,
                    "Y": 0.5783912539482117
                },
                {
                    "X": 0.09756725281476974,
                    "Y": 0.5841742157936096
                },
                {
                    "X": 0.07735209912061691,
                    "Y": 0.5841764211654663
                }
            ]
        },
        "Id": "772fa2ac-2e6e-429e-a829-90415686d311"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.28729248046875,
        "Text": "nicht",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.020389767363667488,
                "Height": 0.005757656414061785,
                "Left": 0.1008574515581131,
                "Top": 0.5786629915237427
            },
            "Polygon": [
                {
                    "X": 0.1008574515581131,
                    "Y": 0.5786652565002441
                },
                {
                    "X": 0.12124605476856232,
                    "Y": 0.5786629915237427
                },
                {
                    "X": 0.12124721705913544,
                    "Y": 0.5844184756278992
                },
                {
                    "X": 0.10085858404636383,
                    "Y": 0.5844206809997559
                }
            ]
        },
        "Id": "9bfe93c8-a7da-4b62-abe7-cf1d888032ca"
    },
    {
        "BlockType": "WORD",
        "Confidence": 78.61250305175781,
        "Text": "fristgerechter",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.05676725134253502,
                "Height": 0.0073420340195298195,
                "Left": 0.12456677109003067,
                "Top": 0.5783873796463013
            },
            "Polygon": [
                {
                    "X": 0.12456677109003067,
                    "Y": 0.5783936381340027
                },
                {
                    "X": 0.18133239448070526,
                    "Y": 0.5783873796463013
                },
                {
                    "X": 0.1813340187072754,
                    "Y": 0.5857232213020325
                },
                {
                    "X": 0.12456826120615005,
                    "Y": 0.5857294201850891
                }
            ]
        },
        "Id": "dd6a01b5-56ec-4395-8424-10d39c38a49b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.1541748046875,
        "Text": "Zahlung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03493383526802063,
                "Height": 0.007096164394170046,
                "Left": 0.18428568542003632,
                "Top": 0.5783321857452393
            },
            "Polygon": [
                {
                    "X": 0.18428568542003632,
                    "Y": 0.5783360004425049
                },
                {
                    "X": 0.21921786665916443,
                    "Y": 0.5783321857452393
                },
                {
                    "X": 0.21921952068805695,
                    "Y": 0.585424542427063
                },
                {
                    "X": 0.18428726494312286,
                    "Y": 0.5854283571243286
                }
            ]
        },
        "Id": "5588903c-c2bd-4248-9d89-bbaecd045ed2"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.07807922363281,
        "Text": "werden",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03153693303465843,
                "Height": 0.005651961546391249,
                "Left": 0.22265608608722687,
                "Top": 0.5782208442687988
            },
            "Polygon": [
                {
                    "X": 0.22265608608722687,
                    "Y": 0.5782243013381958
                },
                {
                    "X": 0.25419163703918457,
                    "Y": 0.5782208442687988
                },
                {
                    "X": 0.2541930079460144,
                    "Y": 0.5838693976402283
                },
                {
                    "X": 0.22265739738941193,
                    "Y": 0.5838727951049805
                }
            ]
        },
        "Id": "0599a447-0e68-4abd-b187-cea287cabdf6"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.2009506225586,
        "Text": "weitere",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.031133605167269707,
                "Height": 0.005686900578439236,
                "Left": 0.2576456665992737,
                "Top": 0.5781360864639282
            },
            "Polygon": [
                {
                    "X": 0.2576456665992737,
                    "Y": 0.5781394839286804
                },
                {
                    "X": 0.28877779841423035,
                    "Y": 0.5781360864639282
                },
                {
                    "X": 0.28877925872802734,
                    "Y": 0.583819568157196
                },
                {
                    "X": 0.2576470673084259,
                    "Y": 0.5838229656219482
                }
            ]
        },
        "Id": "8c485b29-b34c-4e44-ab23-4cc79d7f8865"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.94328308105469,
        "Text": "Verzugskosten",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06380238384008408,
                "Height": 0.0069204410538077354,
                "Left": 0.2920457124710083,
                "Top": 0.578070342540741
            },
            "Polygon": [
                {
                    "X": 0.2920457124710083,
                    "Y": 0.5780773758888245
                },
                {
                    "X": 0.3558461666107178,
                    "Y": 0.578070342540741
                },
                {
                    "X": 0.355848103761673,
                    "Y": 0.5849838256835938
                },
                {
                    "X": 0.2920474708080292,
                    "Y": 0.5849907994270325
                }
            ]
        },
        "Id": "c7b99a7e-dd7a-4e36-8ba7-47d2cb6df362"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.23728942871094,
        "Text": "sowie",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024810979142785072,
                "Height": 0.0054406109265983105,
                "Left": 0.35923701524734497,
                "Top": 0.5779630541801453
            },
            "Polygon": [
                {
                    "X": 0.35923701524734497,
                    "Y": 0.5779657959938049
                },
                {
                    "X": 0.38404643535614014,
                    "Y": 0.5779630541801453
                },
                {
                    "X": 0.3840479850769043,
                    "Y": 0.5834009647369385
                },
                {
                    "X": 0.35923853516578674,
                    "Y": 0.5834037065505981
                }
            ]
        },
        "Id": "3161c2b0-afd0-4a96-bd0b-c79631797039"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.43219757080078,
        "Text": "Verzugszinsen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06374538689851761,
                "Height": 0.006913130171597004,
                "Left": 0.3869782090187073,
                "Top": 0.5778032541275024
            },
            "Polygon": [
                {
                    "X": 0.3869782090187073,
                    "Y": 0.5778102874755859
                },
                {
                    "X": 0.45072147250175476,
                    "Y": 0.5778032541275024
                },
                {
                    "X": 0.4507235884666443,
                    "Y": 0.5847094058990479
                },
                {
                    "X": 0.38698017597198486,
                    "Y": 0.5847163796424866
                }
            ]
        },
        "Id": "7e7067eb-85d7-4904-bc54-ddd68531b8a7"
    },
    {
        "BlockType": "WORD",
        "Confidence": 84.51410675048828,
        "Text": "berechnet",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04522915557026863,
                "Height": 0.005547849927097559,
                "Left": 0.4538332223892212,
                "Top": 0.5776072144508362
            },
            "Polygon": [
                {
                    "X": 0.4538332223892212,
                    "Y": 0.5776122212409973
                },
                {
                    "X": 0.49906060099601746,
                    "Y": 0.5776072144508362
                },
                {
                    "X": 0.4990623891353607,
                    "Y": 0.5831501483917236
                },
                {
                    "X": 0.4538349211215973,
                    "Y": 0.58315509557724
                }
            ]
        },
        "Id": "9549273f-86b2-4624-a702-67667608b6d7"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.42781829833984,
        "Text": "Der",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.015166554600000381,
                "Height": 0.005574626382440329,
                "Left": 0.5033046007156372,
                "Top": 0.5773718357086182
            },
            "Polygon": [
                {
                    "X": 0.5033046007156372,
                    "Y": 0.5773735046386719
                },
                {
                    "X": 0.5184693336486816,
                    "Y": 0.5773718357086182
                },
                {
                    "X": 0.5184711217880249,
                    "Y": 0.5829448103904724
                },
                {
                    "X": 0.5033063888549805,
                    "Y": 0.5829464793205261
                }
            ]
        },
        "Id": "43edb2ff-24cf-4d3a-b967-f61cd20732a4"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.16262817382812,
        "Text": "Nachweis",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04201424866914749,
                "Height": 0.005530999973416328,
                "Left": 0.5215672850608826,
                "Top": 0.5773582458496094
            },
            "Polygon": [
                {
                    "X": 0.5215672850608826,
                    "Y": 0.5773628950119019
                },
                {
                    "X": 0.5635796785354614,
                    "Y": 0.5773582458496094
                },
                {
                    "X": 0.5635815262794495,
                    "Y": 0.582884669303894
                },
                {
                    "X": 0.5215691328048706,
                    "Y": 0.5828892588615417
                }
            ]
        },
        "Id": "10bb1a9a-9ef2-40c1-ae16-7a61477832c8"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.60270690917969,
        "Text": "eines",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.023210665211081505,
                "Height": 0.0056030526757240295,
                "Left": 0.5664380192756653,
                "Top": 0.5772997140884399
            },
            "Polygon": [
                {
                    "X": 0.5664380192756653,
                    "Y": 0.5773022174835205
                },
                {
                    "X": 0.5896466970443726,
                    "Y": 0.5772997140884399
                },
                {
                    "X": 0.5896486639976501,
                    "Y": 0.5829002261161804
                },
                {
                    "X": 0.5664399266242981,
                    "Y": 0.582902729511261
                }
            ]
        },
        "Id": "6b555948-0c14-4350-bcc1-ce91f2260742"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.1223373413086,
        "Text": "geringeren",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.046391479671001434,
                "Height": 0.00664517842233181,
                "Left": 0.5925780534744263,
                "Top": 0.5771798491477966
            },
            "Polygon": [
                {
                    "X": 0.5925780534744263,
                    "Y": 0.5771849751472473
                },
                {
                    "X": 0.6389670968055725,
                    "Y": 0.5771798491477966
                },
                {
                    "X": 0.6389695405960083,
                    "Y": 0.5838199853897095
                },
                {
                    "X": 0.5925803780555725,
                    "Y": 0.5838249921798706
                }
            ]
        },
        "Id": "84537ada-f218-4bed-9e07-1c5a4e3485b1"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.6942367553711,
        "Text": "Schadens",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04375540092587471,
                "Height": 0.005910548847168684,
                "Left": 0.6422454714775085,
                "Top": 0.5767588019371033
            },
            "Polygon": [
                {
                    "X": 0.6422454714775085,
                    "Y": 0.5767636299133301
                },
                {
                    "X": 0.6859986186027527,
                    "Y": 0.5767588019371033
                },
                {
                    "X": 0.6860008239746094,
                    "Y": 0.5826645493507385
                },
                {
                    "X": 0.6422476172447205,
                    "Y": 0.5826693177223206
                }
            ]
        },
        "Id": "2fb0989a-3673-41ef-bc6d-5efe9cabc629"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.14828491210938,
        "Text": "bleibt",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02312871254980564,
                "Height": 0.00568100530654192,
                "Left": 0.688565194606781,
                "Top": 0.5766342282295227
            },
            "Polygon": [
                {
                    "X": 0.688565194606781,
                    "Y": 0.576636791229248
                },
                {
                    "X": 0.711691677570343,
                    "Y": 0.5766342282295227
                },
                {
                    "X": 0.7116938829421997,
                    "Y": 0.5823127031326294
                },
                {
                    "X": 0.6885673403739929,
                    "Y": 0.5823152661323547
                }
            ]
        },
        "Id": "d1b47eb1-e770-448a-8b9b-1e840e06942e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 66.62393188476562,
        "Text": "vorbehalten",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.052920419722795486,
                "Height": 0.005410813260823488,
                "Left": 0.7143063545227051,
                "Top": 0.576657772064209
            },
            "Polygon": [
                {
                    "X": 0.7143063545227051,
                    "Y": 0.576663613319397
                },
                {
                    "X": 0.7672245502471924,
                    "Y": 0.576657772064209
                },
                {
                    "X": 0.7672267556190491,
                    "Y": 0.582062840461731
                },
                {
                    "X": 0.7143084406852722,
                    "Y": 0.5820686221122742
                }
            ]
        },
        "Id": "f39accaf-03a4-42c0-b0dd-045701cbda9c"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.15655517578125,
        "Text": "Sitz",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.017253758385777473,
                "Height": 0.005353317130357027,
                "Left": 0.06365033239126205,
                "Top": 0.5940308570861816
            },
            "Polygon": [
                {
                    "X": 0.06365033239126205,
                    "Y": 0.5940327048301697
                },
                {
                    "X": 0.0809030681848526,
                    "Y": 0.5940308570861816
                },
                {
                    "X": 0.08090408891439438,
                    "Y": 0.5993823409080505
                },
                {
                    "X": 0.06365131586790085,
                    "Y": 0.5993841886520386
                }
            ]
        },
        "Id": "fc2540fb-7a3f-4c7f-b4f9-2e08cf0f6d20"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.23054504394531,
        "Text": "Postanschrift",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06227904558181763,
                "Height": 0.005369542166590691,
                "Left": 0.18404361605644226,
                "Top": 0.5939857959747314
            },
            "Polygon": [
                {
                    "X": 0.18404361605644226,
                    "Y": 0.5939924716949463
                },
                {
                    "X": 0.24632136523723602,
                    "Y": 0.5939857959747314
                },
                {
                    "X": 0.2463226616382599,
                    "Y": 0.5993487238883972
                },
                {
                    "X": 0.18404480814933777,
                    "Y": 0.5993553400039673
                }
            ]
        },
        "Id": "735a4f1d-450f-4c49-9ca8-e9c8740e483d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.02413177490234,
        "Text": "Kundenservice",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07010706514120102,
                "Height": 0.005642896518111229,
                "Left": 0.3143256902694702,
                "Top": 0.5932478904724121
            },
            "Polygon": [
                {
                    "X": 0.3143256902694702,
                    "Y": 0.5932554006576538
                },
                {
                    "X": 0.3844311535358429,
                    "Y": 0.5932478904724121
                },
                {
                    "X": 0.38443276286125183,
                    "Y": 0.598883330821991
                },
                {
                    "X": 0.3143271803855896,
                    "Y": 0.5988907814025879
                }
            ]
        },
        "Id": "72c4c51d-f7ac-472f-83ba-d5c7a66728d4"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.5007553100586,
        "Text": "Handelsregister-Nr.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09003818035125732,
                "Height": 0.006570331286638975,
                "Left": 0.5741074085235596,
                "Top": 0.5924336314201355
            },
            "Polygon": [
                {
                    "X": 0.5741074085235596,
                    "Y": 0.5924433469772339
                },
                {
                    "X": 0.6641431450843811,
                    "Y": 0.5924336314201355
                },
                {
                    "X": 0.6641455888748169,
                    "Y": 0.5989943742752075
                },
                {
                    "X": 0.574109673500061,
                    "Y": 0.5990039706230164
                }
            ]
        },
        "Id": "2634ac2a-2fc1-4212-8130-86bee0bd0269"
    },
    {
        "BlockType": "WORD",
        "Confidence": 84.28548431396484,
        "Text": "Zahlungsempfänger",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09377186000347137,
                "Height": 0.006857944652438164,
                "Left": 0.7635136842727661,
                "Top": 0.591303288936615
            },
            "Polygon": [
                {
                    "X": 0.7635136842727661,
                    "Y": 0.591313362121582
                },
                {
                    "X": 0.8572825789451599,
                    "Y": 0.591303288936615
                },
                {
                    "X": 0.8572855591773987,
                    "Y": 0.5981512069702148
                },
                {
                    "X": 0.7635164260864258,
                    "Y": 0.5981612205505371
                }
            ]
        },
        "Id": "0d3e28f8-062a-4778-bed1-aaddf12452ca"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.31963348388672,
        "Text": "Klarna",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.028108155354857445,
                "Height": 0.00542410695925355,
                "Left": 0.06343112140893936,
                "Top": 0.6010149121284485
            },
            "Polygon": [
                {
                    "X": 0.06343112140893936,
                    "Y": 0.6010178923606873
                },
                {
                    "X": 0.09153822809457779,
                    "Y": 0.6010149121284485
                },
                {
                    "X": 0.09153927862644196,
                    "Y": 0.6064360737800598
                },
                {
                    "X": 0.06343212723731995,
                    "Y": 0.6064389944076538
                }
            ]
        },
        "Id": "5876fbcd-c802-46d9-8e1f-f780ef4fb86c"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.36377716064453,
        "Text": "Bank",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.022263120859861374,
                "Height": 0.005318304058164358,
                "Left": 0.09453129023313522,
                "Top": 0.6010309457778931
            },
            "Polygon": [
                {
                    "X": 0.09453129023313522,
                    "Y": 0.6010333299636841
                },
                {
                    "X": 0.11679334193468094,
                    "Y": 0.6010309457778931
                },
                {
                    "X": 0.1167944073677063,
                    "Y": 0.6063469052314758
                },
                {
                    "X": 0.0945323184132576,
                    "Y": 0.6063492298126221
                }
            ]
        },
        "Id": "1ace1197-fd36-47fb-a557-50103b3ab895"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.7509994506836,
        "Text": "AB",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.012705456465482712,
                "Height": 0.005206145811825991,
                "Left": 0.11981362104415894,
                "Top": 0.6011680960655212
            },
            "Polygon": [
                {
                    "X": 0.11981362104415894,
                    "Y": 0.6011694669723511
                },
                {
                    "X": 0.132518008351326,
                    "Y": 0.6011680960655212
                },
                {
                    "X": 0.13251908123493195,
                    "Y": 0.6063729524612427
                },
                {
                    "X": 0.1198146715760231,
                    "Y": 0.6063742637634277
                }
            ]
        },
        "Id": "341a8f69-c329-4278-92da-1cb603ba09ff"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.14811706542969,
        "Text": "(publ)",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02412368729710579,
                "Height": 0.006754211615771055,
                "Left": 0.13571561872959137,
                "Top": 0.601040780544281
            },
            "Polygon": [
                {
                    "X": 0.13571561872959137,
                    "Y": 0.6010433435440063
                },
                {
                    "X": 0.15983785688877106,
                    "Y": 0.601040780544281
                },
                {
                    "X": 0.15983931720256805,
                    "Y": 0.6077924966812134
                },
                {
                    "X": 0.1357170194387436,
                    "Y": 0.607795000076294
                }
            ]
        },
        "Id": "1dac47b4-1507-4259-93e9-69e0af9da836"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.28787231445312,
        "Text": "Deutschland",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.05853768810629845,
                "Height": 0.0059324088506400585,
                "Left": 0.18400894105434418,
                "Top": 0.6008638739585876
            },
            "Polygon": [
                {
                    "X": 0.18400894105434418,
                    "Y": 0.6008701324462891
                },
                {
                    "X": 0.2425452023744583,
                    "Y": 0.6008638739585876
                },
                {
                    "X": 0.24254663288593292,
                    "Y": 0.6067901849746704
                },
                {
                    "X": 0.18401026725769043,
                    "Y": 0.6067963242530823
                }
            ]
        },
        "Id": "11e7e5a9-e740-4428-a277-0258abea33ba"
    },
    {
        "BlockType": "WORD",
        "Confidence": 84.00140380859375,
        "Text": "Website:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03764722868800163,
                "Height": 0.00552920950576663,
                "Left": 0.31383535265922546,
                "Top": 0.6006227731704712
            },
            "Polygon": [
                {
                    "X": 0.31383535265922546,
                    "Y": 0.6006267666816711
                },
                {
                    "X": 0.35148105025291443,
                    "Y": 0.6006227731704712
                },
                {
                    "X": 0.3514825701713562,
                    "Y": 0.6061480641365051
                },
                {
                    "X": 0.3138367831707001,
                    "Y": 0.6061519980430603
                }
            ]
        },
        "Id": "890baf19-c871-4397-8b00-a1fe9b1b335b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 85.20468139648438,
        "Text": "www.klama.de/kundenservice",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.13048899173736572,
                "Height": 0.005933957640081644,
                "Left": 0.35423043370246887,
                "Top": 0.6003154516220093
            },
            "Polygon": [
                {
                    "X": 0.35423043370246887,
                    "Y": 0.6003293395042419
                },
                {
                    "X": 0.48471754789352417,
                    "Y": 0.6003154516220093
                },
                {
                    "X": 0.4847194254398346,
                    "Y": 0.606235682964325
                },
                {
                    "X": 0.3542320728302002,
                    "Y": 0.6062493920326233
                }
            ]
        },
        "Id": "39d8d4de-e9b5-4130-8bfa-9c9be721542b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 94.96749877929688,
        "Text": "SE556737-0431",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06902153044939041,
                "Height": 0.005707028787583113,
                "Left": 0.5734754204750061,
                "Top": 0.5995652675628662
            },
            "Polygon": [
                {
                    "X": 0.5734754204750061,
                    "Y": 0.5995725989341736
                },
                {
                    "X": 0.6424948573112488,
                    "Y": 0.5995652675628662
                },
                {
                    "X": 0.6424969434738159,
                    "Y": 0.6052650213241577
                },
                {
                    "X": 0.5734773874282837,
                    "Y": 0.6052722930908203
                }
            ]
        },
        "Id": "e5e70051-741b-4e3c-9e02-032963052141"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.77880096435547,
        "Text": "Klarna",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02712579257786274,
                "Height": 0.005868640728294849,
                "Left": 0.7637519836425781,
                "Top": 0.5986858010292053
            },
            "Polygon": [
                {
                    "X": 0.7637519836425781,
                    "Y": 0.5986886620521545
                },
                {
                    "X": 0.7908753156661987,
                    "Y": 0.5986858010292053
                },
                {
                    "X": 0.7908777594566345,
                    "Y": 0.6045515537261963
                },
                {
                    "X": 0.7637543082237244,
                    "Y": 0.6045544147491455
                }
            ]
        },
        "Id": "0625ad9e-bc4a-4229-9b15-069850f83e86"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.28680419921875,
        "Text": "Bank",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.022244440391659737,
                "Height": 0.005721810273826122,
                "Left": 0.7945204973220825,
                "Top": 0.5987919569015503
            },
            "Polygon": [
                {
                    "X": 0.7945204973220825,
                    "Y": 0.5987943410873413
                },
                {
                    "X": 0.8167625069618225,
                    "Y": 0.5987919569015503
                },
                {
                    "X": 0.8167649507522583,
                    "Y": 0.6045114398002625
                },
                {
                    "X": 0.7945228815078735,
                    "Y": 0.6045137643814087
                }
            ]
        },
        "Id": "394ffa00-4185-4954-8151-7578f3501ae9"
    },
    {
        "BlockType": "WORD",
        "Confidence": 90.97853088378906,
        "Text": "AB",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.013124405406415462,
                "Height": 0.00553711224347353,
                "Left": 0.8195083141326904,
                "Top": 0.5985724329948425
            },
            "Polygon": [
                {
                    "X": 0.8195083141326904,
                    "Y": 0.5985738635063171
                },
                {
                    "X": 0.8326303362846375,
                    "Y": 0.5985724329948425
                },
                {
                    "X": 0.8326327204704285,
                    "Y": 0.6041081547737122
                },
                {
                    "X": 0.8195106387138367,
                    "Y": 0.6041095852851868
                }
            ]
        },
        "Id": "6cf6df2e-44ac-42a8-ac9c-c80315688ca7"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.11502075195312,
        "Text": "(publ)",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024832816794514656,
                "Height": 0.006695950869470835,
                "Left": 0.8354310393333435,
                "Top": 0.5984770655632019
            },
            "Polygon": [
                {
                    "X": 0.8354310393333435,
                    "Y": 0.5984797477722168
                },
                {
                    "X": 0.8602609634399414,
                    "Y": 0.5984770655632019
                },
                {
                    "X": 0.8602638840675354,
                    "Y": 0.6051704287528992
                },
                {
                    "X": 0.8354339003562927,
                    "Y": 0.6051730513572693
                }
            ]
        },
        "Id": "d59a9a6f-c83d-46ec-96a4-c80c82b7b692"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.76659393310547,
        "Text": "Sveaväger",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04817628860473633,
                "Height": 0.007312748581171036,
                "Left": 0.06317363679409027,
                "Top": 0.6078237295150757
            },
            "Polygon": [
                {
                    "X": 0.06317363679409027,
                    "Y": 0.6078287959098816
                },
                {
                    "X": 0.1113484650850296,
                    "Y": 0.6078237295150757
                },
                {
                    "X": 0.1113499253988266,
                    "Y": 0.6151314973831177
                },
                {
                    "X": 0.06317497789859772,
                    "Y": 0.6151365041732788
                }
            ]
        },
        "Id": "2646df33-6b12-4741-8730-dc78fcd3f102"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.15065002441406,
        "Text": "46",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01085358764976263,
                "Height": 0.005471493117511272,
                "Left": 0.11501850187778473,
                "Top": 0.608029305934906
            },
            "Polygon": [
                {
                    "X": 0.11501850187778473,
                    "Y": 0.6080304384231567
                },
                {
                    "X": 0.1258709728717804,
                    "Y": 0.608029305934906
                },
                {
                    "X": 0.12587209045886993,
                    "Y": 0.613499641418457
                },
                {
                    "X": 0.11501959711313248,
                    "Y": 0.6135007739067078
                }
            ]
        },
        "Id": "d1ba2211-cf92-4ab9-8c72-195de512ffcf"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.32764434814453,
        "Text": "Klarna",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02785775437951088,
                "Height": 0.005758839659392834,
                "Left": 0.18392729759216309,
                "Top": 0.6078260540962219
            },
            "Polygon": [
                {
                    "X": 0.18392729759216309,
                    "Y": 0.6078289747238159
                },
                {
                    "X": 0.21178372204303741,
                    "Y": 0.6078260540962219
                },
                {
                    "X": 0.21178504824638367,
                    "Y": 0.6135820150375366
                },
                {
                    "X": 0.18392857909202576,
                    "Y": 0.6135848760604858
                }
            ]
        },
        "Id": "e3fe0066-8391-4e18-862b-318b43266acb"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.85612487792969,
        "Text": "Bank",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.021983535960316658,
                "Height": 0.005801927763968706,
                "Left": 0.21528548002243042,
                "Top": 0.6077863574028015
            },
            "Polygon": [
                {
                    "X": 0.21528548002243042,
                    "Y": 0.607788622379303
                },
                {
                    "X": 0.2372676283121109,
                    "Y": 0.6077863574028015
                },
                {
                    "X": 0.23726901412010193,
                    "Y": 0.6135859489440918
                },
                {
                    "X": 0.21528682112693787,
                    "Y": 0.613588273525238
                }
            ]
        },
        "Id": "aec89e98-bdf1-41c1-9464-126e6ed67d97"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.09566497802734,
        "Text": "AB",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.012817000038921833,
                "Height": 0.0056786928325891495,
                "Left": 0.24019813537597656,
                "Top": 0.6077433824539185
            },
            "Polygon": [
                {
                    "X": 0.24019813537597656,
                    "Y": 0.6077447533607483
                },
                {
                    "X": 0.2530137598514557,
                    "Y": 0.6077433824539185
                },
                {
                    "X": 0.2530151307582855,
                    "Y": 0.6134207844734192
                },
                {
                    "X": 0.2401995062828064,
                    "Y": 0.6134220957756042
                }
            ]
        },
        "Id": "ff1b2a77-4f7c-4191-a0f5-21452d0ff3a7"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.04767608642578,
        "Text": "(publ)",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024514179676771164,
                "Height": 0.007277488708496094,
                "Left": 0.25565478205680847,
                "Top": 0.6072108745574951
            },
            "Polygon": [
                {
                    "X": 0.25565478205680847,
                    "Y": 0.6072134375572205
                },
                {
                    "X": 0.2801671326160431,
                    "Y": 0.6072108745574951
                },
                {
                    "X": 0.28016898036003113,
                    "Y": 0.6144858002662659
                },
                {
                    "X": 0.25565657019615173,
                    "Y": 0.6144883632659912
                }
            ]
        },
        "Id": "33939146-02ed-4d1e-84f2-496616cdbc27"
    },
    {
        "BlockType": "WORD",
        "Confidence": 73.41046905517578,
        "Text": "USt-Id",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02820734679698944,
                "Height": 0.005983912386000156,
                "Left": 0.5734785795211792,
                "Top": 0.6064678430557251
            },
            "Polygon": [
                {
                    "X": 0.5734785795211792,
                    "Y": 0.6064708232879639
                },
                {
                    "X": 0.6016837954521179,
                    "Y": 0.6064678430557251
                },
                {
                    "X": 0.6016859412193298,
                    "Y": 0.6124488115310669
                },
                {
                    "X": 0.5734806656837463,
                    "Y": 0.6124517321586609
                }
            ]
        },
        "Id": "897727c3-2e8f-4d5d-a435-03e16155a915"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.35443115234375,
        "Text": "Nummer",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03937969729304314,
                "Height": 0.00551496772095561,
                "Left": 0.6050915718078613,
                "Top": 0.606717586517334
            },
            "Polygon": [
                {
                    "X": 0.6050915718078613,
                    "Y": 0.6067217588424683
                },
                {
                    "X": 0.6444692015647888,
                    "Y": 0.606717586517334
                },
                {
                    "X": 0.6444712281227112,
                    "Y": 0.6122284531593323
                },
                {
                    "X": 0.6050934791564941,
                    "Y": 0.6122325658798218
                }
            ]
        },
        "Id": "4e5f532a-c95e-450e-9494-aad2989bde20"
    },
    {
        "BlockType": "WORD",
        "Confidence": 94.1288070678711,
        "Text": "IBAN",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.022870982065796852,
                "Height": 0.005287365522235632,
                "Left": 0.7643471360206604,
                "Top": 0.6055915951728821
            },
            "Polygon": [
                {
                    "X": 0.7643471360206604,
                    "Y": 0.6055939793586731
                },
                {
                    "X": 0.7872159481048584,
                    "Y": 0.6055915951728821
                },
                {
                    "X": 0.7872181534767151,
                    "Y": 0.6108765602111816
                },
                {
                    "X": 0.7643492817878723,
                    "Y": 0.6108789443969727
                }
            ]
        },
        "Id": "ad397220-686a-4341-821c-e7a299a31c28"
    },
    {
        "BlockType": "WORD",
        "Confidence": 31.45042610168457,
        "Text": "::DE13760700120500154000",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.12871626019477844,
                "Height": 0.0060256472788751125,
                "Left": 0.7855330109596252,
                "Top": 0.6054120659828186
            },
            "Polygon": [
                {
                    "X": 0.7855330109596252,
                    "Y": 0.6054255962371826
                },
                {
                    "X": 0.9142465591430664,
                    "Y": 0.6054120659828186
                },
                {
                    "X": 0.9142493009567261,
                    "Y": 0.6114242672920227
                },
                {
                    "X": 0.7855355143547058,
                    "Y": 0.6114377379417419
                }
            ]
        },
        "Id": "25c06405-aa99-47c6-828e-b533e6f13acd"
    },
    {
        "BlockType": "WORD",
        "Confidence": 92.26471710205078,
        "Text": "111",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01502026617527008,
                "Height": 0.005489076487720013,
                "Left": 0.06384467333555222,
                "Top": 0.6156814098358154
            },
            "Polygon": [
                {
                    "X": 0.06384467333555222,
                    "Y": 0.6156829595565796
                },
                {
                    "X": 0.07886390388011932,
                    "Y": 0.6156814098358154
                },
                {
                    "X": 0.0788649395108223,
                    "Y": 0.6211689114570618
                },
                {
                    "X": 0.0638456866145134,
                    "Y": 0.6211704611778259
                }
            ]
        },
        "Id": "160f4002-b622-4559-91ca-5d7f91654747"
    },
    {
        "BlockType": "WORD",
        "Confidence": 90.76374053955078,
        "Text": "34",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.010810045525431633,
                "Height": 0.005592981819063425,
                "Left": 0.08228877931833267,
                "Top": 0.615684986114502
            },
            "Polygon": [
                {
                    "X": 0.08228877931833267,
                    "Y": 0.6156861186027527
                },
                {
                    "X": 0.0930977389216423,
                    "Y": 0.615684986114502
                },
                {
                    "X": 0.09309881925582886,
                    "Y": 0.62127685546875
                },
                {
                    "X": 0.08228984475135803,
                    "Y": 0.6212779879570007
                }
            ]
        },
        "Id": "40be6b65-fa97-4f5d-a9fb-97c61772e2b4"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.31854248046875,
        "Text": "Stockholm",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.044875070452690125,
                "Height": 0.006061623804271221,
                "Left": 0.09638484567403793,
                "Top": 0.6152256727218628
            },
            "Polygon": [
                {
                    "X": 0.09638484567403793,
                    "Y": 0.6152303218841553
                },
                {
                    "X": 0.14125865697860718,
                    "Y": 0.6152256727218628
                },
                {
                    "X": 0.14125992357730865,
                    "Y": 0.621282696723938
                },
                {
                    "X": 0.09638603031635284,
                    "Y": 0.6212872862815857
                }
            ]
        },
        "Id": "fdb8b6bc-2019-4290-8d9b-af64e0c934c7"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.84879302978516,
        "Text": "Postfach",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03752804920077324,
                "Height": 0.005661463364958763,
                "Left": 0.18398433923721313,
                "Top": 0.6151951551437378
            },
            "Polygon": [
                {
                    "X": 0.18398433923721313,
                    "Y": 0.6151990294456482
                },
                {
                    "X": 0.22151105105876923,
                    "Y": 0.6151951551437378
                },
                {
                    "X": 0.22151237726211548,
                    "Y": 0.6208527684211731
                },
                {
                    "X": 0.18398559093475342,
                    "Y": 0.6208565831184387
                }
            ]
        },
        "Id": "4c5c9c1b-fb52-4171-bcd2-5f3b39db02b4"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.1363525390625,
        "Text": "900162",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03267086297273636,
                "Height": 0.0059231482446193695,
                "Left": 0.22468839585781097,
                "Top": 0.6151033639907837
            },
            "Polygon": [
                {
                    "X": 0.22468839585781097,
                    "Y": 0.6151067614555359
                },
                {
                    "X": 0.25735780596733093,
                    "Y": 0.6151033639907837
                },
                {
                    "X": 0.25735926628112793,
                    "Y": 0.6210231781005859
                },
                {
                    "X": 0.224689781665802,
                    "Y": 0.6210265159606934
                }
            ]
        },
        "Id": "4714dc5e-90fa-4d79-a4d4-e1142426a454"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.1492691040039,
        "Text": "SE556737043101",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07702156156301498,
                "Height": 0.005942271091043949,
                "Left": 0.5737752914428711,
                "Top": 0.6137163639068604
            },
            "Polygon": [
                {
                    "X": 0.5737752914428711,
                    "Y": 0.613724410533905
                },
                {
                    "X": 0.6507946848869324,
                    "Y": 0.6137163639068604
                },
                {
                    "X": 0.6507968306541443,
                    "Y": 0.6196507215499878
                },
                {
                    "X": 0.5737773776054382,
                    "Y": 0.6196586489677429
                }
            ]
        },
        "Id": "1cf14bfe-e860-4e5e-91ab-c6931507672d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.46106719970703,
        "Text": "BIC:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.018351232632994652,
                "Height": 0.005724245682358742,
                "Left": 0.7637810111045837,
                "Top": 0.6128849983215332
            },
            "Polygon": [
                {
                    "X": 0.7637810111045837,
                    "Y": 0.612886905670166
                },
                {
                    "X": 0.7821298837661743,
                    "Y": 0.6128849983215332
                },
                {
                    "X": 0.7821322083473206,
                    "Y": 0.6186073422431946
                },
                {
                    "X": 0.76378333568573,
                    "Y": 0.6186092495918274
                }
            ]
        },
        "Id": "b45e9295-3a23-4198-a903-dde7c1d3e952"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.2902603149414,
        "Text": "DEUTDEMM760",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07287705689668655,
                "Height": 0.005813223775476217,
                "Left": 0.7851588129997253,
                "Top": 0.6126559376716614
            },
            "Polygon": [
                {
                    "X": 0.7851588129997253,
                    "Y": 0.6126635074615479
                },
                {
                    "X": 0.8580333590507507,
                    "Y": 0.6126559376716614
                },
                {
                    "X": 0.8580358624458313,
                    "Y": 0.6184616088867188
                },
                {
                    "X": 0.7851611971855164,
                    "Y": 0.6184691190719604
                }
            ]
        },
        "Id": "16b0fa0b-07c8-43ca-a102-488348560447"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.33570861816406,
        "Text": "Schweden",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04578959569334984,
                "Height": 0.005929904989898205,
                "Left": 0.06317832320928574,
                "Top": 0.6223414540290833
            },
            "Polygon": [
                {
                    "X": 0.06317832320928574,
                    "Y": 0.6223461627960205
                },
                {
                    "X": 0.10896673798561096,
                    "Y": 0.6223414540290833
                },
                {
                    "X": 0.10896791517734528,
                    "Y": 0.6282666921615601
                },
                {
                    "X": 0.06317941844463348,
                    "Y": 0.6282713413238525
                }
            ]
        },
        "Id": "34ab3e7b-e919-4d98-ac5c-38e3c58fed09"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.44200134277344,
        "Text": "90492",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.026967601850628853,
                "Height": 0.005677025765180588,
                "Left": 0.18371647596359253,
                "Top": 0.6223812103271484
            },
            "Polygon": [
                {
                    "X": 0.18371647596359253,
                    "Y": 0.6223839521408081
                },
                {
                    "X": 0.21068276464939117,
                    "Y": 0.6223812103271484
                },
                {
                    "X": 0.21068407595157623,
                    "Y": 0.6280554533004761
                },
                {
                    "X": 0.183717742562294,
                    "Y": 0.6280581951141357
                }
            ]
        },
        "Id": "7f81e601-e501-46ff-bd8e-876690e5a3df"
    },
    {
        "BlockType": "WORD",
        "Confidence": 93.05023193359375,
        "Text": "Nürnberg",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04001748561859131,
                "Height": 0.007107469253242016,
                "Left": 0.21396204829216003,
                "Top": 0.6221063137054443
            },
            "Polygon": [
                {
                    "X": 0.21396204829216003,
                    "Y": 0.6221104264259338
                },
                {
                    "X": 0.25397780537605286,
                    "Y": 0.6221063137054443
                },
                {
                    "X": 0.25397953391075134,
                    "Y": 0.6292096972465515
                },
                {
                    "X": 0.21396370232105255,
                    "Y": 0.6292137503623962
                }
            ]
        },
        "Id": "2b4d70e6-45a6-4ba8-ae6b-46ff1009c15f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 89.82600402832031,
        "Text": "Vorstandsvorsitzender",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.1070750281214714,
                "Height": 0.005822672042995691,
                "Left": 0.5729473829269409,
                "Top": 0.6207273006439209
            },
            "Polygon": [
                {
                    "X": 0.5729473829269409,
                    "Y": 0.6207382678985596
                },
                {
                    "X": 0.6800202131271362,
                    "Y": 0.6207273006439209
                },
                {
                    "X": 0.6800224184989929,
                    "Y": 0.6265390515327454
                },
                {
                    "X": 0.5729494094848633,
                    "Y": 0.6265499591827393
                }
            ]
        },
        "Id": "a653d5f2-11b0-4344-a611-bff3e6ee5469"
    },
    {
        "BlockType": "WORD",
        "Confidence": 61.14567565917969,
        "Text": "Bank:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024241380393505096,
                "Height": 0.0055894311517477036,
                "Left": 0.7637369632720947,
                "Top": 0.6202669739723206
            },
            "Polygon": [
                {
                    "X": 0.7637369632720947,
                    "Y": 0.6202694773674011
                },
                {
                    "X": 0.787976086139679,
                    "Y": 0.6202669739723206
                },
                {
                    "X": 0.7879783511161804,
                    "Y": 0.625853955745697
                },
                {
                    "X": 0.7637392282485962,
                    "Y": 0.6258563995361328
                }
            ]
        },
        "Id": "b5c73ce2-b824-489f-95b4-dfd621c1a576"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.87789916992188,
        "Text": "Deutsche",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04112723097205162,
                "Height": 0.0056798565201461315,
                "Left": 0.7913113236427307,
                "Top": 0.6201474070549011
            },
            "Polygon": [
                {
                    "X": 0.7913113236427307,
                    "Y": 0.6201516389846802
                },
                {
                    "X": 0.8324361443519592,
                    "Y": 0.6201474070549011
                },
                {
                    "X": 0.832438588142395,
                    "Y": 0.6258230805397034
                },
                {
                    "X": 0.7913137078285217,
                    "Y": 0.6258272528648376
                }
            ]
        },
        "Id": "3287210b-c944-4eba-8a5e-a5327cad8f78"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.49922943115234,
        "Text": "Bank",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02213931269943714,
                "Height": 0.005462427157908678,
                "Left": 0.8355227112770081,
                "Top": 0.6199904680252075
            },
            "Polygon": [
                {
                    "X": 0.8355227112770081,
                    "Y": 0.619992733001709
                },
                {
                    "X": 0.857659637928009,
                    "Y": 0.6199904680252075
                },
                {
                    "X": 0.8576620221138,
                    "Y": 0.6254506707191467
                },
                {
                    "X": 0.8355250358581543,
                    "Y": 0.6254528760910034
                }
            ]
        },
        "Id": "930e7391-22f6-447f-b979-f7e878cc795d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.46195220947266,
        "Text": "AG",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.013385314494371414,
                "Height": 0.005441016983240843,
                "Left": 0.8607739806175232,
                "Top": 0.6199091672897339
            },
            "Polygon": [
                {
                    "X": 0.8607739806175232,
                    "Y": 0.6199105381965637
                },
                {
                    "X": 0.8741568922996521,
                    "Y": 0.6199091672897339
                },
                {
                    "X": 0.8741592764854431,
                    "Y": 0.6253488063812256
                },
                {
                    "X": 0.8607763051986694,
                    "Y": 0.6253501772880554
                }
            ]
        },
        "Id": "eee89f8d-0939-4b4e-96af-29ec4d1d6b50"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.35846710205078,
        "Text": "Sebastian",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.044368814677000046,
                "Height": 0.00577879510819912,
                "Left": 0.5728939175605774,
                "Top": 0.6279520988464355
            },
            "Polygon": [
                {
                    "X": 0.5728939175605774,
                    "Y": 0.6279566287994385
                },
                {
                    "X": 0.6172606348991394,
                    "Y": 0.6279520988464355
                },
                {
                    "X": 0.6172627210617065,
                    "Y": 0.6337264180183411
                },
                {
                    "X": 0.572895884513855,
                    "Y": 0.6337308883666992
                }
            ]
        },
        "Id": "f6c5b9e8-eb67-4977-b77d-b234d8aa584d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.0902099609375,
        "Text": "Siemiatkowski",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06145891919732094,
                "Height": 0.0057699186727404594,
                "Left": 0.6194595694541931,
                "Top": 0.6277613639831543
            },
            "Polygon": [
                {
                    "X": 0.6194595694541931,
                    "Y": 0.6277676224708557
                },
                {
                    "X": 0.6809163093566895,
                    "Y": 0.6277613639831543
                },
                {
                    "X": 0.6809184551239014,
                    "Y": 0.6335251331329346
                },
                {
                    "X": 0.6194616556167603,
                    "Y": 0.6335312724113464
                }
            ]
        },
        "Id": "0e7c529e-27f2-4ec6-978e-9814558f815b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.32613372802734,
        "Text": "Beleg/Quittung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09319474548101425,
                "Height": 0.00909330602735281,
                "Left": 0.024460386484861374,
                "Top": 0.6445518136024475
            },
            "Polygon": [
                {
                    "X": 0.024460386484861374,
                    "Y": 0.6445609927177429
                },
                {
                    "X": 0.11765330284833908,
                    "Y": 0.6445518136024475
                },
                {
                    "X": 0.11765513569116592,
                    "Y": 0.6536360383033752
                },
                {
                    "X": 0.024461951106786728,
                    "Y": 0.6536450982093811
                }
            ]
        },
        "Id": "377510d7-d30e-4fc8-9d33-195aa8b33e76"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.70438385009766,
        "Text": "für",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.017744015902280807,
                "Height": 0.007492688950151205,
                "Left": 0.12182595580816269,
                "Top": 0.6444237232208252
            },
            "Polygon": [
                {
                    "X": 0.12182595580816269,
                    "Y": 0.6444255113601685
                },
                {
                    "X": 0.13956840336322784,
                    "Y": 0.6444237232208252
                },
                {
                    "X": 0.1395699679851532,
                    "Y": 0.6519147157669067
                },
                {
                    "X": 0.12182747572660446,
                    "Y": 0.6519164443016052
                }
            ]
        },
        "Id": "b473c2b5-2ccd-4647-9186-28db076b1c7c"
    },
    {
        "BlockType": "WORD",
        "Confidence": 89.92427825927734,
        "Text": "Kontoinhaber/Zahler",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.1275324523448944,
                "Height": 0.007775003556162119,
                "Left": 0.14362893998622894,
                "Top": 0.6442208886146545
            },
            "Polygon": [
                {
                    "X": 0.14362893998622894,
                    "Y": 0.6442334651947021
                },
                {
                    "X": 0.27115944027900696,
                    "Y": 0.6442208886146545
                },
                {
                    "X": 0.27116137742996216,
                    "Y": 0.6519834995269775
                },
                {
                    "X": 0.14363056421279907,
                    "Y": 0.6519958972930908
                }
            ]
        },
        "Id": "b1ad2539-d0e7-43c3-9e7c-e32b5a48d42b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 87.36225128173828,
        "Text": "SEPA-Überweisung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.14987485110759735,
                "Height": 0.012797017581760883,
                "Left": 0.30430668592453003,
                "Top": 0.6421756148338318
            },
            "Polygon": [
                {
                    "X": 0.30430668592453003,
                    "Y": 0.6421904563903809
                },
                {
                    "X": 0.4541776180267334,
                    "Y": 0.6421756148338318
                },
                {
                    "X": 0.4541815519332886,
                    "Y": 0.6549580693244934
                },
                {
                    "X": 0.30431002378463745,
                    "Y": 0.6549726128578186
                }
            ]
        },
        "Id": "eb67c61d-0169-4278-b19c-c28e68253f9e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.41242980957031,
        "Text": "Für",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01796882227063179,
                "Height": 0.006754062604159117,
                "Left": 0.6571850776672363,
                "Top": 0.6508798599243164
            },
            "Polygon": [
                {
                    "X": 0.6571850776672363,
                    "Y": 0.6508816480636597
                },
                {
                    "X": 0.6751514077186584,
                    "Y": 0.6508798599243164
                },
                {
                    "X": 0.675153911113739,
                    "Y": 0.6576322317123413
                },
                {
                    "X": 0.6571876406669617,
                    "Y": 0.6576339602470398
                }
            ]
        },
        "Id": "2cdd7209-91f2-46d2-aee9-594f83ae2822"
    },
    {
        "BlockType": "WORD",
        "Confidence": 90.63645935058594,
        "Text": "Überweisungen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08534206449985504,
                "Height": 0.008339207619428635,
                "Left": 0.6783952713012695,
                "Top": 0.6499820351600647
            },
            "Polygon": [
                {
                    "X": 0.6783952713012695,
                    "Y": 0.6499903798103333
                },
                {
                    "X": 0.7637339234352112,
                    "Y": 0.6499820351600647
                },
                {
                    "X": 0.7637373208999634,
                    "Y": 0.6583130359649658
                },
                {
                    "X": 0.6783984303474426,
                    "Y": 0.6583212614059448
                }
            ]
        },
        "Id": "2cf6a19d-00f8-4412-a563-884a01158574"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.19317626953125,
        "Text": "in",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009249393828213215,
                "Height": 0.00635432219132781,
                "Left": 0.7680056095123291,
                "Top": 0.6503706574440002
            },
            "Polygon": [
                {
                    "X": 0.7680056095123291,
                    "Y": 0.6503715515136719
                },
                {
                    "X": 0.7772524356842041,
                    "Y": 0.6503706574440002
                },
                {
                    "X": 0.7772550582885742,
                    "Y": 0.6567240357398987
                },
                {
                    "X": 0.7680082321166992,
                    "Y": 0.6567249298095703
                }
            ]
        },
        "Id": "3abc8e55-229b-4b81-8860-2cda5cb56032"
    },
    {
        "BlockType": "WORD",
        "Confidence": 72.92130279541016,
        "Text": "Deutschland.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07065651565790176,
                "Height": 0.006779833231121302,
                "Left": 0.7817521095275879,
                "Top": 0.650238573551178
            },
            "Polygon": [
                {
                    "X": 0.7817521095275879,
                    "Y": 0.6502454876899719
                },
                {
                    "X": 0.8524057269096375,
                    "Y": 0.650238573551178
                },
                {
                    "X": 0.8524086475372314,
                    "Y": 0.6570115685462952
                },
                {
                    "X": 0.7817549109458923,
                    "Y": 0.6570184230804443
                }
            ]
        },
        "Id": "5a0288d6-554b-473c-936b-660cfddaed77"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.88277435302734,
        "Text": "in",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008890094235539436,
                "Height": 0.006370736751705408,
                "Left": 0.8567904829978943,
                "Top": 0.6500428915023804
            },
            "Polygon": [
                {
                    "X": 0.8567904829978943,
                    "Y": 0.650043785572052
                },
                {
                    "X": 0.8656777739524841,
                    "Y": 0.6500428915023804
                },
                {
                    "X": 0.8656805753707886,
                    "Y": 0.6564127802848816
                },
                {
                    "X": 0.856793224811554,
                    "Y": 0.6564136743545532
                }
            ]
        },
        "Id": "43087b26-6534-4a36-adb3-0989c37a07cc"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.56688690185547,
        "Text": "andere",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03694498538970947,
                "Height": 0.006143545266240835,
                "Left": 0.870130181312561,
                "Top": 0.6502687931060791
            },
            "Polygon": [
                {
                    "X": 0.870130181312561,
                    "Y": 0.6502724289894104
                },
                {
                    "X": 0.9070724248886108,
                    "Y": 0.6502687931060791
                },
                {
                    "X": 0.9070751667022705,
                    "Y": 0.6564087867736816
                },
                {
                    "X": 0.8701328635215759,
                    "Y": 0.6564123630523682
                }
            ]
        },
        "Id": "0795f2da-6848-4e8d-bba9-924e00a59c85"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.85169982910156,
        "Text": "IBAN",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024475520476698875,
                "Height": 0.006057344377040863,
                "Left": 0.08950317651033401,
                "Top": 0.6576783657073975
            },
            "Polygon": [
                {
                    "X": 0.08950317651033401,
                    "Y": 0.6576807498931885
                },
                {
                    "X": 0.11397748440504074,
                    "Y": 0.6576783657073975
                },
                {
                    "X": 0.11397869884967804,
                    "Y": 0.6637333631515503
                },
                {
                    "X": 0.08950434625148773,
                    "Y": 0.6637356877326965
                }
            ]
        },
        "Id": "d572b613-dc84-42f0-9f96-cb61cc892296"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.11762237548828,
        "Text": "des",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.017546117305755615,
                "Height": 0.00600326107814908,
                "Left": 0.1172960177063942,
                "Top": 0.6576902270317078
            },
            "Polygon": [
                {
                    "X": 0.1172960177063942,
                    "Y": 0.6576919555664062
                },
                {
                    "X": 0.13484089076519012,
                    "Y": 0.6576902270317078
                },
                {
                    "X": 0.1348421275615692,
                    "Y": 0.6636918187141418
                },
                {
                    "X": 0.1172972247004509,
                    "Y": 0.6636934876441956
                }
            ]
        },
        "Id": "e30cda20-1545-416f-ac99-48e0d17de044"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.30338287353516,
        "Text": "Kontoinhabers",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07245132327079773,
                "Height": 0.006088142283260822,
                "Left": 0.13829392194747925,
                "Top": 0.6575849652290344
            },
            "Polygon": [
                {
                    "X": 0.13829392194747925,
                    "Y": 0.6575919389724731
                },
                {
                    "X": 0.21074384450912476,
                    "Y": 0.6575849652290344
                },
                {
                    "X": 0.21074524521827698,
                    "Y": 0.6636661887168884
                },
                {
                    "X": 0.13829518854618073,
                    "Y": 0.6636731028556824
                }
            ]
        },
        "Id": "a73ad77e-424f-4961-9feb-94b686f0d649"
    },
    {
        "BlockType": "WORD",
        "Confidence": 84.17265319824219,
        "Text": "EU-/EWR-Staaten",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09423533827066422,
                "Height": 0.006508829537779093,
                "Left": 0.656990110874176,
                "Top": 0.6602746844291687
            },
            "Polygon": [
                {
                    "X": 0.656990110874176,
                    "Y": 0.6602836847305298
                },
                {
                    "X": 0.7512228488922119,
                    "Y": 0.6602746844291687
                },
                {
                    "X": 0.7512254118919373,
                    "Y": 0.666774570941925
                },
                {
                    "X": 0.656992495059967,
                    "Y": 0.6667835116386414
                }
            ]
        },
        "Id": "8e396f56-cb3c-468f-b5ed-f1713754a240"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.2899169921875,
        "Text": "und",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02019580639898777,
                "Height": 0.00636975048109889,
                "Left": 0.7551373243331909,
                "Top": 0.659862756729126
            },
            "Polygon": [
                {
                    "X": 0.7551373243331909,
                    "Y": 0.6598647236824036
                },
                {
                    "X": 0.7753305435180664,
                    "Y": 0.659862756729126
                },
                {
                    "X": 0.7753331065177917,
                    "Y": 0.6662306189537048
                },
                {
                    "X": 0.7551398873329163,
                    "Y": 0.6662325263023376
                }
            ]
        },
        "Id": "975f4eb4-ecce-4734-8f78-8eaf649bb463"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.86882019042969,
        "Text": "in",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008798136375844479,
                "Height": 0.006229755003005266,
                "Left": 0.7795279622077942,
                "Top": 0.6599565148353577
            },
            "Polygon": [
                {
                    "X": 0.7795279622077942,
                    "Y": 0.6599573493003845
                },
                {
                    "X": 0.7883235216140747,
                    "Y": 0.6599565148353577
                },
                {
                    "X": 0.7883260846138,
                    "Y": 0.6661854386329651
                },
                {
                    "X": 0.7795305252075195,
                    "Y": 0.6661862730979919
                }
            ]
        },
        "Id": "66915cbb-e3ec-4eaf-97da-9260831e72ac"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.09076690673828,
        "Text": "die",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.015728943049907684,
                "Height": 0.006384619046002626,
                "Left": 0.7926957607269287,
                "Top": 0.6596671938896179
            },
            "Polygon": [
                {
                    "X": 0.7926957607269287,
                    "Y": 0.6596686840057373
                },
                {
                    "X": 0.8084220290184021,
                    "Y": 0.6596671938896179
                },
                {
                    "X": 0.808424711227417,
                    "Y": 0.6660503149032593
                },
                {
                    "X": 0.7926983833312988,
                    "Y": 0.6660518050193787
                }
            ]
        },
        "Id": "7f87892c-783d-4950-8bba-08f347de6a08"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.25696563720703,
        "Text": "Schweiz",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04612485691905022,
                "Height": 0.006943379528820515,
                "Left": 0.8116925954818726,
                "Top": 0.659377932548523
            },
            "Polygon": [
                {
                    "X": 0.8116925954818726,
                    "Y": 0.6593823432922363
                },
                {
                    "X": 0.8578144311904907,
                    "Y": 0.659377932548523
                },
                {
                    "X": 0.8578174710273743,
                    "Y": 0.6663169264793396
                },
                {
                    "X": 0.8116955161094666,
                    "Y": 0.666321337223053
                }
            ]
        },
        "Id": "6fc8e910-3a0b-4a45-99aa-70cc24b34a95"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.44112396240234,
        "Text": "in",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009204172529280186,
                "Height": 0.006610042881220579,
                "Left": 0.861406683921814,
                "Top": 0.6593444347381592
            },
            "Polygon": [
                {
                    "X": 0.861406683921814,
                    "Y": 0.659345269203186
                },
                {
                    "X": 0.8706079721450806,
                    "Y": 0.6593444347381592
                },
                {
                    "X": 0.8706108927726746,
                    "Y": 0.6659535765647888
                },
                {
                    "X": 0.861409604549408,
                    "Y": 0.6659544706344604
                }
            ]
        },
        "Id": "6dd4f0da-791a-4839-b7ac-9e499a719f04"
    },
    {
        "BlockType": "WORD",
        "Confidence": 92.18622589111328,
        "Text": "Euro.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.027982907369732857,
                "Height": 0.0065529257990419865,
                "Left": 0.8748054504394531,
                "Top": 0.659369945526123
            },
            "Polygon": [
                {
                    "X": 0.8748054504394531,
                    "Y": 0.6593726277351379
                },
                {
                    "X": 0.9027854204177856,
                    "Y": 0.659369945526123
                },
                {
                    "X": 0.9027883410453796,
                    "Y": 0.6659201979637146
                },
                {
                    "X": 0.8748083710670471,
                    "Y": 0.6659228801727295
                }
            ]
        },
        "Id": "1b97fdb2-2e63-425c-9b3d-5f8c9b1fb73e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.23194885253906,
        "Text": "Bitte",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01892595924437046,
                "Height": 0.00564423156902194,
                "Left": 0.6573813557624817,
                "Top": 0.6696556210517883
            },
            "Polygon": [
                {
                    "X": 0.6573813557624817,
                    "Y": 0.6696574091911316
                },
                {
                    "X": 0.6763051748275757,
                    "Y": 0.6696556210517883
                },
                {
                    "X": 0.6763072609901428,
                    "Y": 0.6752980947494507
                },
                {
                    "X": 0.6573834419250488,
                    "Y": 0.675299882888794
                }
            ]
        },
        "Id": "8f5b8583-d275-4eda-a72e-03deaf8faa6f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 86.32949829101562,
        "Text": "Meldepflicht",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.05142594128847122,
                "Height": 0.007233088370412588,
                "Left": 0.6794108152389526,
                "Top": 0.6691640615463257
            },
            "Polygon": [
                {
                    "X": 0.6794108152389526,
                    "Y": 0.6691688895225525
                },
                {
                    "X": 0.730833888053894,
                    "Y": 0.6691640615463257
                },
                {
                    "X": 0.7308367490768433,
                    "Y": 0.6763923764228821
                },
                {
                    "X": 0.6794135570526123,
                    "Y": 0.6763971447944641
                }
            ]
        },
        "Id": "5cf979ea-a50a-4e1d-b2ab-8181e9f6d834"
    },
    {
        "BlockType": "WORD",
        "Confidence": 90.86485290527344,
        "Text": "gemäß",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.030460724607110023,
                "Height": 0.007164089474827051,
                "Left": 0.7340244054794312,
                "Top": 0.6690755486488342
            },
            "Polygon": [
                {
                    "X": 0.7340244054794312,
                    "Y": 0.6690784096717834
                },
                {
                    "X": 0.7644822597503662,
                    "Y": 0.6690755486488342
                },
                {
                    "X": 0.7644851207733154,
                    "Y": 0.6762368083000183
                },
                {
                    "X": 0.7340272665023804,
                    "Y": 0.6762396693229675
                }
            ]
        },
        "Id": "d7c3a53c-3882-43ab-a382-52ef72bf0386"
    },
    {
        "BlockType": "WORD",
        "Confidence": 87.61712646484375,
        "Text": "Außenwirtschaftsverordnung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.1253204643726349,
                "Height": 0.006830921396613121,
                "Left": 0.7671178579330444,
                "Top": 0.6686990857124329
            },
            "Polygon": [
                {
                    "X": 0.7671178579330444,
                    "Y": 0.6687109470367432
                },
                {
                    "X": 0.8924352526664734,
                    "Y": 0.6686990857124329
                },
                {
                    "X": 0.8924382925033569,
                    "Y": 0.6755183339118958
                },
                {
                    "X": 0.7671205997467041,
                    "Y": 0.6755300164222717
                }
            ]
        },
        "Id": "d9103e3c-2f9c-481e-96fd-8d6a3b1d3c1f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 55.20732498168945,
        "Text": "beachten",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04230041056871414,
                "Height": 0.005750544369220734,
                "Left": 0.8958668112754822,
                "Top": 0.6682248115539551
            },
            "Polygon": [
                {
                    "X": 0.8958668112754822,
                    "Y": 0.668228805065155
                },
                {
                    "X": 0.9381645917892456,
                    "Y": 0.6682248115539551
                },
                {
                    "X": 0.9381672739982605,
                    "Y": 0.67397141456604
                },
                {
                    "X": 0.8958693742752075,
                    "Y": 0.6739753484725952
                }
            ]
        },
        "Id": "24f975ae-9a5a-4ef9-86d0-d14704887cf4"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.35669708251953,
        "Text": "Angaben",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.043479107320308685,
                "Height": 0.0069893221370875835,
                "Left": 0.03840003162622452,
                "Top": 0.6964925527572632
            },
            "Polygon": [
                {
                    "X": 0.03840003162622452,
                    "Y": 0.6964964270591736
                },
                {
                    "X": 0.08187781274318695,
                    "Y": 0.6964925527572632
                },
                {
                    "X": 0.0818791389465332,
                    "Y": 0.7034779787063599
                },
                {
                    "X": 0.03840126842260361,
                    "Y": 0.7034818530082703
                }
            ]
        },
        "Id": "4eb0e76c-f6bd-4474-9e75-38493f475d1d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.99578857421875,
        "Text": "zum",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.019953826442360878,
                "Height": 0.004841900430619717,
                "Left": 0.08532105386257172,
                "Top": 0.6974884271621704
            },
            "Polygon": [
                {
                    "X": 0.08532105386257172,
                    "Y": 0.6974902153015137
                },
                {
                    "X": 0.10527391731739044,
                    "Y": 0.6974884271621704
                },
                {
                    "X": 0.10527487844228745,
                    "Y": 0.7023285627365112
                },
                {
                    "X": 0.08532197773456573,
                    "Y": 0.7023303508758545
                }
            ]
        },
        "Id": "3fa341bc-4825-4a4d-bf70-b5adf69a5d73"
    },
    {
        "BlockType": "WORD",
        "Confidence": 88.82263946533203,
        "Text": "Zahlungsempfänger",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09924452751874924,
                "Height": 0.007349201012402773,
                "Left": 0.10815422981977463,
                "Top": 0.696146547794342
            },
            "Polygon": [
                {
                    "X": 0.10815422981977463,
                    "Y": 0.6961554288864136
                },
                {
                    "X": 0.20739707350730896,
                    "Y": 0.696146547794342
                },
                {
                    "X": 0.20739875733852386,
                    "Y": 0.7034869194030762
                },
                {
                    "X": 0.10815569013357162,
                    "Y": 0.7034957408905029
                }
            ]
        },
        "Id": "760e5609-585e-45d8-bf23-93cdd7390394"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.93814086914062,
        "Text": "Angaben",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.041821859776973724,
                "Height": 0.006752790417522192,
                "Left": 0.3327410817146301,
                "Top": 0.7000996470451355
            },
            "Polygon": [
                {
                    "X": 0.3327410817146301,
                    "Y": 0.7001033425331116
                },
                {
                    "X": 0.37456104159355164,
                    "Y": 0.7000996470451355
                },
                {
                    "X": 0.37456294894218445,
                    "Y": 0.7068487405776978
                },
                {
                    "X": 0.3327428996562958,
                    "Y": 0.7068524360656738
                }
            ]
        },
        "Id": "3f9ec173-f01d-4389-ba2f-fadc70cc1c5b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.1554946899414,
        "Text": "zum",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.019096432253718376,
                "Height": 0.004622527398169041,
                "Left": 0.3777296245098114,
                "Top": 0.7012064456939697
            },
            "Polygon": [
                {
                    "X": 0.3777296245098114,
                    "Y": 0.7012081742286682
                },
                {
                    "X": 0.3968247175216675,
                    "Y": 0.7012064456939697
                },
                {
                    "X": 0.3968260586261749,
                    "Y": 0.7058272957801819
                },
                {
                    "X": 0.37773093581199646,
                    "Y": 0.7058289647102356
                }
            ]
        },
        "Id": "df656a76-24f1-4433-be29-b494b318994d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 86.14401245117188,
        "Text": "Zahlungsempfänger:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09653700143098831,
                "Height": 0.007266576401889324,
                "Left": 0.4004237651824951,
                "Top": 0.6997098922729492
            },
            "Polygon": [
                {
                    "X": 0.4004237651824951,
                    "Y": 0.6997184753417969
                },
                {
                    "X": 0.496958464384079,
                    "Y": 0.6997098922729492
                },
                {
                    "X": 0.4969607889652252,
                    "Y": 0.7069679498672485
                },
                {
                    "X": 0.40042588114738464,
                    "Y": 0.7069764137268066
                }
            ]
        },
        "Id": "3369a80c-1cfb-435f-b9f5-05e94e76d6db"
    },
    {
        "BlockType": "WORD",
        "Confidence": 59.79550552368164,
        "Text": "Name,",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.028457824140787125,
                "Height": 0.006545207928866148,
                "Left": 0.5003620982170105,
                "Top": 0.699530303478241
            },
            "Polygon": [
                {
                    "X": 0.5003620982170105,
                    "Y": 0.6995328664779663
                },
                {
                    "X": 0.5288177728652954,
                    "Y": 0.699530303478241
                },
                {
                    "X": 0.5288199186325073,
                    "Y": 0.7060730457305908
                },
                {
                    "X": 0.5003642439842224,
                    "Y": 0.7060755491256714
                }
            ]
        },
        "Id": "b113cdf6-f7b0-4bf8-98df-8238463e15d7"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.67950439453125,
        "Text": "Vorname/Firma",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07124818861484528,
                "Height": 0.006150681059807539,
                "Left": 0.5321798920631409,
                "Top": 0.6990674734115601
            },
            "Polygon": [
                {
                    "X": 0.5321798920631409,
                    "Y": 0.699073851108551
                },
                {
                    "X": 0.6034258604049683,
                    "Y": 0.6990674734115601
                },
                {
                    "X": 0.603428065776825,
                    "Y": 0.705211877822876
                },
                {
                    "X": 0.5321819186210632,
                    "Y": 0.7052181959152222
                }
            ]
        },
        "Id": "f723fbb7-120f-4e08-8b9e-a48c70566058"
    },
    {
        "BlockType": "WORD",
        "Confidence": 66.80838012695312,
        "Text": "(max.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.020555568858981133,
                "Height": 0.006006833631545305,
                "Left": 0.6066949963569641,
                "Top": 0.6997606158256531
            },
            "Polygon": [
                {
                    "X": 0.6066949963569641,
                    "Y": 0.6997624635696411
                },
                {
                    "X": 0.6272484064102173,
                    "Y": 0.6997606158256531
                },
                {
                    "X": 0.627250611782074,
                    "Y": 0.7057656645774841
                },
                {
                    "X": 0.606697142124176,
                    "Y": 0.7057674527168274
                }
            ]
        },
        "Id": "a39071bf-893c-497d-84a0-4302d515441c"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.94760131835938,
        "Text": "27",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008673916570842266,
                "Height": 0.0048302155919373035,
                "Left": 0.630056619644165,
                "Top": 0.6999292373657227
            },
            "Polygon": [
                {
                    "X": 0.630056619644165,
                    "Y": 0.6999300122261047
                },
                {
                    "X": 0.6387287974357605,
                    "Y": 0.6999292373657227
                },
                {
                    "X": 0.638730525970459,
                    "Y": 0.7047587037086487
                },
                {
                    "X": 0.6300584077835083,
                    "Y": 0.7047594785690308
                }
            ]
        },
        "Id": "5205a107-dd0a-4266-be21-0eb101db49d7"
    },
    {
        "BlockType": "WORD",
        "Confidence": 91.4647216796875,
        "Text": "Stellen,",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.028948849067091942,
                "Height": 0.005773546639829874,
                "Left": 0.6416254639625549,
                "Top": 0.6995429992675781
            },
            "Polygon": [
                {
                    "X": 0.6416254639625549,
                    "Y": 0.6995456218719482
                },
                {
                    "X": 0.6705721616744995,
                    "Y": 0.6995429992675781
                },
                {
                    "X": 0.6705743074417114,
                    "Y": 0.7053139805793762
                },
                {
                    "X": 0.6416276097297668,
                    "Y": 0.7053165435791016
                }
            ]
        },
        "Id": "de47e4cc-24d9-4806-9edc-85ba8b4d7893"
    },
    {
        "BlockType": "WORD",
        "Confidence": 83.81666564941406,
        "Text": "bei",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.011464333161711693,
                "Height": 0.00512805487960577,
                "Left": 0.6736820340156555,
                "Top": 0.6992613077163696
            },
            "Polygon": [
                {
                    "X": 0.6736820340156555,
                    "Y": 0.6992623209953308
                },
                {
                    "X": 0.6851443648338318,
                    "Y": 0.6992613077163696
                },
                {
                    "X": 0.6851463317871094,
                    "Y": 0.7043883204460144
                },
                {
                    "X": 0.6736839413642883,
                    "Y": 0.7043893337249756
                }
            ]
        },
        "Id": "3df84aa8-3660-4117-b37d-1852b2cc7cc3"
    },
    {
        "BlockType": "WORD",
        "Confidence": 53.80671691894531,
        "Text": "maschineller",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.049596935510635376,
                "Height": 0.005255511030554771,
                "Left": 0.6881392002105713,
                "Top": 0.6991552114486694
            },
            "Polygon": [
                {
                    "X": 0.6881392002105713,
                    "Y": 0.6991596221923828
                },
                {
                    "X": 0.7377340793609619,
                    "Y": 0.6991552114486694
                },
                {
                    "X": 0.737736165523529,
                    "Y": 0.7044063210487366
                },
                {
                    "X": 0.6881412267684937,
                    "Y": 0.7044106721878052
                }
            ]
        },
        "Id": "79d2a2a8-ef99-418f-b9f9-06dbe9a74c41"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.68685150146484,
        "Text": "Beschriftung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.049923550337553024,
                "Height": 0.00632831547409296,
                "Left": 0.7406700253486633,
                "Top": 0.6987585425376892
            },
            "Polygon": [
                {
                    "X": 0.7406700253486633,
                    "Y": 0.6987630128860474
                },
                {
                    "X": 0.7905909419059753,
                    "Y": 0.6987585425376892
                },
                {
                    "X": 0.7905935645103455,
                    "Y": 0.7050824761390686
                },
                {
                    "X": 0.7406725287437439,
                    "Y": 0.7050868272781372
                }
            ]
        },
        "Id": "fe5121a8-ae66-406b-a2a7-e576741f4d8d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 68.51341247558594,
        "Text": "max",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.017412085086107254,
                "Height": 0.004029935225844383,
                "Left": 0.7935400605201721,
                "Top": 0.6998975276947021
            },
            "Polygon": [
                {
                    "X": 0.7935400605201721,
                    "Y": 0.6998990774154663
                },
                {
                    "X": 0.8109504580497742,
                    "Y": 0.6998975276947021
                },
                {
                    "X": 0.8109521269798279,
                    "Y": 0.7039259076118469
                },
                {
                    "X": 0.7935417294502258,
                    "Y": 0.7039274573326111
                }
            ]
        },
        "Id": "4e814a53-3f9c-4046-a408-9e6f3e36ecd4"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.87340545654297,
        "Text": "35",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0088192168623209,
                "Height": 0.004786854609847069,
                "Left": 0.8141329288482666,
                "Top": 0.6989054679870605
            },
            "Polygon": [
                {
                    "X": 0.8141329288482666,
                    "Y": 0.6989062428474426
                },
                {
                    "X": 0.8229501247406006,
                    "Y": 0.6989054679870605
                },
                {
                    "X": 0.822952151298523,
                    "Y": 0.7036915421485901
                },
                {
                    "X": 0.814134955406189,
                    "Y": 0.7036923170089722
                }
            ]
        },
        "Id": "24aa96ae-8f8a-4419-ae31-c7ed3894fe17"
    },
    {
        "BlockType": "WORD",
        "Confidence": 85.70658874511719,
        "Text": "Stellen)",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.029635822400450706,
                "Height": 0.006099045742303133,
                "Left": 0.8253055810928345,
                "Top": 0.6985933780670166
            },
            "Polygon": [
                {
                    "X": 0.8253055810928345,
                    "Y": 0.6985960006713867
                },
                {
                    "X": 0.8549387454986572,
                    "Y": 0.6985933780670166
                },
                {
                    "X": 0.8549414277076721,
                    "Y": 0.7046898007392883
                },
                {
                    "X": 0.8253082036972046,
                    "Y": 0.7046924233436584
                }
            ]
        },
        "Id": "6d228279-c717-491d-92a4-f4eafeddbc93"
    },
    {
        "BlockType": "WORD",
        "Confidence": 94.60999298095703,
        "Text": "K",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01039933878928423,
                "Height": 0.009612614288926125,
                "Left": 0.33133360743522644,
                "Top": 0.7095651626586914
            },
            "Polygon": [
                {
                    "X": 0.33133360743522644,
                    "Y": 0.709566056728363
                },
                {
                    "X": 0.34173035621643066,
                    "Y": 0.7095651626586914
                },
                {
                    "X": 0.3417329490184784,
                    "Y": 0.7191768884658813
                },
                {
                    "X": 0.33133620023727417,
                    "Y": 0.719177782535553
                }
            ]
        },
        "Id": "9e4b7899-0b2f-401e-9405-d1cdc8d06465"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.06631469726562,
        "Text": "L",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009093600325286388,
                "Height": 0.009108574129641056,
                "Left": 0.35480955243110657,
                "Top": 0.7099184989929199
            },
            "Polygon": [
                {
                    "X": 0.35480955243110657,
                    "Y": 0.709919273853302
                },
                {
                    "X": 0.36390063166618347,
                    "Y": 0.7099184989929199
                },
                {
                    "X": 0.3639031648635864,
                    "Y": 0.7190262675285339
                },
                {
                    "X": 0.3548120856285095,
                    "Y": 0.719027042388916
                }
            ]
        },
        "Id": "6144c3d4-ea44-4b1f-9e5c-b9e5cb2aa7a7"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.7852783203125,
        "Text": "A",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009830478578805923,
                "Height": 0.009249738417565823,
                "Left": 0.37744536995887756,
                "Top": 0.7098195552825928
            },
            "Polygon": [
                {
                    "X": 0.37744536995887756,
                    "Y": 0.7098204493522644
                },
                {
                    "X": 0.38727322220802307,
                    "Y": 0.7098195552825928
                },
                {
                    "X": 0.3872758746147156,
                    "Y": 0.7190684676170349
                },
                {
                    "X": 0.3774479925632477,
                    "Y": 0.7190693020820618
                }
            ]
        },
        "Id": "eba1a4a4-cc54-414f-9791-0e5978f9831c"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.28726196289062,
        "Text": "R",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008769292384386063,
                "Height": 0.009104280732572079,
                "Left": 0.40135160088539124,
                "Top": 0.709832489490509
            },
            "Polygon": [
                {
                    "X": 0.40135160088539124,
                    "Y": 0.7098332643508911
                },
                {
                    "X": 0.4101182222366333,
                    "Y": 0.709832489490509
                },
                {
                    "X": 0.4101209044456482,
                    "Y": 0.7189359664916992
                },
                {
                    "X": 0.40135425329208374,
                    "Y": 0.7189367413520813
                }
            ]
        },
        "Id": "f7605d9a-95d6-4164-bca0-e84db6cf400d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.77828979492188,
        "Text": "N",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0093073146417737,
                "Height": 0.00911747571080923,
                "Left": 0.4234499931335449,
                "Top": 0.7096685767173767
            },
            "Polygon": [
                {
                    "X": 0.4234499931335449,
                    "Y": 0.7096694111824036
                },
                {
                    "X": 0.4327545762062073,
                    "Y": 0.7096685767173767
                },
                {
                    "X": 0.43275731801986694,
                    "Y": 0.7187852263450623
                },
                {
                    "X": 0.4234527051448822,
                    "Y": 0.7187860608100891
                }
            ]
        },
        "Id": "081ac4ac-80fd-4fd8-a0ff-1b09721491c3"
    },
    {
        "BlockType": "WORD",
        "Confidence": 88.5224838256836,
        "Text": "A",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009967365302145481,
                "Height": 0.009320496581494808,
                "Left": 0.44668298959732056,
                "Top": 0.7095844149589539
            },
            "Polygon": [
                {
                    "X": 0.44668298959732056,
                    "Y": 0.7095852494239807
                },
                {
                    "X": 0.45664748549461365,
                    "Y": 0.7095844149589539
                },
                {
                    "X": 0.45665037631988525,
                    "Y": 0.7189040184020996
                },
                {
                    "X": 0.4466858506202698,
                    "Y": 0.7189049124717712
                }
            ]
        },
        "Id": "d39a32c3-d091-48af-a080-7ae17034fee9"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.52265167236328,
        "Text": "IBAN",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024273546412587166,
                "Height": 0.005809295456856489,
                "Left": 0.03626905381679535,
                "Top": 0.7318523526191711
            },
            "Polygon": [
                {
                    "X": 0.03626905381679535,
                    "Y": 0.7318543791770935
                },
                {
                    "X": 0.060541536659002304,
                    "Y": 0.7318523526191711
                },
                {
                    "X": 0.060542602092027664,
                    "Y": 0.7376596331596375
                },
                {
                    "X": 0.036270078271627426,
                    "Y": 0.7376616597175598
                }
            ]
        },
        "Id": "4df09139-4eca-470d-a91b-829ef5afc362"
    },
    {
        "BlockType": "WORD",
        "Confidence": 91.5149917602539,
        "Text": "IBAN",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02281096950173378,
                "Height": 0.005060724448412657,
                "Left": 0.33329635858535767,
                "Top": 0.7294782996177673
            },
            "Polygon": [
                {
                    "X": 0.33329635858535767,
                    "Y": 0.7294802069664001
                },
                {
                    "X": 0.3561059236526489,
                    "Y": 0.7294782996177673
                },
                {
                    "X": 0.35610732436180115,
                    "Y": 0.7345371246337891
                },
                {
                    "X": 0.3332976996898651,
                    "Y": 0.7345390319824219
                }
            ]
        },
        "Id": "9bf12917-88ea-4fbe-9a94-2388b9726f5e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.68878936767578,
        "Text": "D",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.007647838443517685,
                "Height": 0.008713656105101109,
                "Left": 0.33082863688468933,
                "Top": 0.7387272715568542
            },
            "Polygon": [
                {
                    "X": 0.33082863688468933,
                    "Y": 0.738727867603302
                },
                {
                    "X": 0.3384740948677063,
                    "Y": 0.7387272715568542
                },
                {
                    "X": 0.3384764492511749,
                    "Y": 0.7474402785301208
                },
                {
                    "X": 0.33083096146583557,
                    "Y": 0.7474409341812134
                }
            ]
        },
        "Id": "a52c5673-4d74-424a-ae2a-f81b3b0ae549"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.18717956542969,
        "Text": "E",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.007732756435871124,
                "Height": 0.008749844506382942,
                "Left": 0.3493283689022064,
                "Top": 0.7385817170143127
            },
            "Polygon": [
                {
                    "X": 0.3493283689022064,
                    "Y": 0.7385823726654053
                },
                {
                    "X": 0.35705867409706116,
                    "Y": 0.7385817170143127
                },
                {
                    "X": 0.35706111788749695,
                    "Y": 0.7473309636116028
                },
                {
                    "X": 0.34933075308799744,
                    "Y": 0.7473315596580505
                }
            ]
        },
        "Id": "9d913810-8b8a-44f6-809d-adc577d601ec"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.6008529663086,
        "Text": "1",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.006574281025677919,
                "Height": 0.010116088204085827,
                "Left": 0.36796820163726807,
                "Top": 0.7376194596290588
            },
            "Polygon": [
                {
                    "X": 0.36796820163726807,
                    "Y": 0.7376199960708618
                },
                {
                    "X": 0.37453964352607727,
                    "Y": 0.7376194596290588
                },
                {
                    "X": 0.3745424747467041,
                    "Y": 0.7477350234985352
                },
                {
                    "X": 0.3679710328578949,
                    "Y": 0.7477355599403381
                }
            ]
        },
        "Id": "7a6d0241-daa2-44b3-bd59-8302c5808e36"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.71448516845703,
        "Text": "3",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009435350075364113,
                "Height": 0.009801930747926235,
                "Left": 0.3851921260356903,
                "Top": 0.7376418709754944
            },
            "Polygon": [
                {
                    "X": 0.3851921260356903,
                    "Y": 0.7376426458358765
                },
                {
                    "X": 0.39462462067604065,
                    "Y": 0.7376418709754944
                },
                {
                    "X": 0.3946274518966675,
                    "Y": 0.7474430203437805
                },
                {
                    "X": 0.38519492745399475,
                    "Y": 0.7474437952041626
                }
            ]
        },
        "Id": "a18d3135-2f05-41db-b55c-83ae890a2f4a"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.91653442382812,
        "Text": "7",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008179446682333946,
                "Height": 0.009854888543486595,
                "Left": 0.403592586517334,
                "Top": 0.7375490069389343
            },
            "Polygon": [
                {
                    "X": 0.403592586517334,
                    "Y": 0.7375496625900269
                },
                {
                    "X": 0.4117691218852997,
                    "Y": 0.7375490069389343
                },
                {
                    "X": 0.4117720425128937,
                    "Y": 0.7474032044410706
                },
                {
                    "X": 0.4035954475402832,
                    "Y": 0.7474038600921631
                }
            ]
        },
        "Id": "ebff7982-acf6-4940-9af4-eab68123a256"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.70491027832031,
        "Text": "6",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008866066113114357,
                "Height": 0.010246258229017258,
                "Left": 0.4219527840614319,
                "Top": 0.7374281883239746
            },
            "Polygon": [
                {
                    "X": 0.4219527840614319,
                    "Y": 0.7374289035797119
                },
                {
                    "X": 0.43081578612327576,
                    "Y": 0.7374281883239746
                },
                {
                    "X": 0.4308188557624817,
                    "Y": 0.7476736903190613
                },
                {
                    "X": 0.42195582389831543,
                    "Y": 0.7476744055747986
                }
            ]
        },
        "Id": "fc9070cc-7e6c-4f1d-9c56-74c382da681f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 92.5002670288086,
        "Text": "0",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008821078576147556,
                "Height": 0.009964303113520145,
                "Left": 0.4392125606536865,
                "Top": 0.7374768257141113
            },
            "Polygon": [
                {
                    "X": 0.4392125606536865,
                    "Y": 0.7374775409698486
                },
                {
                    "X": 0.44803059101104736,
                    "Y": 0.7374768257141113
                },
                {
                    "X": 0.4480336308479309,
                    "Y": 0.7474403977394104
                },
                {
                    "X": 0.4392155706882477,
                    "Y": 0.7474411129951477
                }
            ]
        },
        "Id": "77d97ad0-1806-4bec-b733-ad797b043c2e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 93.31874084472656,
        "Text": "7",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009160351939499378,
                "Height": 0.009431173093616962,
                "Left": 0.4584033787250519,
                "Top": 0.7373908162117004
            },
            "Polygon": [
                {
                    "X": 0.4584033787250519,
                    "Y": 0.7373915910720825
                },
                {
                    "X": 0.4675607979297638,
                    "Y": 0.7373908162117004
                },
                {
                    "X": 0.4675637483596802,
                    "Y": 0.7468212246894836
                },
                {
                    "X": 0.4584062993526459,
                    "Y": 0.7468219995498657
                }
            ]
        },
        "Id": "8f1d3e47-fe4e-4ea9-9b53-0936a03aa39e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 76.46720123291016,
        "Text": "0",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008164778351783752,
                "Height": 0.009705212898552418,
                "Left": 0.47673115134239197,
                "Top": 0.7372415661811829
            },
            "Polygon": [
                {
                    "X": 0.47673115134239197,
                    "Y": 0.7372422218322754
                },
                {
                    "X": 0.484892874956131,
                    "Y": 0.7372415661811829
                },
                {
                    "X": 0.4848959445953369,
                    "Y": 0.7469460964202881
                },
                {
                    "X": 0.4767342209815979,
                    "Y": 0.7469467520713806
                }
            ]
        },
        "Id": "031356fc-f56e-4fc8-91f5-e931570bb798"
    },
    {
        "BlockType": "WORD",
        "Confidence": 78.27507019042969,
        "Text": "0",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008725064806640148,
                "Height": 0.009724986739456654,
                "Left": 0.4939451515674591,
                "Top": 0.7373443245887756
            },
            "Polygon": [
                {
                    "X": 0.4939451515674591,
                    "Y": 0.7373450398445129
                },
                {
                    "X": 0.5026670694351196,
                    "Y": 0.7373443245887756
                },
                {
                    "X": 0.5026702284812927,
                    "Y": 0.7470685839653015
                },
                {
                    "X": 0.4939482510089874,
                    "Y": 0.7470692992210388
                }
            ]
        },
        "Id": "8c5c74fe-b684-4779-a809-a58469859bf5"
    },
    {
        "BlockType": "WORD",
        "Confidence": 92.65348052978516,
        "Text": "2",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008834418840706348,
                "Height": 0.009818634018301964,
                "Left": 0.5310212969779968,
                "Top": 0.7373619675636292
            },
            "Polygon": [
                {
                    "X": 0.5310212969779968,
                    "Y": 0.7373626828193665
                },
                {
                    "X": 0.5398524403572083,
                    "Y": 0.7373619675636292
                },
                {
                    "X": 0.5398557186126709,
                    "Y": 0.7471798658370972
                },
                {
                    "X": 0.5310245156288147,
                    "Y": 0.7471805810928345
                }
            ]
        },
        "Id": "60ebe34e-bc21-4ba8-92bd-e2573ecbc8fb"
    },
    {
        "BlockType": "WORD",
        "Confidence": 82.47174835205078,
        "Text": "0",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.00876179151237011,
                "Height": 0.009529774077236652,
                "Left": 0.5486878156661987,
                "Top": 0.7372802495956421
            },
            "Polygon": [
                {
                    "X": 0.5486878156661987,
                    "Y": 0.7372809648513794
                },
                {
                    "X": 0.5574463605880737,
                    "Y": 0.7372802495956421
                },
                {
                    "X": 0.5574495792388916,
                    "Y": 0.7468093037605286
                },
                {
                    "X": 0.5486910343170166,
                    "Y": 0.7468100190162659
                }
            ]
        },
        "Id": "02a6b9af-17fd-4cb0-80be-82f391dfdece"
    },
    {
        "BlockType": "WORD",
        "Confidence": 90.683837890625,
        "Text": "5",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008274226449429989,
                "Height": 0.009908411651849747,
                "Left": 0.5673320293426514,
                "Top": 0.7371654510498047
            },
            "Polygon": [
                {
                    "X": 0.5673320293426514,
                    "Y": 0.7371661067008972
                },
                {
                    "X": 0.5756028294563293,
                    "Y": 0.7371654510498047
                },
                {
                    "X": 0.5756062865257263,
                    "Y": 0.7470731735229492
                },
                {
                    "X": 0.5673354268074036,
                    "Y": 0.7470738887786865
                }
            ]
        },
        "Id": "ff95d3e3-3d84-4661-a8b7-b305ebe16f38"
    },
    {
        "BlockType": "WORD",
        "Confidence": 92.896484375,
        "Text": "0",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009458833374083042,
                "Height": 0.01025489903986454,
                "Left": 0.5861313343048096,
                "Top": 0.7368475198745728
            },
            "Polygon": [
                {
                    "X": 0.5861313343048096,
                    "Y": 0.7368482947349548
                },
                {
                    "X": 0.5955865383148193,
                    "Y": 0.7368475198745728
                },
                {
                    "X": 0.5955901741981506,
                    "Y": 0.7471016645431519
                },
                {
                    "X": 0.5861349105834961,
                    "Y": 0.7471024394035339
                }
            ]
        },
        "Id": "c32e34be-e583-4d32-9569-6bb5ddb84577"
    },
    {
        "BlockType": "WORD",
        "Confidence": 91.54317474365234,
        "Text": "0",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.010054980404675007,
                "Height": 0.010300906375050545,
                "Left": 0.6038455963134766,
                "Top": 0.7366918325424194
            },
            "Polygon": [
                {
                    "X": 0.6038455963134766,
                    "Y": 0.7366926670074463
                },
                {
                    "X": 0.613896906375885,
                    "Y": 0.7366918325424194
                },
                {
                    "X": 0.6139005422592163,
                    "Y": 0.7469919323921204
                },
                {
                    "X": 0.6038492321968079,
                    "Y": 0.7469927072525024
                }
            ]
        },
        "Id": "fae0ced4-19d0-450b-b089-74dc895fadcd"
    },
    {
        "BlockType": "WORD",
        "Confidence": 93.74061584472656,
        "Text": "1",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.005444024223834276,
                "Height": 0.010344707407057285,
                "Left": 0.622759222984314,
                "Top": 0.7366372346878052
            },
            "Polygon": [
                {
                    "X": 0.622759222984314,
                    "Y": 0.7366377115249634
                },
                {
                    "X": 0.6281995177268982,
                    "Y": 0.7366372346878052
                },
                {
                    "X": 0.628203272819519,
                    "Y": 0.7469815015792847
                },
                {
                    "X": 0.6227629780769348,
                    "Y": 0.7469819784164429
                }
            ]
        },
        "Id": "ec9c5506-1883-4f30-922e-49095e256f13"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.05746459960938,
        "Text": "5",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008237137459218502,
                "Height": 0.010446648113429546,
                "Left": 0.6402694582939148,
                "Top": 0.7366313934326172
            },
            "Polygon": [
                {
                    "X": 0.6402694582939148,
                    "Y": 0.7366320490837097
                },
                {
                    "X": 0.648502767086029,
                    "Y": 0.7366313934326172
                },
                {
                    "X": 0.6485066413879395,
                    "Y": 0.7470773458480835
                },
                {
                    "X": 0.6402733325958252,
                    "Y": 0.747078001499176
                }
            ]
        },
        "Id": "d77a46ff-fd65-4d0d-a921-6025d77e01fb"
    },
    {
        "BlockType": "WORD",
        "Confidence": 94.59115600585938,
        "Text": "4",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008373819291591644,
                "Height": 0.009639379568397999,
                "Left": 0.6586573719978333,
                "Top": 0.7362223267555237
            },
            "Polygon": [
                {
                    "X": 0.6586573719978333,
                    "Y": 0.736223042011261
                },
                {
                    "X": 0.6670275926589966,
                    "Y": 0.7362223267555237
                },
                {
                    "X": 0.6670312285423279,
                    "Y": 0.7458610534667969
                },
                {
                    "X": 0.6586609482765198,
                    "Y": 0.7458617091178894
                }
            ]
        },
        "Id": "626a7261-d468-4c38-b4a5-be746e3a5158"
    },
    {
        "BlockType": "WORD",
        "Confidence": 94.64297485351562,
        "Text": "0",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009835051372647285,
                "Height": 0.010152940638363361,
                "Left": 0.6774588227272034,
                "Top": 0.7365232706069946
            },
            "Polygon": [
                {
                    "X": 0.6774588227272034,
                    "Y": 0.7365240454673767
                },
                {
                    "X": 0.6872899532318115,
                    "Y": 0.7365232706069946
                },
                {
                    "X": 0.6872938275337219,
                    "Y": 0.7466753721237183
                },
                {
                    "X": 0.677462637424469,
                    "Y": 0.7466762065887451
                }
            ]
        },
        "Id": "0e6d800a-03d7-4e61-aa7f-9eb19a321163"
    },
    {
        "BlockType": "WORD",
        "Confidence": 87.46147155761719,
        "Text": "00",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02535489946603775,
                "Height": 0.010701212100684643,
                "Left": 0.6958983540534973,
                "Top": 0.7360528111457825
            },
            "Polygon": [
                {
                    "X": 0.6958983540534973,
                    "Y": 0.7360548973083496
                },
                {
                    "X": 0.7212490439414978,
                    "Y": 0.7360528111457825
                },
                {
                    "X": 0.7212532758712769,
                    "Y": 0.7467519640922546
                },
                {
                    "X": 0.6959024667739868,
                    "Y": 0.746753990650177
                }
            ]
        },
        "Id": "793570ef-c0fc-475c-81dd-a27f58585dde"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.45423889160156,
        "Text": "BIC",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01565750129520893,
                "Height": 0.005604032892733812,
                "Left": 0.33348286151885986,
                "Top": 0.7580190300941467
            },
            "Polygon": [
                {
                    "X": 0.33348286151885986,
                    "Y": 0.758020281791687
                },
                {
                    "X": 0.3491388261318207,
                    "Y": 0.7580190300941467
                },
                {
                    "X": 0.34914034605026245,
                    "Y": 0.7636218667030334
                },
                {
                    "X": 0.33348435163497925,
                    "Y": 0.7636231184005737
                }
            ]
        },
        "Id": "c6923ec2-5a67-43e6-b009-243195b05eba"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.17271423339844,
        "Text": "des",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01647389680147171,
                "Height": 0.005674963351339102,
                "Left": 0.3525255024433136,
                "Top": 0.7579789161682129
            },
            "Polygon": [
                {
                    "X": 0.3525255024433136,
                    "Y": 0.757980227470398
                },
                {
                    "X": 0.36899781227111816,
                    "Y": 0.7579789161682129
                },
                {
                    "X": 0.3689994215965271,
                    "Y": 0.7636526226997375
                },
                {
                    "X": 0.35252708196640015,
                    "Y": 0.7636538743972778
                }
            ]
        },
        "Id": "87ed8e73-61c7-484a-affd-98e6e1d1338d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 57.53301239013672,
        "Text": "(2",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0071299439296126366,
                "Height": 0.005890309810638428,
                "Left": 0.5516191720962524,
                "Top": 0.7578633427619934
            },
            "Polygon": [
                {
                    "X": 0.5516191720962524,
                    "Y": 0.7578639388084412
                },
                {
                    "X": 0.5587471127510071,
                    "Y": 0.7578633427619934
                },
                {
                    "X": 0.5587491393089294,
                    "Y": 0.7637531161308289
                },
                {
                    "X": 0.5516211986541748,
                    "Y": 0.7637536525726318
                }
            ]
        },
        "Id": "7bc77d6c-5411-4a0f-8b02-707d12c38c20"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.66806030273438,
        "Text": "oder",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01812886819243431,
                "Height": 0.005244656931608915,
                "Left": 0.5610693097114563,
                "Top": 0.7579450011253357
            },
            "Polygon": [
                {
                    "X": 0.5610693097114563,
                    "Y": 0.7579464316368103
                },
                {
                    "X": 0.5791963338851929,
                    "Y": 0.7579450011253357
                },
                {
                    "X": 0.5791981816291809,
                    "Y": 0.7631882429122925
                },
                {
                    "X": 0.5610710978507996,
                    "Y": 0.7631896734237671
                }
            ]
        },
        "Id": "4e6cc9a6-8961-4345-8a8c-46c901725a7a"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.1673583984375,
        "Text": "11",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0074662575498223305,
                "Height": 0.005090373568236828,
                "Left": 0.5817933678627014,
                "Top": 0.7579572796821594
            },
            "Polygon": [
                {
                    "X": 0.5817933678627014,
                    "Y": 0.7579578757286072
                },
                {
                    "X": 0.5892578363418579,
                    "Y": 0.7579572796821594
                },
                {
                    "X": 0.5892596244812012,
                    "Y": 0.7630470991134644
                },
                {
                    "X": 0.5817951560020447,
                    "Y": 0.7630476355552673
                }
            ]
        },
        "Id": "9e7642eb-0ec6-4231-97f7-bafad9766236"
    },
    {
        "BlockType": "WORD",
        "Confidence": 85.30894470214844,
        "Text": "Stellen)",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.029389485716819763,
                "Height": 0.0061655910685658455,
                "Left": 0.5927032232284546,
                "Top": 0.7575553059577942
            },
            "Polygon": [
                {
                    "X": 0.5927032232284546,
                    "Y": 0.7575576305389404
                },
                {
                    "X": 0.6220904588699341,
                    "Y": 0.7575553059577942
                },
                {
                    "X": 0.6220927238464355,
                    "Y": 0.7637186050415039
                },
                {
                    "X": 0.5927053689956665,
                    "Y": 0.7637208700180054
                }
            ]
        },
        "Id": "12df8d5a-98a8-46c0-8397-4b448135b13e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.47799682617188,
        "Text": "BIC",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.016276750713586807,
                "Height": 0.005721508525311947,
                "Left": 0.03704603388905525,
                "Top": 0.7621603012084961
            },
            "Polygon": [
                {
                    "X": 0.03704603388905525,
                    "Y": 0.7621615529060364
                },
                {
                    "X": 0.05332174897193909,
                    "Y": 0.7621603012084961
                },
                {
                    "X": 0.05332278832793236,
                    "Y": 0.7678804993629456
                },
                {
                    "X": 0.037047043442726135,
                    "Y": 0.7678818106651306
                }
            ]
        },
        "Id": "c69d2d1f-6cec-4d10-9104-27951c19bcad"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.61444854736328,
        "Text": "des",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.017677437514066696,
                "Height": 0.005778428167104721,
                "Left": 0.05686385557055473,
                "Top": 0.7620617747306824
            },
            "Polygon": [
                {
                    "X": 0.05686385557055473,
                    "Y": 0.7620631456375122
                },
                {
                    "X": 0.07454020529985428,
                    "Y": 0.7620617747306824
                },
                {
                    "X": 0.07454129308462143,
                    "Y": 0.7678388357162476
                },
                {
                    "X": 0.0568649098277092,
                    "Y": 0.7678402066230774
                }
            ]
        },
        "Id": "bbf7ef0a-3104-4984-90a0-d73fb459dcf0"
    },
    {
        "BlockType": "WORD",
        "Confidence": 84.15499877929688,
        "Text": "Kreditinstituts/Zahlungsdienstleisters",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.1861124187707901,
                "Height": 0.007220862433314323,
                "Left": 0.07742279022932053,
                "Top": 0.7616313099861145
            },
            "Polygon": [
                {
                    "X": 0.07742279022932053,
                    "Y": 0.7616459727287292
                },
                {
                    "X": 0.26353344321250916,
                    "Y": 0.7616313099861145
                },
                {
                    "X": 0.2635352313518524,
                    "Y": 0.7688378095626831
                },
                {
                    "X": 0.07742415368556976,
                    "Y": 0.768852174282074
                }
            ]
        },
        "Id": "639c8b9d-598f-4c7c-9738-5abf365ae358"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.05140686035156,
        "Text": "D",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008643994107842445,
                "Height": 0.008546032942831516,
                "Left": 0.33198970556259155,
                "Top": 0.766976535320282
            },
            "Polygon": [
                {
                    "X": 0.33198970556259155,
                    "Y": 0.7669772505760193
                },
                {
                    "X": 0.340631365776062,
                    "Y": 0.766976535320282
                },
                {
                    "X": 0.34063369035720825,
                    "Y": 0.7755219340324402
                },
                {
                    "X": 0.3319920003414154,
                    "Y": 0.7755225896835327
                }
            ]
        },
        "Id": "4021587d-d51c-4fba-abcb-207a7c64141a"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.50996398925781,
        "Text": "E",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008596282452344894,
                "Height": 0.009074552915990353,
                "Left": 0.3552170693874359,
                "Top": 0.7671826481819153
            },
            "Polygon": [
                {
                    "X": 0.3552170693874359,
                    "Y": 0.7671833038330078
                },
                {
                    "X": 0.36381080746650696,
                    "Y": 0.7671826481819153
                },
                {
                    "X": 0.3638133406639099,
                    "Y": 0.7762565612792969
                },
                {
                    "X": 0.3552195727825165,
                    "Y": 0.7762572169303894
                }
            ]
        },
        "Id": "26f34470-5a4f-4f4a-ad1c-d245b948338f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.8012924194336,
        "Text": "U",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.010024172253906727,
                "Height": 0.00877568032592535,
                "Left": 0.3772556781768799,
                "Top": 0.7668969035148621
            },
            "Polygon": [
                {
                    "X": 0.3772556781768799,
                    "Y": 0.7668976783752441
                },
                {
                    "X": 0.3872773349285126,
                    "Y": 0.7668969035148621
                },
                {
                    "X": 0.3872798681259155,
                    "Y": 0.7756718397140503
                },
                {
                    "X": 0.37725818157196045,
                    "Y": 0.7756726145744324
                }
            ]
        },
        "Id": "1eb62ad6-8d4c-4bd0-89e7-286aa42df523"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.4976806640625,
        "Text": "T",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.010092944838106632,
                "Height": 0.00883512757718563,
                "Left": 0.40063047409057617,
                "Top": 0.7668688893318176
            },
            "Polygon": [
                {
                    "X": 0.40063047409057617,
                    "Y": 0.7668697237968445
                },
                {
                    "X": 0.4107208251953125,
                    "Y": 0.7668688893318176
                },
                {
                    "X": 0.41072341799736023,
                    "Y": 0.7757032513618469
                },
                {
                    "X": 0.4006330370903015,
                    "Y": 0.775704026222229
                }
            ]
        },
        "Id": "e2b14a2e-5b79-4b1e-9a50-3d12faf71880"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.03914642333984,
        "Text": "D",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.007900632917881012,
                "Height": 0.008408644236624241,
                "Left": 0.4242517948150635,
                "Top": 0.7670158743858337
            },
            "Polygon": [
                {
                    "X": 0.4242517948150635,
                    "Y": 0.7670165300369263
                },
                {
                    "X": 0.43214988708496094,
                    "Y": 0.7670158743858337
                },
                {
                    "X": 0.4321524202823639,
                    "Y": 0.7754239439964294
                },
                {
                    "X": 0.42425429821014404,
                    "Y": 0.7754245400428772
                }
            ]
        },
        "Id": "e7c646da-e499-4632-b018-47c358e18829"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.99042510986328,
        "Text": "E",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.00851450301706791,
                "Height": 0.008669707924127579,
                "Left": 0.4479983150959015,
                "Top": 0.7668023705482483
            },
            "Polygon": [
                {
                    "X": 0.4479983150959015,
                    "Y": 0.7668030261993408
                },
                {
                    "X": 0.45651012659072876,
                    "Y": 0.7668023705482483
                },
                {
                    "X": 0.45651280879974365,
                    "Y": 0.7754713892936707
                },
                {
                    "X": 0.4480009377002716,
                    "Y": 0.7754720449447632
                }
            ]
        },
        "Id": "351dc10e-4d11-429f-a665-edf5df05fb61"
    },
    {
        "BlockType": "WORD",
        "Confidence": 94.70719909667969,
        "Text": "M",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009427537210285664,
                "Height": 0.008680940605700016,
                "Left": 0.47016441822052,
                "Top": 0.7667450904846191
            },
            "Polygon": [
                {
                    "X": 0.47016441822052,
                    "Y": 0.7667458057403564
                },
                {
                    "X": 0.47958922386169434,
                    "Y": 0.7667450904846191
                },
                {
                    "X": 0.479591965675354,
                    "Y": 0.7754252552986145
                },
                {
                    "X": 0.4701671302318573,
                    "Y": 0.7754260301589966
                }
            ]
        },
        "Id": "ae692593-a329-47d2-87a7-e81f90aa0782"
    },
    {
        "BlockType": "WORD",
        "Confidence": 93.42618560791016,
        "Text": "M",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009485929273068905,
                "Height": 0.008641323074698448,
                "Left": 0.4934152364730835,
                "Top": 0.7667186260223389
            },
            "Polygon": [
                {
                    "X": 0.4934152364730835,
                    "Y": 0.766719400882721
                },
                {
                    "X": 0.5028983950614929,
                    "Y": 0.7667186260223389
                },
                {
                    "X": 0.5029011368751526,
                    "Y": 0.7753592133522034
                },
                {
                    "X": 0.49341800808906555,
                    "Y": 0.7753599882125854
                }
            ]
        },
        "Id": "0cef5bc8-36c3-4afa-9c07-42691762e77e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 92.3491439819336,
        "Text": "7",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.00869516097009182,
                "Height": 0.00879778154194355,
                "Left": 0.5169429779052734,
                "Top": 0.766260027885437
            },
            "Polygon": [
                {
                    "X": 0.5169429779052734,
                    "Y": 0.7662606835365295
                },
                {
                    "X": 0.5256352424621582,
                    "Y": 0.766260027885437
                },
                {
                    "X": 0.5256381630897522,
                    "Y": 0.7750571370124817
                },
                {
                    "X": 0.5169458389282227,
                    "Y": 0.7750577926635742
                }
            ]
        },
        "Id": "6c843f93-6e1e-4e2f-a6d4-94e15d91ef8e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.47727966308594,
        "Text": "6",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008533977903425694,
                "Height": 0.009281684644520283,
                "Left": 0.5398641228675842,
                "Top": 0.7658597826957703
            },
            "Polygon": [
                {
                    "X": 0.5398641228675842,
                    "Y": 0.7658604383468628
                },
                {
                    "X": 0.5483949780464172,
                    "Y": 0.7658597826957703
                },
                {
                    "X": 0.5483980774879456,
                    "Y": 0.7751408219337463
                },
                {
                    "X": 0.5398672223091125,
                    "Y": 0.7751414775848389
                }
            ]
        },
        "Id": "1e6d0576-f49f-4df6-8d5b-b067161db4be"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.03860473632812,
        "Text": "Betrag:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03456728532910347,
                "Height": 0.0068287840113043785,
                "Left": 0.04391160234808922,
                "Top": 0.785333514213562
            },
            "Polygon": [
                {
                    "X": 0.04391160234808922,
                    "Y": 0.7853360772132874
                },
                {
                    "X": 0.07847759872674942,
                    "Y": 0.785333514213562
                },
                {
                    "X": 0.07847888767719269,
                    "Y": 0.7921597361564636
                },
                {
                    "X": 0.043912820518016815,
                    "Y": 0.792162299156189
                }
            ]
        },
        "Id": "a8e43ed6-c751-4dc1-8905-4284bf4ff0ca"
    },
    {
        "BlockType": "WORD",
        "Confidence": 90.3161849975586,
        "Text": "Euro,",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02495742402970791,
                "Height": 0.0067375702783465385,
                "Left": 0.08307043462991714,
                "Top": 0.7854105234146118
            },
            "Polygon": [
                {
                    "X": 0.08307043462991714,
                    "Y": 0.7854124307632446
                },
                {
                    "X": 0.10802651941776276,
                    "Y": 0.7854105234146118
                },
                {
                    "X": 0.1080278605222702,
                    "Y": 0.7921462655067444
                },
                {
                    "X": 0.08307171612977982,
                    "Y": 0.7921481132507324
                }
            ]
        },
        "Id": "2145169a-0d1a-473e-8c64-591ae0a5b449"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.4768295288086,
        "Text": "Cent",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.022376148030161858,
                "Height": 0.005928324069827795,
                "Left": 0.11191322654485703,
                "Top": 0.7853726744651794
            },
            "Polygon": [
                {
                    "X": 0.11191322654485703,
                    "Y": 0.7853743433952332
                },
                {
                    "X": 0.13428814709186554,
                    "Y": 0.7853726744651794
                },
                {
                    "X": 0.13428936898708344,
                    "Y": 0.7912994027137756
                },
                {
                    "X": 0.11191441118717194,
                    "Y": 0.7913010120391846
                }
            ]
        },
        "Id": "033ec13a-9e16-4edd-bbb4-94b2b8cd875b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.68024444580078,
        "Text": "Betrag:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03279445320367813,
                "Height": 0.006817957386374474,
                "Left": 0.6814655065536499,
                "Top": 0.7815471887588501
            },
            "Polygon": [
                {
                    "X": 0.6814655065536499,
                    "Y": 0.7815496325492859
                },
                {
                    "X": 0.7142573595046997,
                    "Y": 0.7815471887588501
                },
                {
                    "X": 0.7142599821090698,
                    "Y": 0.7883626818656921
                },
                {
                    "X": 0.68146812915802,
                    "Y": 0.7883651256561279
                }
            ]
        },
        "Id": "2121b827-5178-460f-a183-0be107b7febc"
    },
    {
        "BlockType": "WORD",
        "Confidence": 75.24913024902344,
        "Text": "Euro.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024151505902409554,
                "Height": 0.006209454499185085,
                "Left": 0.7181355953216553,
                "Top": 0.7813500761985779
            },
            "Polygon": [
                {
                    "X": 0.7181355953216553,
                    "Y": 0.7813518643379211
                },
                {
                    "X": 0.7422845959663391,
                    "Y": 0.7813500761985779
                },
                {
                    "X": 0.7422870993614197,
                    "Y": 0.7875577211380005
                },
                {
                    "X": 0.7181379795074463,
                    "Y": 0.7875595092773438
                }
            ]
        },
        "Id": "b51acea0-72f7-4723-97d3-a955fc28defb"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.29025268554688,
        "Text": "Cent",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.021243266761302948,
                "Height": 0.005705191288143396,
                "Left": 0.7458783388137817,
                "Top": 0.7812172770500183
            },
            "Polygon": [
                {
                    "X": 0.7458783388137817,
                    "Y": 0.7812188267707825
                },
                {
                    "X": 0.767119288444519,
                    "Y": 0.7812172770500183
                },
                {
                    "X": 0.7671216130256653,
                    "Y": 0.7869208455085754
                },
                {
                    "X": 0.7458806037902832,
                    "Y": 0.7869224548339844
                }
            ]
        },
        "Id": "dab82232-ba27-4448-8fe1-b95283a173d5"
    },
    {
        "BlockType": "WORD",
        "Confidence": 92.63407897949219,
        "Text": "1",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0060011460445821285,
                "Height": 0.009690959937870502,
                "Left": 0.6788927912712097,
                "Top": 0.7909138798713684
            },
            "Polygon": [
                {
                    "X": 0.6788927912712097,
                    "Y": 0.7909142971038818
                },
                {
                    "X": 0.6848902702331543,
                    "Y": 0.7909138798713684
                },
                {
                    "X": 0.6848939657211304,
                    "Y": 0.8006044030189514
                },
                {
                    "X": 0.6788964867591858,
                    "Y": 0.8006048202514648
                }
            ]
        },
        "Id": "43780db8-d6c2-4245-87fb-9fd2babde21a"
    },
    {
        "BlockType": "WORD",
        "Confidence": 88.58051300048828,
        "Text": "1",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.00669016083702445,
                "Height": 0.009840852580964565,
                "Left": 0.7014764547348022,
                "Top": 0.7906739711761475
            },
            "Polygon": [
                {
                    "X": 0.7014764547348022,
                    "Y": 0.7906744480133057
                },
                {
                    "X": 0.708162784576416,
                    "Y": 0.7906739711761475
                },
                {
                    "X": 0.7081665992736816,
                    "Y": 0.8005143404006958
                },
                {
                    "X": 0.7014802098274231,
                    "Y": 0.800514817237854
                }
            ]
        },
        "Id": "16ec4161-d55b-4d21-9958-b067cf65d5bf"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.97892761230469,
        "Text": "5",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008247843943536282,
                "Height": 0.009716266766190529,
                "Left": 0.7479925751686096,
                "Top": 0.7905608415603638
            },
            "Polygon": [
                {
                    "X": 0.7479925751686096,
                    "Y": 0.7905614376068115
                },
                {
                    "X": 0.7562364935874939,
                    "Y": 0.7905608415603638
                },
                {
                    "X": 0.7562404274940491,
                    "Y": 0.8002764582633972
                },
                {
                    "X": 0.74799644947052,
                    "Y": 0.800277054309845
                }
            ]
        },
        "Id": "7c355b96-ad7f-4b67-849d-8299fbca35d0"
    },
    {
        "BlockType": "WORD",
        "Confidence": 92.06990051269531,
        "Text": "4",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009378687478601933,
                "Height": 0.010302920825779438,
                "Left": 0.770792543888092,
                "Top": 0.7901288270950317
            },
            "Polygon": [
                {
                    "X": 0.770792543888092,
                    "Y": 0.790129542350769
                },
                {
                    "X": 0.7801670432090759,
                    "Y": 0.7901288270950317
                },
                {
                    "X": 0.780171275138855,
                    "Y": 0.8004310727119446
                },
                {
                    "X": 0.7707967758178711,
                    "Y": 0.8004317879676819
                }
            ]
        },
        "Id": "4042602d-01e8-4e3d-9844-ab156c4ff38f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 86.80175018310547,
        "Text": "Kunden-Referenznummer",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.11946392804384232,
                "Height": 0.0059138196520507336,
                "Left": 0.32892394065856934,
                "Top": 0.8116231560707092
            },
            "Polygon": [
                {
                    "X": 0.32892394065856934,
                    "Y": 0.8116315007209778
                },
                {
                    "X": 0.4483860731124878,
                    "Y": 0.8116231560707092
                },
                {
                    "X": 0.44838786125183105,
                    "Y": 0.8175287246704102
                },
                {
                    "X": 0.3289255201816559,
                    "Y": 0.8175369501113892
                }
            ]
        },
        "Id": "41feabf2-9d54-44b9-becf-bbbdaa67f2f2"
    },
    {
        "BlockType": "WORD",
        "Confidence": 69.12229919433594,
        "Text": "Verwendungszweck,",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07926318049430847,
                "Height": 0.005847172345966101,
                "Left": 0.45667898654937744,
                "Top": 0.8120561838150024
            },
            "Polygon": [
                {
                    "X": 0.45667898654937744,
                    "Y": 0.8120617866516113
                },
                {
                    "X": 0.5359402298927307,
                    "Y": 0.8120561838150024
                },
                {
                    "X": 0.5359421968460083,
                    "Y": 0.8178979158401489
                },
                {
                    "X": 0.4566807746887207,
                    "Y": 0.8179033994674683
                }
            ]
        },
        "Id": "4975fe53-86ad-4a45-9322-0bb02143c5a7"
    },
    {
        "BlockType": "WORD",
        "Confidence": 91.9637222290039,
        "Text": "ggf.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.014741422608494759,
                "Height": 0.00576624134555459,
                "Left": 0.5386623740196228,
                "Top": 0.8120794892311096
            },
            "Polygon": [
                {
                    "X": 0.5386623740196228,
                    "Y": 0.8120805025100708
                },
                {
                    "X": 0.5534018874168396,
                    "Y": 0.8120794892311096
                },
                {
                    "X": 0.5534037947654724,
                    "Y": 0.8178447484970093
                },
                {
                    "X": 0.5386643409729004,
                    "Y": 0.8178457617759705
                }
            ]
        },
        "Id": "1864f4bc-292c-4078-86ab-2b99a0aeeedd"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.35260772705078,
        "Text": "Name",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.021647999063134193,
                "Height": 0.0046943919733166695,
                "Left": 0.5564364790916443,
                "Top": 0.8120417594909668
            },
            "Polygon": [
                {
                    "X": 0.5564364790916443,
                    "Y": 0.812043309211731
                },
                {
                    "X": 0.5780828595161438,
                    "Y": 0.8120417594909668
                },
                {
                    "X": 0.5780845284461975,
                    "Y": 0.8167346715927124
                },
                {
                    "X": 0.5564380884170532,
                    "Y": 0.8167361617088318
                }
            ]
        },
        "Id": "5899b3ea-e15e-4848-ae63-60e7a46d4e44"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.379150390625,
        "Text": "und",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.014573052525520325,
                "Height": 0.004764142446219921,
                "Left": 0.5810750722885132,
                "Top": 0.8119276165962219
            },
            "Polygon": [
                {
                    "X": 0.5810750722885132,
                    "Y": 0.8119286298751831
                },
                {
                    "X": 0.5956464409828186,
                    "Y": 0.8119276165962219
                },
                {
                    "X": 0.5956481099128723,
                    "Y": 0.8166907429695129
                },
                {
                    "X": 0.5810766816139221,
                    "Y": 0.8166917562484741
                }
            ]
        },
        "Id": "d8769df2-98b0-41af-9f59-443d01d2d042"
    },
    {
        "BlockType": "WORD",
        "Confidence": 81.76519012451172,
        "Text": "Anschrift",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.035350773483514786,
                "Height": 0.004944625776261091,
                "Left": 0.5986670851707458,
                "Top": 0.8118094801902771
            },
            "Polygon": [
                {
                    "X": 0.5986670851707458,
                    "Y": 0.8118119239807129
                },
                {
                    "X": 0.6340160965919495,
                    "Y": 0.8118094801902771
                },
                {
                    "X": 0.6340178847312927,
                    "Y": 0.8167516589164734
                },
                {
                    "X": 0.5986688733100891,
                    "Y": 0.8167541027069092
                }
            ]
        },
        "Id": "6609275b-0d45-4e5a-bbf5-377c85cc622f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.16767120361328,
        "Text": "des",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.013451984152197838,
                "Height": 0.004911354277282953,
                "Left": 0.6364429593086243,
                "Top": 0.8115944862365723
            },
            "Polygon": [
                {
                    "X": 0.6364429593086243,
                    "Y": 0.8115954399108887
                },
                {
                    "X": 0.6498931050300598,
                    "Y": 0.8115944862365723
                },
                {
                    "X": 0.6498949527740479,
                    "Y": 0.8165048956871033
                },
                {
                    "X": 0.6364447474479675,
                    "Y": 0.8165058493614197
                }
            ]
        },
        "Id": "1a31336b-a9cf-4697-b80f-38e116b43de3"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.51237487792969,
        "Text": "Zahlers",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.029613975435495377,
                "Height": 0.005035292822867632,
                "Left": 0.6520197987556458,
                "Top": 0.8112978935241699
            },
            "Polygon": [
                {
                    "X": 0.6520197987556458,
                    "Y": 0.8112999796867371
                },
                {
                    "X": 0.681631863117218,
                    "Y": 0.8112978935241699
                },
                {
                    "X": 0.6816337704658508,
                    "Y": 0.816331148147583
                },
                {
                    "X": 0.6520216464996338,
                    "Y": 0.8163332343101501
                }
            ]
        },
        "Id": "168aeef2-a77e-46d1-86b9-abcb73261979"
    },
    {
        "BlockType": "WORD",
        "Confidence": 44.93513870239258,
        "Text": "(not",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01570533774793148,
                "Height": 0.00557709438726306,
                "Left": 0.6893144249916077,
                "Top": 0.811143696308136
            },
            "Polygon": [
                {
                    "X": 0.6893144249916077,
                    "Y": 0.8111448287963867
                },
                {
                    "X": 0.705017626285553,
                    "Y": 0.811143696308136
                },
                {
                    "X": 0.7050197720527649,
                    "Y": 0.8167197108268738
                },
                {
                    "X": 0.6893165707588196,
                    "Y": 0.8167207837104797
                }
            ]
        },
        "Id": "e7d34236-a2ec-48e3-90c9-9ca228680fb5"
    },
    {
        "BlockType": "WORD",
        "Confidence": 94.32823181152344,
        "Text": "für",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.010508420877158642,
                "Height": 0.005117238499224186,
                "Left": 0.7073970437049866,
                "Top": 0.8110868334770203
            },
            "Polygon": [
                {
                    "X": 0.7073970437049866,
                    "Y": 0.8110875487327576
                },
                {
                    "X": 0.7179034948348999,
                    "Y": 0.8110868334770203
                },
                {
                    "X": 0.7179054617881775,
                    "Y": 0.8162033557891846
                },
                {
                    "X": 0.7073990106582642,
                    "Y": 0.8162040710449219
                }
            ]
        },
        "Id": "da64e18f-7407-441c-9e2d-4c2829eb2a30"
    },
    {
        "BlockType": "WORD",
        "Confidence": 73.44124603271484,
        "Text": "Zahlungsempfänger)",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0810670405626297,
                "Height": 0.006021156907081604,
                "Left": 0.7205355763435364,
                "Top": 0.8109188675880432
            },
            "Polygon": [
                {
                    "X": 0.7205355763435364,
                    "Y": 0.8109245896339417
                },
                {
                    "X": 0.8016000986099243,
                    "Y": 0.8109188675880432
                },
                {
                    "X": 0.8016026020050049,
                    "Y": 0.8169344067573547
                },
                {
                    "X": 0.7205379009246826,
                    "Y": 0.8169400095939636
                }
            ]
        },
        "Id": "54be1dbb-119c-4f18-b435-be95d06684bf"
    },
    {
        "BlockType": "WORD",
        "Confidence": 91.69854736328125,
        "Text": "Kunden-Referenznummer",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.12585967779159546,
                "Height": 0.005768930539488792,
                "Left": 0.03712254762649536,
                "Top": 0.8207778334617615
            },
            "Polygon": [
                {
                    "X": 0.03712254762649536,
                    "Y": 0.8207864761352539
                },
                {
                    "X": 0.16298097372055054,
                    "Y": 0.8207778334617615
                },
                {
                    "X": 0.16298222541809082,
                    "Y": 0.8265382647514343
                },
                {
                    "X": 0.03712356463074684,
                    "Y": 0.8265467882156372
                }
            ]
        },
        "Id": "0615dfc9-910f-4aac-a70f-fca1cc03db31"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.6124267578125,
        "Text": "noch",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.017407530918717384,
                "Height": 0.004795667715370655,
                "Left": 0.040923018008470535,
                "Top": 0.8284391760826111
            },
            "Polygon": [
                {
                    "X": 0.040923018008470535,
                    "Y": 0.8284403681755066
                },
                {
                    "X": 0.05832967162132263,
                    "Y": 0.8284391760826111
                },
                {
                    "X": 0.05833054706454277,
                    "Y": 0.8332337141036987
                },
                {
                    "X": 0.040923867374658585,
                    "Y": 0.8332348465919495
                }
            ]
        },
        "Id": "eaf823ff-1e15-481a-815e-eac93aa05b94"
    },
    {
        "BlockType": "WORD",
        "Confidence": 94.09120178222656,
        "Text": "Verwendungszweck",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07357393950223923,
                "Height": 0.005666608922183514,
                "Left": 0.0608484260737896,
                "Top": 0.8282378315925598
            },
            "Polygon": [
                {
                    "X": 0.0608484260737896,
                    "Y": 0.8282427787780762
                },
                {
                    "X": 0.1344211995601654,
                    "Y": 0.8282378315925598
                },
                {
                    "X": 0.13442236185073853,
                    "Y": 0.8338995575904846
                },
                {
                    "X": 0.06084946542978287,
                    "Y": 0.8339044451713562
                }
            ]
        },
        "Id": "edfa9f80-1a0a-44c8-bd25-628de5499f8d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.068359375,
        "Text": "noch",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.023362714797258377,
                "Height": 0.005923691671341658,
                "Left": 0.32860347628593445,
                "Top": 0.8404085636138916
            },
            "Polygon": [
                {
                    "X": 0.32860347628593445,
                    "Y": 0.840410053730011
                },
                {
                    "X": 0.3519645631313324,
                    "Y": 0.8404085636138916
                },
                {
                    "X": 0.3519662022590637,
                    "Y": 0.8463307619094849
                },
                {
                    "X": 0.328605055809021,
                    "Y": 0.8463322520256042
                }
            ]
        },
        "Id": "cd5266e1-4118-4bf9-94f4-f35573744ae9"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.2578353881836,
        "Text": "Verwendungszweck",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09449177980422974,
                "Height": 0.00710874330252409,
                "Left": 0.35386916995048523,
                "Top": 0.8400782942771912
            },
            "Polygon": [
                {
                    "X": 0.35386916995048523,
                    "Y": 0.8400844931602478
                },
                {
                    "X": 0.44835877418518066,
                    "Y": 0.8400782942771912
                },
                {
                    "X": 0.44836094975471497,
                    "Y": 0.8471810221672058
                },
                {
                    "X": 0.3538711369037628,
                    "Y": 0.8471870422363281
                }
            ]
        },
        "Id": "5a44b654-8653-40a4-950f-38f819ccba39"
    },
    {
        "BlockType": "WORD",
        "Confidence": 67.58860778808594,
        "Text": "(insgesamt",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.043041765689849854,
                "Height": 0.006118426099419594,
                "Left": 0.45129069685935974,
                "Top": 0.8407717943191528
            },
            "Polygon": [
                {
                    "X": 0.45129069685935974,
                    "Y": 0.8407745957374573
                },
                {
                    "X": 0.4943305253982544,
                    "Y": 0.8407717943191528
                },
                {
                    "X": 0.4943324625492096,
                    "Y": 0.846887469291687
                },
                {
                    "X": 0.45129257440567017,
                    "Y": 0.8468902111053467
                }
            ]
        },
        "Id": "9fe5efbf-c077-4360-8d33-e236e871d6ee"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.15363311767578,
        "Text": "max",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.017001096159219742,
                "Height": 0.004428634885698557,
                "Left": 0.4967663586139679,
                "Top": 0.8409388065338135
            },
            "Polygon": [
                {
                    "X": 0.4967663586139679,
                    "Y": 0.8409399390220642
                },
                {
                    "X": 0.5137660503387451,
                    "Y": 0.8409388065338135
                },
                {
                    "X": 0.5137674808502197,
                    "Y": 0.845366358757019
                },
                {
                    "X": 0.4967677891254425,
                    "Y": 0.845367431640625
                }
            ]
        },
        "Id": "2e5f04c1-8ec5-48fb-ac83-f38c6227553b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 92.93753051757812,
        "Text": "2",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.004808272700756788,
                "Height": 0.00455754529684782,
                "Left": 0.5173154473304749,
                "Top": 0.8408244848251343
            },
            "Polygon": [
                {
                    "X": 0.5173154473304749,
                    "Y": 0.8408247828483582
                },
                {
                    "X": 0.5221222043037415,
                    "Y": 0.8408244848251343
                },
                {
                    "X": 0.5221237540245056,
                    "Y": 0.8453816771507263
                },
                {
                    "X": 0.5173169374465942,
                    "Y": 0.845382034778595
                }
            ]
        },
        "Id": "11ae35c8-f84d-494f-a486-bb37fc1ecc42"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.52804565429688,
        "Text": "Zeilen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.023069215938448906,
                "Height": 0.004670454654842615,
                "Left": 0.524686336517334,
                "Top": 0.840602695941925
            },
            "Polygon": [
                {
                    "X": 0.524686336517334,
                    "Y": 0.8406042456626892
                },
                {
                    "X": 0.5477539896965027,
                    "Y": 0.840602695941925
                },
                {
                    "X": 0.5477555394172668,
                    "Y": 0.8452717065811157
                },
                {
                    "X": 0.5246878862380981,
                    "Y": 0.8452731966972351
                }
            ]
        },
        "Id": "b285f2d2-b318-4753-a8c4-d1b8fec86a7a"
    },
    {
        "BlockType": "WORD",
        "Confidence": 92.75225067138672,
        "Text": "à",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.004183855839073658,
                "Height": 0.004743651952594519,
                "Left": 0.5507460236549377,
                "Top": 0.8406035900115967
            },
            "Polygon": [
                {
                    "X": 0.5507460236549377,
                    "Y": 0.8406038880348206
                },
                {
                    "X": 0.5549283027648926,
                    "Y": 0.8406035900115967
                },
                {
                    "X": 0.5549299120903015,
                    "Y": 0.845346987247467
                },
                {
                    "X": 0.5507476329803467,
                    "Y": 0.8453472852706909
                }
            ]
        },
        "Id": "ac51eae9-610b-4308-8056-29581451a682"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.0771255493164,
        "Text": "27",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008088042959570885,
                "Height": 0.004501724150031805,
                "Left": 0.5580173134803772,
                "Top": 0.8408500552177429
            },
            "Polygon": [
                {
                    "X": 0.5580173134803772,
                    "Y": 0.8408505916595459
                },
                {
                    "X": 0.5661038160324097,
                    "Y": 0.8408500552177429
                },
                {
                    "X": 0.5661053657531738,
                    "Y": 0.8453512787818909
                },
                {
                    "X": 0.5580188632011414,
                    "Y": 0.8453518152236938
                }
            ]
        },
        "Id": "07c52e39-2805-462a-a3c5-b412dea9184e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.48059844970703,
        "Text": "Stellen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02841027081012726,
                "Height": 0.0051859403029084206,
                "Left": 0.5689529180526733,
                "Top": 0.8404091000556946
            },
            "Polygon": [
                {
                    "X": 0.5689529180526733,
                    "Y": 0.8404110074043274
                },
                {
                    "X": 0.5973613262176514,
                    "Y": 0.8404091000556946
                },
                {
                    "X": 0.5973631739616394,
                    "Y": 0.8455932140350342
                },
                {
                    "X": 0.5689547061920166,
                    "Y": 0.8455950617790222
                }
            ]
        },
        "Id": "511ed585-daf8-4387-ac7f-bcfc35e0abe2"
    },
    {
        "BlockType": "WORD",
        "Confidence": 70.98625183105469,
        "Text": "be",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.011423061601817608,
                "Height": 0.0048545729368925095,
                "Left": 0.6005694270133972,
                "Top": 0.8402789235115051
            },
            "Polygon": [
                {
                    "X": 0.6005694270133972,
                    "Y": 0.8402796387672424
                },
                {
                    "X": 0.611990749835968,
                    "Y": 0.8402789235115051
                },
                {
                    "X": 0.6119924783706665,
                    "Y": 0.8451327681541443
                },
                {
                    "X": 0.6005711555480957,
                    "Y": 0.8451334834098816
                }
            ]
        },
        "Id": "5bc383e3-f2fa-4760-b2c2-b0683bed81ae"
    },
    {
        "BlockType": "WORD",
        "Confidence": 73.55779266357422,
        "Text": "maschineller",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0496145635843277,
                "Height": 0.004790818318724632,
                "Left": 0.6151080131530762,
                "Top": 0.8402597904205322
            },
            "Polygon": [
                {
                    "X": 0.6151080131530762,
                    "Y": 0.8402630090713501
                },
                {
                    "X": 0.6647207736968994,
                    "Y": 0.8402597904205322
                },
                {
                    "X": 0.6647225618362427,
                    "Y": 0.8450474143028259
                },
                {
                    "X": 0.6151096820831299,
                    "Y": 0.8450506329536438
                }
            ]
        },
        "Id": "bbc29df2-da46-4086-9afb-af1719ba6d33"
    },
    {
        "BlockType": "WORD",
        "Confidence": 91.38103485107422,
        "Text": "Beschriftung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04968368634581566,
                "Height": 0.005619705654680729,
                "Left": 0.6677815914154053,
                "Top": 0.8399798274040222
            },
            "Polygon": [
                {
                    "X": 0.6677815914154053,
                    "Y": 0.8399830460548401
                },
                {
                    "X": 0.7174630761146545,
                    "Y": 0.8399798274040222
                },
                {
                    "X": 0.7174652814865112,
                    "Y": 0.8455963134765625
                },
                {
                    "X": 0.6677837371826172,
                    "Y": 0.8455995321273804
                }
            ]
        },
        "Id": "040b05f8-7eeb-4fcf-8fb1-85923499da3e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 85.72689056396484,
        "Text": "max",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01732357032597065,
                "Height": 0.0037908097729086876,
                "Left": 0.7206948399543762,
                "Top": 0.8408011198043823
            },
            "Polygon": [
                {
                    "X": 0.7206948399543762,
                    "Y": 0.8408022522926331
                },
                {
                    "X": 0.7380169034004211,
                    "Y": 0.8408011198043823
                },
                {
                    "X": 0.7380184531211853,
                    "Y": 0.8445907831192017
                },
                {
                    "X": 0.7206963300704956,
                    "Y": 0.8445919156074524
                }
            ]
        },
        "Id": "13db7ef7-0bf8-4656-b625-2c7813ef42c8"
    },
    {
        "BlockType": "WORD",
        "Confidence": 93.88235473632812,
        "Text": "2",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.004419319797307253,
                "Height": 0.004610312171280384,
                "Left": 0.7413092851638794,
                "Top": 0.8398394584655762
            },
            "Polygon": [
                {
                    "X": 0.7413092851638794,
                    "Y": 0.8398397564888
                },
                {
                    "X": 0.7457267642021179,
                    "Y": 0.8398394584655762
                },
                {
                    "X": 0.745728611946106,
                    "Y": 0.8444494605064392
                },
                {
                    "X": 0.7413111329078674,
                    "Y": 0.8444497585296631
                }
            ]
        },
        "Id": "6b7c14f0-666a-4a50-ae10-5aa915d8bc30"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.76471710205078,
        "Text": "Zeilen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024027882143855095,
                "Height": 0.004815177991986275,
                "Left": 0.7480976581573486,
                "Top": 0.8396637439727783
            },
            "Polygon": [
                {
                    "X": 0.7480976581573486,
                    "Y": 0.8396652936935425
                },
                {
                    "X": 0.7721235752105713,
                    "Y": 0.8396637439727783
                },
                {
                    "X": 0.7721255421638489,
                    "Y": 0.8444773554801941
                },
                {
                    "X": 0.7480995655059814,
                    "Y": 0.8444789052009583
                }
            ]
        },
        "Id": "0215b1fe-659e-43e1-a9e5-745c1ac25b90"
    },
    {
        "BlockType": "WORD",
        "Confidence": 92.38235473632812,
        "Text": "à",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0043256464414298534,
                "Height": 0.004253489896655083,
                "Left": 0.7746618986129761,
                "Top": 0.8400432467460632
            },
            "Polygon": [
                {
                    "X": 0.7746618986129761,
                    "Y": 0.8400435447692871
                },
                {
                    "X": 0.7789857983589172,
                    "Y": 0.8400432467460632
                },
                {
                    "X": 0.7789875268936157,
                    "Y": 0.8442964553833008
                },
                {
                    "X": 0.7746636271476746,
                    "Y": 0.8442967534065247
                }
            ]
        },
        "Id": "51c00e67-c2da-49dd-a8e0-bf79115fdc4b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 74.13602447509766,
        "Text": "35",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008354486897587776,
                "Height": 0.004433616064488888,
                "Left": 0.7815850973129272,
                "Top": 0.8399233222007751
            },
            "Polygon": [
                {
                    "X": 0.7815850973129272,
                    "Y": 0.8399238586425781
                },
                {
                    "X": 0.7899377346038818,
                    "Y": 0.8399233222007751
                },
                {
                    "X": 0.7899395823478699,
                    "Y": 0.8443564176559448
                },
                {
                    "X": 0.7815868854522705,
                    "Y": 0.8443569540977478
                }
            ]
        },
        "Id": "e0823c26-ebe7-435b-b1c8-003f84260157"
    },
    {
        "BlockType": "WORD",
        "Confidence": 48.84010314941406,
        "Text": "Stellen,",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.029263537377119064,
                "Height": 0.005628474988043308,
                "Left": 0.792486310005188,
                "Top": 0.8392676711082458
            },
            "Polygon": [
                {
                    "X": 0.792486310005188,
                    "Y": 0.8392695784568787
                },
                {
                    "X": 0.8217474818229675,
                    "Y": 0.8392676711082458
                },
                {
                    "X": 0.8217498660087585,
                    "Y": 0.844894289970398
                },
                {
                    "X": 0.7924886345863342,
                    "Y": 0.8448961973190308
                }
            ]
        },
        "Id": "65879395-bdf9-41cc-8e7b-f91c0fb0bca6"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.62657165527344,
        "Text": "8",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008957848884165287,
                "Height": 0.009608672000467777,
                "Left": 0.3320087492465973,
                "Top": 0.8475111722946167
            },
            "Polygon": [
                {
                    "X": 0.3320087492465973,
                    "Y": 0.8475117087364197
                },
                {
                    "X": 0.3409639894962311,
                    "Y": 0.8475111722946167
                },
                {
                    "X": 0.3409666121006012,
                    "Y": 0.8571192622184753
                },
                {
                    "X": 0.332011342048645,
                    "Y": 0.8571198582649231
                }
            ]
        },
        "Id": "dbe8562b-f974-41fa-a2ae-9b1e9bd3de55"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.07805633544922,
        "Text": "6",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009569783695042133,
                "Height": 0.009762520901858807,
                "Left": 0.35434621572494507,
                "Top": 0.8474355340003967
            },
            "Polygon": [
                {
                    "X": 0.35434621572494507,
                    "Y": 0.8474361896514893
                },
                {
                    "X": 0.36391329765319824,
                    "Y": 0.8474355340003967
                },
                {
                    "X": 0.3639160096645355,
                    "Y": 0.8571974635124207
                },
                {
                    "X": 0.35434892773628235,
                    "Y": 0.8571980595588684
                }
            ]
        },
        "Id": "6a922f50-b114-4068-ac45-cb39d86f6122"
    },
    {
        "BlockType": "WORD",
        "Confidence": 93.48621368408203,
        "Text": "6",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009755364619195461,
                "Height": 0.009763825684785843,
                "Left": 0.37767231464385986,
                "Top": 0.8473846912384033
            },
            "Polygon": [
                {
                    "X": 0.37767231464385986,
                    "Y": 0.8473853468894958
                },
                {
                    "X": 0.38742488622665405,
                    "Y": 0.8473846912384033
                },
                {
                    "X": 0.3874276876449585,
                    "Y": 0.8571479320526123
                },
                {
                    "X": 0.3776750862598419,
                    "Y": 0.8571485280990601
                }
            ]
        },
        "Id": "53a355a4-71d9-469a-a6dd-d1de19e67584"
    },
    {
        "BlockType": "WORD",
        "Confidence": 91.90522003173828,
        "Text": "8",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009359805844724178,
                "Height": 0.009948493912816048,
                "Left": 0.40098363161087036,
                "Top": 0.847306489944458
            },
            "Polygon": [
                {
                    "X": 0.40098363161087036,
                    "Y": 0.8473070859909058
                },
                {
                    "X": 0.4103405177593231,
                    "Y": 0.847306489944458
                },
                {
                    "X": 0.4103434383869171,
                    "Y": 0.8572543859481812
                },
                {
                    "X": 0.40098652243614197,
                    "Y": 0.8572549819946289
                }
            ]
        },
        "Id": "398b0156-a3b1-4f71-9c2d-3fefc97a3d89"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.89979553222656,
        "Text": "5",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008334520272910595,
                "Height": 0.009918632917106152,
                "Left": 0.4244416356086731,
                "Top": 0.8472732305526733
            },
            "Polygon": [
                {
                    "X": 0.4244416356086731,
                    "Y": 0.8472737669944763
                },
                {
                    "X": 0.4327731728553772,
                    "Y": 0.8472732305526733
                },
                {
                    "X": 0.43277615308761597,
                    "Y": 0.8571913838386536
                },
                {
                    "X": 0.42444461584091187,
                    "Y": 0.8571918606758118
                }
            ]
        },
        "Id": "37450730-c82c-4032-a8de-dd80877068ae"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.11549377441406,
        "Text": "5",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.00825091078877449,
                "Height": 0.009523647837340832,
                "Left": 0.4480486512184143,
                "Top": 0.8476330637931824
            },
            "Polygon": [
                {
                    "X": 0.4480486512184143,
                    "Y": 0.8476336002349854
                },
                {
                    "X": 0.4562966227531433,
                    "Y": 0.8476330637931824
                },
                {
                    "X": 0.4562995731830597,
                    "Y": 0.8571562170982361
                },
                {
                    "X": 0.4480515718460083,
                    "Y": 0.8571566939353943
                }
            ]
        },
        "Id": "43049838-ce3f-4508-a688-d44f6c548f2d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.90298461914062,
        "Text": "6",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008902999572455883,
                "Height": 0.00979720987379551,
                "Left": 0.4707602560520172,
                "Top": 0.8472763895988464
            },
            "Polygon": [
                {
                    "X": 0.4707602560520172,
                    "Y": 0.8472769856452942
                },
                {
                    "X": 0.47966015338897705,
                    "Y": 0.8472763895988464
                },
                {
                    "X": 0.47966325283050537,
                    "Y": 0.8570730686187744
                },
                {
                    "X": 0.47076329588890076,
                    "Y": 0.8570736050605774
                }
            ]
        },
        "Id": "29897be4-0f78-44cf-9886-06c6055597e8"
    },
    {
        "BlockType": "WORD",
        "Confidence": 95.56757354736328,
        "Text": "1",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.006040401291102171,
                "Height": 0.009914527647197247,
                "Left": 0.4942779242992401,
                "Top": 0.8470613956451416
            },
            "Polygon": [
                {
                    "X": 0.4942779242992401,
                    "Y": 0.8470617532730103
                },
                {
                    "X": 0.5003151297569275,
                    "Y": 0.8470613956451416
                },
                {
                    "X": 0.5003183484077454,
                    "Y": 0.8569755554199219
                },
                {
                    "X": 0.4942810833454132,
                    "Y": 0.8569759130477905
                }
            ]
        },
        "Id": "3dc3b617-fbae-4ea7-9d2c-48653e2cbb30"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.9500732421875,
        "Text": "3",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.009294716641306877,
                "Height": 0.00959650706499815,
                "Left": 0.5167158246040344,
                "Top": 0.8471555113792419
            },
            "Polygon": [
                {
                    "X": 0.5167158246040344,
                    "Y": 0.8471561074256897
                },
                {
                    "X": 0.526007354259491,
                    "Y": 0.8471555113792419
                },
                {
                    "X": 0.5260105133056641,
                    "Y": 0.8567514419555664
                },
                {
                    "X": 0.5167189240455627,
                    "Y": 0.8567520380020142
                }
            ]
        },
        "Id": "eff9b28e-aab5-4f63-9bd2-8dfe58567ba0"
    },
    {
        "BlockType": "WORD",
        "Confidence": 90.68177032470703,
        "Text": "0",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008784354664385319,
                "Height": 0.010072215460240841,
                "Left": 0.5401266813278198,
                "Top": 0.846775233745575
            },
            "Polygon": [
                {
                    "X": 0.5401266813278198,
                    "Y": 0.8467757701873779
                },
                {
                    "X": 0.5489076375961304,
                    "Y": 0.846775233745575
                },
                {
                    "X": 0.5489110350608826,
                    "Y": 0.8568468689918518
                },
                {
                    "X": 0.5401300191879272,
                    "Y": 0.8568474054336548
                }
            ]
        },
        "Id": "51502732-d304-4c83-b2d3-cdb7c5e5cc53"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.0777359008789,
        "Text": "4",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.00893404707312584,
                "Height": 0.010167677886784077,
                "Left": 0.5630245208740234,
                "Top": 0.8466667532920837
            },
            "Polygon": [
                {
                    "X": 0.5630245208740234,
                    "Y": 0.8466672897338867
                },
                {
                    "X": 0.5719550251960754,
                    "Y": 0.8466667532920837
                },
                {
                    "X": 0.5719585418701172,
                    "Y": 0.8568338751792908
                },
                {
                    "X": 0.5630279779434204,
                    "Y": 0.8568344116210938
                }
            ]
        },
        "Id": "735a2b41-25ac-450d-91e3-1c14b0aacd81"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.35494232177734,
        "Text": "3",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008676983416080475,
                "Height": 0.009286879561841488,
                "Left": 0.5861571431159973,
                "Top": 0.8472377061843872
            },
            "Polygon": [
                {
                    "X": 0.5861571431159973,
                    "Y": 0.8472382426261902
                },
                {
                    "X": 0.5948308706283569,
                    "Y": 0.8472377061843872
                },
                {
                    "X": 0.5948341488838196,
                    "Y": 0.8565240502357483
                },
                {
                    "X": 0.5861603617668152,
                    "Y": 0.8565245866775513
                }
            ]
        },
        "Id": "ef37051d-83e9-4743-a370-7ac10f7cb509"
    },
    {
        "BlockType": "WORD",
        "Confidence": 87.37178039550781,
        "Text": "9",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008969200775027275,
                "Height": 0.008918026462197304,
                "Left": 0.6090417504310608,
                "Top": 0.8466143608093262
            },
            "Polygon": [
                {
                    "X": 0.6090417504310608,
                    "Y": 0.8466148972511292
                },
                {
                    "X": 0.6180077791213989,
                    "Y": 0.8466143608093262
                },
                {
                    "X": 0.6180109977722168,
                    "Y": 0.8555318117141724
                },
                {
                    "X": 0.6090449690818787,
                    "Y": 0.8555323481559753
                }
            ]
        },
        "Id": "f9760450-37ea-4f10-bd7a-0b0501bd9da2"
    },
    {
        "BlockType": "WORD",
        "Confidence": 97.66956329345703,
        "Text": "Angaben",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04180376976728439,
                "Height": 0.006428449880331755,
                "Left": 0.3330932855606079,
                "Top": 0.8684226870536804
            },
            "Polygon": [
                {
                    "X": 0.3330932855606079,
                    "Y": 0.868425190448761
                },
                {
                    "X": 0.37489524483680725,
                    "Y": 0.8684226870536804
                },
                {
                    "X": 0.3748970627784729,
                    "Y": 0.8748486638069153
                },
                {
                    "X": 0.3330950140953064,
                    "Y": 0.8748511075973511
                }
            ]
        },
        "Id": "3c235eb0-271a-4a40-ad39-ea6b3003425d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.75800323486328,
        "Text": "zum",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.018931707367300987,
                "Height": 0.004262968897819519,
                "Left": 0.3784946799278259,
                "Top": 0.869628369808197
            },
            "Polygon": [
                {
                    "X": 0.3784946799278259,
                    "Y": 0.8696295022964478
                },
                {
                    "X": 0.3974251449108124,
                    "Y": 0.869628369808197
                },
                {
                    "X": 0.3974263668060303,
                    "Y": 0.873890221118927
                },
                {
                    "X": 0.37849587202072144,
                    "Y": 0.8738913536071777
                }
            ]
        },
        "Id": "467561a0-f2c7-40a1-ad0e-e01c89e9892b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 70.08606719970703,
        "Text": "Kontainhaber:",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06772264838218689,
                "Height": 0.005639989860355854,
                "Left": 0.39992421865463257,
                "Top": 0.8685956597328186
            },
            "Polygon": [
                {
                    "X": 0.39992421865463257,
                    "Y": 0.8685997724533081
                },
                {
                    "X": 0.4676451086997986,
                    "Y": 0.8685956597328186
                },
                {
                    "X": 0.46764686703681946,
                    "Y": 0.8742316365242004
                },
                {
                    "X": 0.3999258577823639,
                    "Y": 0.8742356300354004
                }
            ]
        },
        "Id": "819cf739-6a90-4fe6-a3a1-3434c7bec2e3"
    },
    {
        "BlockType": "WORD",
        "Confidence": 90.98590087890625,
        "Text": "Name",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.028583217412233353,
                "Height": 0.006347752641886473,
                "Left": 0.4706393778324127,
                "Top": 0.8679975271224976
            },
            "Polygon": [
                {
                    "X": 0.4706393778324127,
                    "Y": 0.867999255657196
                },
                {
                    "X": 0.4992205500602722,
                    "Y": 0.8679975271224976
                },
                {
                    "X": 0.4992225766181946,
                    "Y": 0.8743435740470886
                },
                {
                    "X": 0.4706413447856903,
                    "Y": 0.8743452429771423
                }
            ]
        },
        "Id": "c15114f5-4bfa-457a-9f29-5c81ba090b17"
    },
    {
        "BlockType": "WORD",
        "Confidence": 81.7568588256836,
        "Text": "Vorname/Firma",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07340658456087112,
                "Height": 0.006217672489583492,
                "Left": 0.5028131008148193,
                "Top": 0.8678587675094604
            },
            "Polygon": [
                {
                    "X": 0.5028131008148193,
                    "Y": 0.8678631782531738
                },
                {
                    "X": 0.5762175917625427,
                    "Y": 0.8678587675094604
                },
                {
                    "X": 0.5762197375297546,
                    "Y": 0.8740720748901367
                },
                {
                    "X": 0.5028151273727417,
                    "Y": 0.8740764260292053
                }
            ]
        },
        "Id": "ca2bcc21-43b0-4521-94b2-063ec35f7a53"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.65065002441406,
        "Text": "Ort",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.014041462913155556,
                "Height": 0.005570927634835243,
                "Left": 0.5803757309913635,
                "Top": 0.867798388004303
            },
            "Polygon": [
                {
                    "X": 0.5803757309913635,
                    "Y": 0.8677992820739746
                },
                {
                    "X": 0.5944152474403381,
                    "Y": 0.867798388004303
                },
                {
                    "X": 0.594417154788971,
                    "Y": 0.873368501663208
                },
                {
                    "X": 0.5803776383399963,
                    "Y": 0.8733693361282349
                }
            ]
        },
        "Id": "33ebc465-6305-4fc7-9660-cc52d265db0e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 80.36641693115234,
        "Text": "(max.",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.020492037758231163,
                "Height": 0.005658388137817383,
                "Left": 0.597303569316864,
                "Top": 0.8685160875320435
            },
            "Polygon": [
                {
                    "X": 0.597303569316864,
                    "Y": 0.8685173392295837
                },
                {
                    "X": 0.6177935600280762,
                    "Y": 0.8685160875320435
                },
                {
                    "X": 0.6177955865859985,
                    "Y": 0.8741732835769653
                },
                {
                    "X": 0.5973055362701416,
                    "Y": 0.8741744756698608
                }
            ]
        },
        "Id": "6f168820-dac6-4685-90db-9709c5ed7345"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.66889190673828,
        "Text": "27",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.008697237819433212,
                "Height": 0.005178376100957394,
                "Left": 0.6208029985427856,
                "Top": 0.8682472109794617
            },
            "Polygon": [
                {
                    "X": 0.6208029985427856,
                    "Y": 0.8682477474212646
                },
                {
                    "X": 0.6294983625411987,
                    "Y": 0.8682472109794617
                },
                {
                    "X": 0.6295002698898315,
                    "Y": 0.8734251260757446
                },
                {
                    "X": 0.6208048462867737,
                    "Y": 0.8734256029129028
                }
            ]
        },
        "Id": "d277ebe9-a157-4a76-b67f-b0132a890f07"
    },
    {
        "BlockType": "WORD",
        "Confidence": 91.82827758789062,
        "Text": "Stellen",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02884104661643505,
                "Height": 0.0057297819294035435,
                "Left": 0.6323265433311462,
                "Top": 0.8682313561439514
            },
            "Polygon": [
                {
                    "X": 0.6323265433311462,
                    "Y": 0.8682331442832947
                },
                {
                    "X": 0.6611654758453369,
                    "Y": 0.8682313561439514
                },
                {
                    "X": 0.6611676216125488,
                    "Y": 0.8739594221115112
                },
                {
                    "X": 0.6323286294937134,
                    "Y": 0.8739611506462097
                }
            ]
        },
        "Id": "775df378-77f6-4a16-9384-da17c0ac5a8e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 90.3650131225586,
        "Text": "keine",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02093508280813694,
                "Height": 0.0049711307510733604,
                "Left": 0.6641221046447754,
                "Top": 0.8682137131690979
            },
            "Polygon": [
                {
                    "X": 0.6641221046447754,
                    "Y": 0.868215024471283
                },
                {
                    "X": 0.6850553154945374,
                    "Y": 0.8682137131690979
                },
                {
                    "X": 0.6850572228431702,
                    "Y": 0.8731836080551147
                },
                {
                    "X": 0.6641239523887634,
                    "Y": 0.873184859752655
                }
            ]
        },
        "Id": "39cb0e78-d3c8-45c8-9a01-f1779ceb85e1"
    },
    {
        "BlockType": "WORD",
        "Confidence": 41.518341064453125,
        "Text": "Stroßen-",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03302763029932976,
                "Height": 0.004892612341791391,
                "Left": 0.6881551146507263,
                "Top": 0.868076741695404
            },
            "Polygon": [
                {
                    "X": 0.6881551146507263,
                    "Y": 0.8680787086486816
                },
                {
                    "X": 0.7211808562278748,
                    "Y": 0.868076741695404
                },
                {
                    "X": 0.7211827635765076,
                    "Y": 0.8729673624038696
                },
                {
                    "X": 0.6881570219993591,
                    "Y": 0.8729693293571472
                }
            ]
        },
        "Id": "1cac397f-55de-4973-9813-68cb16901ce6"
    },
    {
        "BlockType": "WORD",
        "Confidence": 96.79474639892578,
        "Text": "oder",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.017384860664606094,
                "Height": 0.004813523963093758,
                "Left": 0.7234522104263306,
                "Top": 0.8679388761520386
            },
            "Polygon": [
                {
                    "X": 0.7234522104263306,
                    "Y": 0.8679399490356445
                },
                {
                    "X": 0.7408351898193359,
                    "Y": 0.8679388761520386
                },
                {
                    "X": 0.7408370971679688,
                    "Y": 0.8727514147758484
                },
                {
                    "X": 0.7234541177749634,
                    "Y": 0.8727524280548096
                }
            ]
        },
        "Id": "cfbeadc6-9cfc-4d0b-b291-abc62f833967"
    },
    {
        "BlockType": "WORD",
        "Confidence": 82.388427734375,
        "Text": "Postfachangaben)",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07072225958108902,
                "Height": 0.00514858216047287,
                "Left": 0.7439161539077759,
                "Top": 0.8679378628730774
            },
            "Polygon": [
                {
                    "X": 0.7439161539077759,
                    "Y": 0.8679420948028564
                },
                {
                    "X": 0.81463623046875,
                    "Y": 0.8679378628730774
                },
                {
                    "X": 0.8146383762359619,
                    "Y": 0.8730822205543518
                },
                {
                    "X": 0.7439181804656982,
                    "Y": 0.8730863928794861
                }
            ]
        },
        "Id": "a892eb97-6ca6-49aa-9b5d-db72ded0a676"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.12659454345703,
        "Text": "Angaben",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04391653463244438,
                "Height": 0.007127579301595688,
                "Left": 0.03670842573046684,
                "Top": 0.874355673789978
            },
            "Polygon": [
                {
                    "X": 0.03670842573046684,
                    "Y": 0.8743582963943481
                },
                {
                    "X": 0.08062361180782318,
                    "Y": 0.874355673789978
                },
                {
                    "X": 0.08062496036291122,
                    "Y": 0.8814806938171387
                },
                {
                    "X": 0.036709681153297424,
                    "Y": 0.881483256816864
                }
            ]
        },
        "Id": "ef4a3707-3ec4-4325-9072-6a59f681928f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.25434112548828,
        "Text": "zum",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0200491975992918,
                "Height": 0.004724541213363409,
                "Left": 0.08380620926618576,
                "Top": 0.875615656375885
            },
            "Polygon": [
                {
                    "X": 0.08380620926618576,
                    "Y": 0.8756168484687805
                },
                {
                    "X": 0.1038544774055481,
                    "Y": 0.875615656375885
                },
                {
                    "X": 0.10385540872812271,
                    "Y": 0.8803390264511108
                },
                {
                    "X": 0.08380711078643799,
                    "Y": 0.8803402185440063
                }
            ]
        },
        "Id": "26e44816-e40c-4a26-909b-f419a7fb626f"
    },
    {
        "BlockType": "WORD",
        "Confidence": 89.55113220214844,
        "Text": "Kontoinhaber/Zahler",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10001271218061447,
                "Height": 0.0063240062445402145,
                "Left": 0.10764209926128387,
                "Top": 0.874356210231781
            },
            "Polygon": [
                {
                    "X": 0.10764209926128387,
                    "Y": 0.8743621706962585
                },
                {
                    "X": 0.20765335857868195,
                    "Y": 0.874356210231781
                },
                {
                    "X": 0.20765480399131775,
                    "Y": 0.880674421787262
                },
                {
                    "X": 0.10764335095882416,
                    "Y": 0.8806802034378052
                }
            ]
        },
        "Id": "0d49687d-0d38-423f-a84e-5e8c456a6c2d"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.20945739746094,
        "Text": "IBAN",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.022993844002485275,
                "Height": 0.005320412106812,
                "Left": 0.333993136882782,
                "Top": 0.8976134657859802
            },
            "Polygon": [
                {
                    "X": 0.333993136882782,
                    "Y": 0.8976147174835205
                },
                {
                    "X": 0.35698550939559937,
                    "Y": 0.8976134657859802
                },
                {
                    "X": 0.35698699951171875,
                    "Y": 0.9029325842857361
                },
                {
                    "X": 0.3339945673942566,
                    "Y": 0.9029338359832764
                }
            ]
        },
        "Id": "07c59a93-39c8-4ef8-95f3-fb0d1850b039"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.88870239257812,
        "Text": "16",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.021122736856341362,
                "Height": 0.010271705687046051,
                "Left": 0.9129649996757507,
                "Top": 0.9046462178230286
            },
            "Polygon": [
                {
                    "X": 0.9129649996757507,
                    "Y": 0.9046474099159241
                },
                {
                    "X": 0.9340829849243164,
                    "Y": 0.9046462178230286
                },
                {
                    "X": 0.9340877532958984,
                    "Y": 0.9149168133735657
                },
                {
                    "X": 0.9129696488380432,
                    "Y": 0.9149179458618164
                }
            ]
        },
        "Id": "442fe2a4-d2d2-4da7-a548-051b6d04506a"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.98844909667969,
        "Text": "Datum",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.029642224311828613,
                "Height": 0.005516664125025272,
                "Left": 0.33174657821655273,
                "Top": 0.9347564578056335
            },
            "Polygon": [
                {
                    "X": 0.33174657821655273,
                    "Y": 0.9347579479217529
                },
                {
                    "X": 0.3613872528076172,
                    "Y": 0.9347564578056335
                },
                {
                    "X": 0.36138880252838135,
                    "Y": 0.9402717351913452
                },
                {
                    "X": 0.33174803853034973,
                    "Y": 0.9402731657028198
                }
            ]
        },
        "Id": "bbe009af-ee83-494c-97c2-5e21f749bd9e"
    },
    {
        "BlockType": "WORD",
        "Confidence": 93.97171783447266,
        "Text": "Unterschrift(en)",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07314342260360718,
                "Height": 0.007108882535248995,
                "Left": 0.5144945383071899,
                "Top": 0.933878481388092
            },
            "Polygon": [
                {
                    "X": 0.5144945383071899,
                    "Y": 0.9338820576667786
                },
                {
                    "X": 0.5876355171203613,
                    "Y": 0.933878481388092
                },
                {
                    "X": 0.5876379609107971,
                    "Y": 0.9409838318824768
                },
                {
                    "X": 0.5144968628883362,
                    "Y": 0.9409873485565186
                }
            ]
        },
        "Id": "dd3d9cc6-9d46-436b-b37a-2bd004e6dc12"
    },
    {
        "BlockType": "WORD",
        "Confidence": 98.51423645019531,
        "Text": "(Quittung",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04604288563132286,
                "Height": 0.007245320826768875,
                "Left": 0.03456611931324005,
                "Top": 0.9670705199241638
            },
            "Polygon": [
                {
                    "X": 0.03456611931324005,
                    "Y": 0.9670725464820862
                },
                {
                    "X": 0.08060763031244278,
                    "Y": 0.9670705199241638
                },
                {
                    "X": 0.08060900121927261,
                    "Y": 0.9743139147758484
                },
                {
                    "X": 0.03456738963723183,
                    "Y": 0.974315881729126
                }
            ]
        },
        "Id": "670f31fb-f003-4ea4-ac21-cddafc36c654"
    },
    {
        "BlockType": "WORD",
        "Confidence": 99.35012817382812,
        "Text": "bei",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01437421701848507,
                "Height": 0.006034472957253456,
                "Left": 0.0840412899851799,
                "Top": 0.9671152234077454
            },
            "Polygon": [
                {
                    "X": 0.0840412899851799,
                    "Y": 0.9671158790588379
                },
                {
                    "X": 0.09841432422399521,
                    "Y": 0.9671152234077454
                },
                {
                    "X": 0.09841550886631012,
                    "Y": 0.9731490612030029
                },
                {
                    "X": 0.08404244482517242,
                    "Y": 0.9731497168540955
                }
            ]
        },
        "Id": "ac2ff84e-5087-4f68-91ec-07e3f426c65b"
    },
    {
        "BlockType": "WORD",
        "Confidence": 93.92159271240234,
        "Text": "Bareinzahlung)",
        "TextType": "PRINTED",
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0733126774430275,
                "Height": 0.007331030908972025,
                "Left": 0.1022685319185257,
                "Top": 0.9670804142951965
            },
            "Polygon": [
                {
                    "X": 0.1022685319185257,
                    "Y": 0.9670835733413696
                },
                {
                    "X": 0.17557959258556366,
                    "Y": 0.9670804142951965
                },
                {
                    "X": 0.1755812019109726,
                    "Y": 0.9744083285331726
                },
                {
                    "X": 0.1022699698805809,
                    "Y": 0.9744114279747009
                }
            ]
        },
        "Id": "6886be35-4668-4be9-b3fd-05fda095634f"
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 89.90132904052734,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.034344568848609924,
                "Height": 0.008128690533339977,
                "Left": 0.5248706340789795,
                "Top": 0.21982918679714203
            },
            "Polygon": [
                {
                    "X": 0.5248706340789795,
                    "Y": 0.2198350727558136
                },
                {
                    "X": 0.5592123866081238,
                    "Y": 0.21982918679714203
                },
                {
                    "X": 0.5592151880264282,
                    "Y": 0.2279520481824875
                },
                {
                    "X": 0.5248733162879944,
                    "Y": 0.22795788943767548
                }
            ]
        },
        "Id": "2f6d3e92-6bbc-414f-9cea-23a499e758ca",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "67e83abd-d99f-4556-8fa9-4f5af92d4739"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "8397b4c2-6db6-43f9-8009-bb0be752a241"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 89.90132904052734,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.16352440416812897,
                "Height": 0.00856023095548153,
                "Left": 0.7539680600166321,
                "Top": 0.21837642788887024
            },
            "Polygon": [
                {
                    "X": 0.7539680600166321,
                    "Y": 0.21840447187423706
                },
                {
                    "X": 0.9174885749816895,
                    "Y": 0.21837642788887024
                },
                {
                    "X": 0.9174924492835999,
                    "Y": 0.2269088625907898
                },
                {
                    "X": 0.753971517086029,
                    "Y": 0.22693666815757751
                }
            ]
        },
        "Id": "67e83abd-d99f-4556-8fa9-4f5af92d4739",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "c18e257e-935d-4034-90bb-205c1eb41170"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 89.3331069946289,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02302609384059906,
                "Height": 0.008420233614742756,
                "Left": 0.525334358215332,
                "Top": 0.23281624913215637
            },
            "Polygon": [
                {
                    "X": 0.525334358215332,
                    "Y": 0.23282013833522797
                },
                {
                    "X": 0.5483576655387878,
                    "Y": 0.23281624913215637
                },
                {
                    "X": 0.5483604669570923,
                    "Y": 0.24123263359069824
                },
                {
                    "X": 0.5253371596336365,
                    "Y": 0.24123649299144745
                }
            ]
        },
        "Id": "a08efac8-3e9b-43fc-b537-9cdd246ff23a",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "3cb724c7-bd75-4be3-82e4-265930662e9b"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "2e1ed8c1-0f7f-474d-8866-342c22e357e2"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 89.3331069946289,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09608256071805954,
                "Height": 0.008357655256986618,
                "Left": 0.8210389018058777,
                "Top": 0.23088058829307556
            },
            "Polygon": [
                {
                    "X": 0.8210389018058777,
                    "Y": 0.23089686036109924
                },
                {
                    "X": 0.9171176552772522,
                    "Y": 0.23088058829307556
                },
                {
                    "X": 0.9171214699745178,
                    "Y": 0.23922210931777954
                },
                {
                    "X": 0.8210424184799194,
                    "Y": 0.23923823237419128
                }
            ]
        },
        "Id": "3cb724c7-bd75-4be3-82e4-265930662e9b",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "95bac26f-e186-4c2a-981f-8fdf95090d28"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 88.50035858154297,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0834924653172493,
                "Height": 0.009883624501526356,
                "Left": 0.525416374206543,
                "Top": 0.24595993757247925
            },
            "Polygon": [
                {
                    "X": 0.525416374206543,
                    "Y": 0.2459738701581955
                },
                {
                    "X": 0.6089053153991699,
                    "Y": 0.24595993757247925
                },
                {
                    "X": 0.6089088320732117,
                    "Y": 0.255829781293869
                },
                {
                    "X": 0.5254196524620056,
                    "Y": 0.25584354996681213
                }
            ]
        },
        "Id": "13869456-b758-487f-adae-33753d61ee21",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "8fce2a77-bdb0-48a0-98c4-a69aff8e2f92"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "f44d4674-0078-4f5a-9bcf-3f1196fe144b"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 88.50035858154297,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06255857646465302,
                "Height": 0.008896713145077229,
                "Left": 0.8546492457389832,
                "Top": 0.24426428973674774
            },
            "Polygon": [
                {
                    "X": 0.8546492457389832,
                    "Y": 0.24427475035190582
                },
                {
                    "X": 0.9172037839889526,
                    "Y": 0.24426428973674774
                },
                {
                    "X": 0.9172077775001526,
                    "Y": 0.2531506419181824
                },
                {
                    "X": 0.8546530604362488,
                    "Y": 0.2531610131263733
                }
            ]
        },
        "Id": "8fce2a77-bdb0-48a0-98c4-a69aff8e2f92",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "b003a9cf-1d3f-4291-a879-1c9b99c719d2"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 87.86483764648438,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07631054520606995,
                "Height": 0.009442069567739964,
                "Left": 0.5245943665504456,
                "Top": 0.19410105049610138
            },
            "Polygon": [
                {
                    "X": 0.5245943665504456,
                    "Y": 0.19411444664001465
                },
                {
                    "X": 0.6009016036987305,
                    "Y": 0.19410105049610138
                },
                {
                    "X": 0.6009049415588379,
                    "Y": 0.20352983474731445
                },
                {
                    "X": 0.5245974659919739,
                    "Y": 0.20354311168193817
                }
            ]
        },
        "Id": "fa6f8b29-62e2-4961-a24c-4915eba229ee",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "773c1dd3-4f95-4167-ac8b-151e6b7c6f25"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "cb174627-bc26-44a3-81df-ccf60560488e"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 87.86483764648438,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06451535224914551,
                "Height": 0.008210214786231518,
                "Left": 0.8525577783584595,
                "Top": 0.1921575367450714
            },
            "Polygon": [
                {
                    "X": 0.8525577783584595,
                    "Y": 0.19216889142990112
                },
                {
                    "X": 0.9170694351196289,
                    "Y": 0.1921575367450714
                },
                {
                    "X": 0.917073130607605,
                    "Y": 0.20035649836063385
                },
                {
                    "X": 0.852561354637146,
                    "Y": 0.2003677487373352
                }
            ]
        },
        "Id": "773c1dd3-4f95-4167-ac8b-151e6b7c6f25",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "b61fe103-917a-4ffa-a80c-3568bca5a679"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 86.45545196533203,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.1470489203929901,
                "Height": 0.010111975483596325,
                "Left": 0.5393366813659668,
                "Top": 0.2601241171360016
            },
            "Polygon": [
                {
                    "X": 0.5393366813659668,
                    "Y": 0.260148286819458
                },
                {
                    "X": 0.6863817572593689,
                    "Y": 0.2601241171360016
                },
                {
                    "X": 0.6863855719566345,
                    "Y": 0.27021217346191406
                },
                {
                    "X": 0.539340078830719,
                    "Y": 0.2702361047267914
                }
            ]
        },
        "Id": "76abc19e-d9ba-47ec-bc05-5669edee4a31",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "051516c3-5f0b-4feb-af02-f29027cc574c"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "7c58e019-6301-4f05-bd2f-3bb28fb4c584"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 86.45545196533203,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10568934679031372,
                "Height": 0.008718210272490978,
                "Left": 0.8110223412513733,
                "Top": 0.25886303186416626
            },
            "Polygon": [
                {
                    "X": 0.8110223412513733,
                    "Y": 0.2588804066181183
                },
                {
                    "X": 0.9167077541351318,
                    "Y": 0.25886303186416626
                },
                {
                    "X": 0.916711688041687,
                    "Y": 0.26756399869918823
                },
                {
                    "X": 0.8110260367393494,
                    "Y": 0.2675812244415283
                }
            ]
        },
        "Id": "051516c3-5f0b-4feb-af02-f29027cc574c",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "9bb904f8-8ddd-496a-8adb-ed2b91f599ea"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 84.55138397216797,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.5242754817008972,
                "Height": 0.00843055546283722,
                "Left": 0.33189573884010315,
                "Top": 0.6989450454711914
            },
            "Polygon": [
                {
                    "X": 0.33189573884010315,
                    "Y": 0.6989918947219849
                },
                {
                    "X": 0.8561675548553467,
                    "Y": 0.6989450454711914
                },
                {
                    "X": 0.856171190738678,
                    "Y": 0.707329511642456
                },
                {
                    "X": 0.3318979740142822,
                    "Y": 0.7073756456375122
                }
            ]
        },
        "Id": "e8d2b432-1eb0-424d-b48c-a0239e2d119f",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "2148eb80-3f9c-4a0c-b4b2-3e03924e4517"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "3f9ec173-f01d-4389-ba2f-fadc70cc1c5b",
                    "df656a76-24f1-4433-be29-b494b318994d",
                    "3369a80c-1cfb-435f-b9f5-05e94e76d6db",
                    "b113cdf6-f7b0-4bf8-98df-8238463e15d7",
                    "f723fbb7-120f-4e08-8b9e-a48c70566058",
                    "a39071bf-893c-497d-84a0-4302d515441c",
                    "5205a107-dd0a-4266-be21-0eb101db49d7",
                    "de47e4cc-24d9-4806-9edc-85ba8b4d7893",
                    "3df84aa8-3660-4117-b37d-1852b2cc7cc3",
                    "79d2a2a8-ef99-418f-b9f9-06dbe9a74c41",
                    "fe5121a8-ae66-406b-a2a7-e576741f4d8d",
                    "4e814a53-3f9c-4046-a408-9e6f3e36ecd4",
                    "24aa96ae-8f8a-4419-ae31-c7ed3894fe17",
                    "6d228279-c717-491d-92a4-f4eafeddbc93"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 84.55138397216797,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.6074597239494324,
                "Height": 0.017335286363959312,
                "Left": 0.33222976326942444,
                "Top": 0.7066259980201721
            },
            "Polygon": [
                {
                    "X": 0.33222976326942444,
                    "Y": 0.7066794633865356
                },
                {
                    "X": 0.9396815299987793,
                    "Y": 0.7066259980201721
                },
                {
                    "X": 0.9396895170211792,
                    "Y": 0.7239096164703369
                },
                {
                    "X": 0.3322344124317169,
                    "Y": 0.7239612936973572
                }
            ]
        },
        "Id": "2148eb80-3f9c-4a0c-b4b2-3e03924e4517",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "9e4b7899-0b2f-401e-9405-d1cdc8d06465",
                    "6144c3d4-ea44-4b1f-9e5c-b9e5cb2aa7a7",
                    "eba1a4a4-cc54-414f-9791-0e5978f9831c",
                    "f7605d9a-95d6-4164-bca0-e84db6cf400d",
                    "081ac4ac-80fd-4fd8-a0ff-1b09721491c3",
                    "d39a32c3-d091-48af-a080-7ae17034fee9"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 84.31317138671875,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.12025047093629837,
                "Height": 0.010041284374892712,
                "Left": 0.5234287977218628,
                "Top": 0.20701298117637634
            },
            "Polygon": [
                {
                    "X": 0.5234287977218628,
                    "Y": 0.20703382790088654
                },
                {
                    "X": 0.6436755657196045,
                    "Y": 0.20701298117637634
                },
                {
                    "X": 0.6436792612075806,
                    "Y": 0.21703360974788666
                },
                {
                    "X": 0.5234320759773254,
                    "Y": 0.21705426275730133
                }
            ]
        },
        "Id": "c5e5ceed-36a7-4f12-96f4-22be756a8c5e",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "974d8d85-3c43-4773-b270-5466360c31bb"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "69a2fa4c-334b-4cff-b0fa-134a3dd62970"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 84.31317138671875,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03803931921720505,
                "Height": 0.008261609822511673,
                "Left": 0.8793700933456421,
                "Top": 0.2053249329328537
            },
            "Polygon": [
                {
                    "X": 0.8793700933456421,
                    "Y": 0.20533154904842377
                },
                {
                    "X": 0.9174056649208069,
                    "Y": 0.2053249329328537
                },
                {
                    "X": 0.9174094200134277,
                    "Y": 0.21357998251914978
                },
                {
                    "X": 0.8793737292289734,
                    "Y": 0.21358653903007507
                }
            ]
        },
        "Id": "974d8d85-3c43-4773-b270-5466360c31bb",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "a4ce42dc-a79c-44a2-948c-de7c55dc51f2"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 82.88851928710938,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09917624294757843,
                "Height": 0.007222352549433708,
                "Left": 0.6774572730064392,
                "Top": 0.7817564010620117
            },
            "Polygon": [
                {
                    "X": 0.6774572730064392,
                    "Y": 0.7817638516426086
                },
                {
                    "X": 0.7766305804252625,
                    "Y": 0.7817564010620117
                },
                {
                    "X": 0.7766335010528564,
                    "Y": 0.7889714241027832
                },
                {
                    "X": 0.6774600148200989,
                    "Y": 0.7889787554740906
                }
            ]
        },
        "Id": "f6ece164-3ec8-4577-a33b-30f5b3f63935",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "5baf0f35-5417-4af8-82af-0c5a86af5e77"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "2121b827-5178-460f-a183-0be107b7febc",
                    "b51acea0-72f7-4723-97d3-a955fc28defb",
                    "dab82232-ba27-4448-8fe1-b95283a173d5"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 82.88851928710938,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.26456284523010254,
                "Height": 0.017488062381744385,
                "Left": 0.6796594262123108,
                "Top": 0.787440836429596
            },
            "Polygon": [
                {
                    "X": 0.6796594262123108,
                    "Y": 0.7874605059623718
                },
                {
                    "X": 0.9442142248153687,
                    "Y": 0.787440836429596
                },
                {
                    "X": 0.9442222714424133,
                    "Y": 0.8049100637435913
                },
                {
                    "X": 0.6796660423278809,
                    "Y": 0.8049288988113403
                }
            ]
        },
        "Id": "5baf0f35-5417-4af8-82af-0c5a86af5e77",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "43780db8-d6c2-4245-87fb-9fd2babde21a",
                    "16ec4161-d55b-4d21-9958-b067cf65d5bf",
                    "7c355b96-ad7f-4b67-849d-8299fbca35d0",
                    "4042602d-01e8-4e3d-9844-ab156c4ff38f"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 82.26335906982422,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07816914469003677,
                "Height": 0.00811767391860485,
                "Left": 0.07630843669176102,
                "Top": 0.09889371693134308
            },
            "Polygon": [
                {
                    "X": 0.07630843669176102,
                    "Y": 0.09890872240066528
                },
                {
                    "X": 0.1544758528470993,
                    "Y": 0.09889371693134308
                },
                {
                    "X": 0.1544775813817978,
                    "Y": 0.10699649900197983
                },
                {
                    "X": 0.07630996406078339,
                    "Y": 0.10701139271259308
                }
            ]
        },
        "Id": "4a6d7ee2-3d08-4ac3-bf55-1e6ccc3a0c27",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "2734d466-5057-4184-87b3-2debf83e7d31"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "c9d442b3-33a3-4643-bd33-35d60d7ceb7a"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 82.26335906982422,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06378081440925598,
                "Height": 0.008157968521118164,
                "Left": 0.33644455671310425,
                "Top": 0.09853236377239227
            },
            "Polygon": [
                {
                    "X": 0.33644455671310425,
                    "Y": 0.09854460507631302
                },
                {
                    "X": 0.4002230167388916,
                    "Y": 0.09853236377239227
                },
                {
                    "X": 0.40022537112236023,
                    "Y": 0.10667817294597626
                },
                {
                    "X": 0.33644676208496094,
                    "Y": 0.10669033229351044
                }
            ]
        },
        "Id": "2734d466-5057-4184-87b3-2debf83e7d31",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "350e3c6a-2c4e-4365-ac8f-c7799fdd7575"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 81.86620330810547,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.48506832122802734,
                "Height": 0.007729760836809874,
                "Left": 0.3299223482608795,
                "Top": 0.8678334951400757
            },
            "Polygon": [
                {
                    "X": 0.3299223482608795,
                    "Y": 0.8678628206253052
                },
                {
                    "X": 0.8149874210357666,
                    "Y": 0.8678334951400757
                },
                {
                    "X": 0.8149906396865845,
                    "Y": 0.8755345940589905
                },
                {
                    "X": 0.32992440462112427,
                    "Y": 0.8755632638931274
                }
            ]
        },
        "Id": "f3afdeaf-1028-4209-a780-2b1f84cc6556",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "6d6cb38e-dfd1-42c7-a29e-cc381a4ac857"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "3c235eb0-271a-4a40-ad39-ea6b3003425d",
                    "467561a0-f2c7-40a1-ad0e-e01c89e9892b",
                    "819cf739-6a90-4fe6-a3a1-3434c7bec2e3",
                    "c15114f5-4bfa-457a-9f29-5c81ba090b17",
                    "ca2bcc21-43b0-4521-94b2-063ec35f7a53",
                    "33ebc465-6305-4fc7-9660-cc52d265db0e",
                    "6f168820-dac6-4685-90db-9709c5ed7345",
                    "d277ebe9-a157-4a76-b67f-b0132a890f07",
                    "775df378-77f6-4a16-9384-da17c0ac5a8e",
                    "39cb0e78-d3c8-45c8-9a01-f1779ceb85e1",
                    "1cac397f-55de-4973-9813-68cb16901ce6",
                    "cfbeadc6-9cfc-4d0b-b291-abc62f833967",
                    "a892eb97-6ca6-49aa-9b5d-db72ded0a676"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 81.86620330810547,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.6079332828521729,
                "Height": 0.017625605687499046,
                "Left": 0.3356349766254425,
                "Top": 0.875001072883606
            },
            "Polygon": [
                {
                    "X": 0.3356349766254425,
                    "Y": 0.8750370740890503
                },
                {
                    "X": 0.9435601234436035,
                    "Y": 0.875001072883606
                },
                {
                    "X": 0.943568229675293,
                    "Y": 0.8925924897193909
                },
                {
                    "X": 0.33563974499702454,
                    "Y": 0.8926266431808472
                }
            ]
        },
        "Id": "6d6cb38e-dfd1-42c7-a29e-cc381a4ac857",
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 81.742919921875,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.29039299488067627,
                "Height": 0.007295289542526007,
                "Left": 0.33368614315986633,
                "Top": 0.7575300931930542
            },
            "Polygon": [
                {
                    "X": 0.33368614315986633,
                    "Y": 0.7575531601905823
                },
                {
                    "X": 0.6240764856338501,
                    "Y": 0.7575300931930542
                },
                {
                    "X": 0.624079167842865,
                    "Y": 0.7648026943206787
                },
                {
                    "X": 0.3336881101131439,
                    "Y": 0.7648254036903381
                }
            ]
        },
        "Id": "99e1216f-9136-43d5-9af2-675e0cb44530",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "877b702b-98dc-4c49-9bd7-1e6af199ff1f"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "c6923ec2-5a67-43e6-b009-243195b05eba",
                    "87ed8e73-61c7-484a-affd-98e6e1d1338d",
                    "7bc77d6c-5411-4a0f-8b02-707d12c38c20",
                    "4e6cc9a6-8961-4345-8a8c-46c901725a7a",
                    "9e7642eb-0ec6-4231-97f7-bafad9766236",
                    "12df8d5a-98a8-46c0-8397-4b448135b13e"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 81.742919921875,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.24119161069393158,
                "Height": 0.012948726303875446,
                "Left": 0.33217811584472656,
                "Top": 0.7660092115402222
            },
            "Polygon": [
                {
                    "X": 0.33217811584472656,
                    "Y": 0.7660279870033264
                },
                {
                    "X": 0.5733652710914612,
                    "Y": 0.7660092115402222
                },
                {
                    "X": 0.5733696818351746,
                    "Y": 0.7789396643638611
                },
                {
                    "X": 0.33218157291412354,
                    "Y": 0.7789579033851624
                }
            ]
        },
        "Id": "877b702b-98dc-4c49-9bd7-1e6af199ff1f",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "4021587d-d51c-4fba-abcb-207a7c64141a",
                    "26f34470-5a4f-4f4a-ad1c-d245b948338f",
                    "1eb62ad6-8d4c-4bd0-89e7-286aa42df523",
                    "e2b14a2e-5b79-4b1e-9a50-3d12faf71880",
                    "e7c646da-e499-4632-b018-47c358e18829",
                    "351dc10e-4d11-429f-a665-edf5df05fb61",
                    "ae692593-a329-47d2-87a7-e81f90aa0782",
                    "0cef5bc8-36c3-4afa-9c07-42691762e77e",
                    "6c843f93-6e1e-4e2f-a6d4-94e15d91ef8e",
                    "1e6d0576-f49f-4df6-8d5b-b067161db4be"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 80.93882751464844,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10592946410179138,
                "Height": 0.009180973283946514,
                "Left": 0.7148177027702332,
                "Top": 0.47769975662231445
            },
            "Polygon": [
                {
                    "X": 0.7148177027702332,
                    "Y": 0.4777132272720337
                },
                {
                    "X": 0.8207433223724365,
                    "Y": 0.47769975662231445
                },
                {
                    "X": 0.8207471966743469,
                    "Y": 0.48686742782592773
                },
                {
                    "X": 0.7148212790489197,
                    "Y": 0.48688074946403503
                }
            ]
        },
        "Id": "61e433b4-7206-4afa-8489-6b0529e1c433",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "70bfc0c7-1734-4121-a06e-4a2be77bb707"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "e7bcfa3a-ade7-4e91-8ba3-343c27983b53"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 80.93882751464844,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03580227121710777,
                "Height": 0.010117816738784313,
                "Left": 0.8834980726242065,
                "Top": 0.47707393765449524
            },
            "Polygon": [
                {
                    "X": 0.8834980726242065,
                    "Y": 0.47707849740982056
                },
                {
                    "X": 0.9192957878112793,
                    "Y": 0.47707393765449524
                },
                {
                    "X": 0.919300377368927,
                    "Y": 0.4871872663497925
                },
                {
                    "X": 0.8835026025772095,
                    "Y": 0.487191766500473
                }
            ]
        },
        "Id": "70bfc0c7-1734-4121-a06e-4a2be77bb707",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "e6699393-9a70-414d-9420-0e9fd33d4c64"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 79.43860626220703,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.030660521239042282,
                "Height": 0.006333641242235899,
                "Left": 0.33227255940437317,
                "Top": 0.9346692562103271
            },
            "Polygon": [
                {
                    "X": 0.33227255940437317,
                    "Y": 0.9346707463264465
                },
                {
                    "X": 0.3629313111305237,
                    "Y": 0.9346692562103271
                },
                {
                    "X": 0.36293306946754456,
                    "Y": 0.9410014152526855
                },
                {
                    "X": 0.33227425813674927,
                    "Y": 0.9410029053688049
                }
            ]
        },
        "Id": "172a8945-c2ce-422e-8fc2-9e3dbb3394b3",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "d7dbfc09-0204-4e36-9d6f-d4f9f07e44ea"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "bbe009af-ee83-494c-97c2-5e21f749bd9e"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 79.43860626220703,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.1570914387702942,
                "Height": 0.0239277221262455,
                "Left": 0.32894787192344666,
                "Top": 0.9445924162864685
            },
            "Polygon": [
                {
                    "X": 0.32894787192344666,
                    "Y": 0.9445998668670654
                },
                {
                    "X": 0.486031711101532,
                    "Y": 0.9445924162864685
                },
                {
                    "X": 0.48603931069374084,
                    "Y": 0.9685133099555969
                },
                {
                    "X": 0.32895427942276,
                    "Y": 0.9685201048851013
                }
            ]
        },
        "Id": "d7dbfc09-0204-4e36-9d6f-d4f9f07e44ea",
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 78.21686553955078,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.12744298577308655,
                "Height": 0.01495108287781477,
                "Left": 0.03668702393770218,
                "Top": 0.8203014135360718
            },
            "Polygon": [
                {
                    "X": 0.03668702393770218,
                    "Y": 0.8203101754188538
                },
                {
                    "X": 0.16412678360939026,
                    "Y": 0.8203014135360718
                },
                {
                    "X": 0.16413000226020813,
                    "Y": 0.8352440595626831
                },
                {
                    "X": 0.03668965399265289,
                    "Y": 0.8352525234222412
                }
            ]
        },
        "Id": "5c113af2-b8bd-4477-9905-10eeab13fd99",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "4223a0e9-e81b-4554-9d28-0bf97a7c9094"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "0615dfc9-910f-4aac-a70f-fca1cc03db31",
                    "eaf823ff-1e15-481a-815e-eac93aa05b94",
                    "edfa9f80-1a0a-44c8-bd25-628de5499f8d"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 78.21686553955078,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.23276060819625854,
                "Height": 0.031983401626348495,
                "Left": 0.035627804696559906,
                "Top": 0.8374088406562805
            },
            "Polygon": [
                {
                    "X": 0.035627804696559906,
                    "Y": 0.837424099445343
                },
                {
                    "X": 0.26838046312332153,
                    "Y": 0.8374088406562805
                },
                {
                    "X": 0.26838842034339905,
                    "Y": 0.8693782091140747
                },
                {
                    "X": 0.03563341870903969,
                    "Y": 0.8693922162055969
                }
            ]
        },
        "Id": "4223a0e9-e81b-4554-9d28-0bf97a7c9094",
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 78.11277770996094,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.4755088984966278,
                "Height": 0.007339946459978819,
                "Left": 0.3276548981666565,
                "Top": 0.8114869594573975
            },
            "Polygon": [
                {
                    "X": 0.3276548981666565,
                    "Y": 0.8115202784538269
                },
                {
                    "X": 0.8031607270240784,
                    "Y": 0.8114869594573975
                },
                {
                    "X": 0.8031637668609619,
                    "Y": 0.8187941908836365
                },
                {
                    "X": 0.3276568353176117,
                    "Y": 0.8188269138336182
                }
            ]
        },
        "Id": "213bb47d-f6d8-4163-afa5-5171b30a9711",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "66ebc1d0-f4e3-495d-a921-6ec6e44b4f33"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "41feabf2-9d54-44b9-becf-bbbdaa67f2f2",
                    "4975fe53-86ad-4a45-9322-0bb02143c5a7",
                    "1864f4bc-292c-4078-86ab-2b99a0aeeedd",
                    "5899b3ea-e15e-4848-ae63-60e7a46d4e44",
                    "d8769df2-98b0-41af-9f59-443d01d2d042",
                    "6609275b-0d45-4e5a-bbf5-377c85cc622f",
                    "1a31336b-a9cf-4697-b80f-38e116b43de3",
                    "168aeef2-a77e-46d1-86b9-abcb73261979",
                    "e7d34236-a2ec-48e3-90c9-9ca228680fb5",
                    "da64e18f-7407-441c-9e2d-4c2829eb2a30",
                    "54be1dbb-119c-4f18-b435-be95d06684bf"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 78.11277770996094,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.6148384809494019,
                "Height": 0.017660897225141525,
                "Left": 0.329504132270813,
                "Top": 0.8183364868164062
            },
            "Polygon": [
                {
                    "X": 0.329504132270813,
                    "Y": 0.8183788657188416
                },
                {
                    "X": 0.9443344473838806,
                    "Y": 0.8183364868164062
                },
                {
                    "X": 0.9443426132202148,
                    "Y": 0.8359568119049072
                },
                {
                    "X": 0.32950884103775024,
                    "Y": 0.8359973430633545
                }
            ]
        },
        "Id": "66ebc1d0-f4e3-495d-a921-6ec6e44b4f33",
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 77.16024780273438,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.17146623134613037,
                "Height": 0.007788049057126045,
                "Left": 0.03728227689862251,
                "Top": 0.8744247555732727
            },
            "Polygon": [
                {
                    "X": 0.03728227689862251,
                    "Y": 0.8744349479675293
                },
                {
                    "X": 0.20874671638011932,
                    "Y": 0.8744247555732727
                },
                {
                    "X": 0.20874851942062378,
                    "Y": 0.8822028636932373
                },
                {
                    "X": 0.03728364780545235,
                    "Y": 0.8822128176689148
                }
            ]
        },
        "Id": "905005fc-2b28-4a38-89af-61a1b81757de",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "18b178bc-8fa8-4487-9534-58697b7430eb"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "ef4a3707-3ec4-4325-9072-6a59f681928f",
                    "26e44816-e40c-4a26-909b-f419a7fb626f",
                    "0d49687d-0d38-423f-a84e-5e8c456a6c2d"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 77.16024780273438,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.23459658026695251,
                "Height": 0.04223259165883064,
                "Left": 0.034898918122053146,
                "Top": 0.8853355050086975
            },
            "Polygon": [
                {
                    "X": 0.034898918122053146,
                    "Y": 0.8853490352630615
                },
                {
                    "X": 0.2694849669933319,
                    "Y": 0.8853355050086975
                },
                {
                    "X": 0.26949551701545715,
                    "Y": 0.9275563359260559
                },
                {
                    "X": 0.03490632399916649,
                    "Y": 0.9275681376457214
                }
            ]
        },
        "Id": "18b178bc-8fa8-4487-9534-58697b7430eb",
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 76.32088470458984,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024756943807005882,
                "Height": 0.006769736297428608,
                "Left": 0.036862149834632874,
                "Top": 0.7316234111785889
            },
            "Polygon": [
                {
                    "X": 0.036862149834632874,
                    "Y": 0.7316254377365112
                },
                {
                    "X": 0.06161784753203392,
                    "Y": 0.7316234111785889
                },
                {
                    "X": 0.061619095504283905,
                    "Y": 0.738391101360321
                },
                {
                    "X": 0.03686334192752838,
                    "Y": 0.7383931279182434
                }
            ]
        },
        "Id": "09273a5a-51bf-4133-a0a3-f6bbeccc6e7a",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "87d626ec-8374-4495-a702-8da7f405b589"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "4df09139-4eca-470d-a91b-829ef5afc362"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 76.32088470458984,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.23462246358394623,
                "Height": 0.016623126342892647,
                "Left": 0.03550517186522484,
                "Top": 0.7411445379257202
            },
            "Polygon": [
                {
                    "X": 0.03550517186522484,
                    "Y": 0.7411637902259827
                },
                {
                    "X": 0.2701234817504883,
                    "Y": 0.7411445379257202
                },
                {
                    "X": 0.27012762427330017,
                    "Y": 0.7577490210533142
                },
                {
                    "X": 0.035508088767528534,
                    "Y": 0.7577676177024841
                }
            ]
        },
        "Id": "87d626ec-8374-4495-a702-8da7f405b589",
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 75.57659149169922,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02410183660686016,
                "Height": 0.006308582611382008,
                "Left": 0.3330422639846802,
                "Top": 0.7293017506599426
            },
            "Polygon": [
                {
                    "X": 0.3330422639846802,
                    "Y": 0.729303777217865
                },
                {
                    "X": 0.3571423590183258,
                    "Y": 0.7293017506599426
                },
                {
                    "X": 0.3571441173553467,
                    "Y": 0.7356082797050476
                },
                {
                    "X": 0.3330439627170563,
                    "Y": 0.73561030626297
                }
            ]
        },
        "Id": "3e76dd02-5046-429f-ad0a-f35b7515f49a",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "746e9a41-9caf-4537-92ff-797b0ee8bd38"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "9bf12917-88ea-4fbe-9a94-2388b9726f5e"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 75.57659149169922,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.608425498008728,
                "Height": 0.015617979690432549,
                "Left": 0.3326680660247803,
                "Top": 0.7367159724235535
            },
            "Polygon": [
                {
                    "X": 0.3326680660247803,
                    "Y": 0.7367663979530334
                },
                {
                    "X": 0.9410863518714905,
                    "Y": 0.7367159724235535
                },
                {
                    "X": 0.9410935640335083,
                    "Y": 0.7522851228713989
                },
                {
                    "X": 0.33267223834991455,
                    "Y": 0.75233393907547
                }
            ]
        },
        "Id": "746e9a41-9caf-4537-92ff-797b0ee8bd38",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "a52c5673-4d74-424a-ae2a-f81b3b0ae549",
                    "9d913810-8b8a-44f6-809d-adc577d601ec",
                    "7a6d0241-daa2-44b3-bd59-8302c5808e36",
                    "a18d3135-2f05-41db-b55c-83ae890a2f4a",
                    "ebff7982-acf6-4940-9af4-eab68123a256",
                    "fc9070cc-7e6c-4f1d-9c56-74c382da681f",
                    "77d97ad0-1806-4bec-b733-ad797b043c2e",
                    "8f1d3e47-fe4e-4ea9-9b53-0936a03aa39e",
                    "031356fc-f56e-4fc8-91f5-e931570bb798",
                    "8c5c74fe-b684-4779-a809-a58469859bf5",
                    "60ebe34e-bc21-4ba8-92bd-e2573ecbc8fb",
                    "02a6b9af-17fd-4cb0-80be-82f391dfdece",
                    "ff95d3e3-3d84-4661-a8b7-b305ebe16f38",
                    "c32e34be-e583-4d32-9569-6bb5ddb84577",
                    "fae0ced4-19d0-450b-b089-74dc895fadcd",
                    "ec9c5506-1883-4f30-922e-49095e256f13",
                    "d77a46ff-fd65-4d0d-a921-6025d77e01fb",
                    "626a7261-d468-4c38-b4a5-be746e3a5158",
                    "0e6d800a-03d7-4e61-aa7f-9eb19a321163",
                    "793570ef-c0fc-475c-81dd-a27f58585dde"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 75.06979370117188,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.171687513589859,
                "Height": 0.008707976900041103,
                "Left": 0.03647769242525101,
                "Top": 0.6960887908935547
            },
            "Polygon": [
                {
                    "X": 0.03647769242525101,
                    "Y": 0.6961042284965515
                },
                {
                    "X": 0.20816320180892944,
                    "Y": 0.6960887908935547
                },
                {
                    "X": 0.20816519856452942,
                    "Y": 0.7047815918922424
                },
                {
                    "X": 0.036479223519563675,
                    "Y": 0.7047967910766602
                }
            ]
        },
        "Id": "a9fe1591-6bab-4bc9-8988-aced59dfb066",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "88cf6437-7f0d-4ce7-bc23-50ccabc86100"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "4eb0e76c-f6bd-4474-9e75-38493f475d1d",
                    "3fa341bc-4825-4a4d-bf70-b5adf69a5d73",
                    "760e5609-585e-45d8-bf23-93cdd7390394"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 75.06979370117188,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.23468533158302307,
                "Height": 0.020004969090223312,
                "Left": 0.03518613800406456,
                "Top": 0.7072656750679016
            },
            "Polygon": [
                {
                    "X": 0.03518613800406456,
                    "Y": 0.7072862982749939
                },
                {
                    "X": 0.2698664963245392,
                    "Y": 0.7072656750679016
                },
                {
                    "X": 0.26987147331237793,
                    "Y": 0.7272508144378662
                },
                {
                    "X": 0.03518964722752571,
                    "Y": 0.7272706031799316
                }
            ]
        },
        "Id": "88cf6437-7f0d-4ce7-bc23-50ccabc86100",
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 74.85773468017578,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10183198750019073,
                "Height": 0.00844988226890564,
                "Left": 0.07629318535327911,
                "Top": 0.06573127210140228
            },
            "Polygon": [
                {
                    "X": 0.07629318535327911,
                    "Y": 0.06575139611959457
                },
                {
                    "X": 0.17812331020832062,
                    "Y": 0.06573127210140228
                },
                {
                    "X": 0.17812517285346985,
                    "Y": 0.07416117191314697
                },
                {
                    "X": 0.07629477977752686,
                    "Y": 0.07418115437030792
                }
            ]
        },
        "Id": "e3ea34a9-0ba8-47b7-90ff-83d131c3cd97",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "c0f4ebb4-8fb4-4651-a92c-cf042d91fb44"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "66eb9f1f-74e3-4c9a-bf73-4d73544676f6"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 74.85773468017578,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10447676479816437,
                "Height": 0.00802106037735939,
                "Left": 0.29494884610176086,
                "Top": 0.06543619930744171
            },
            "Polygon": [
                {
                    "X": 0.29494884610176086,
                    "Y": 0.06545685231685638
                },
                {
                    "X": 0.3994233012199402,
                    "Y": 0.06543619930744171
                },
                {
                    "X": 0.3994256258010864,
                    "Y": 0.07343675196170807
                },
                {
                    "X": 0.2949509024620056,
                    "Y": 0.0734572634100914
                }
            ]
        },
        "Id": "c0f4ebb4-8fb4-4651-a92c-cf042d91fb44",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "2dab7437-52bd-4eea-bbd9-dd9665d70fc3"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 74.60514068603516,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07444438338279724,
                "Height": 0.007838422432541847,
                "Left": 0.5144964456558228,
                "Top": 0.934090256690979
            },
            "Polygon": [
                {
                    "X": 0.5144964456558228,
                    "Y": 0.9340938925743103
                },
                {
                    "X": 0.5889380574226379,
                    "Y": 0.934090256690979
                },
                {
                    "X": 0.5889407992362976,
                    "Y": 0.9419251084327698
                },
                {
                    "X": 0.5144990086555481,
                    "Y": 0.9419286847114563
                }
            ]
        },
        "Id": "6c65dd3c-5124-4ea2-9f19-4058cc0f0422",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "87255dad-9f98-434c-b238-caf02fd6e22f"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "dd3d9cc6-9d46-436b-b37a-2bd004e6dc12"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 74.60514068603516,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.38965746760368347,
                "Height": 0.023245712742209435,
                "Left": 0.5122411847114563,
                "Top": 0.9450492262840271
            },
            "Polygon": [
                {
                    "X": 0.5122411847114563,
                    "Y": 0.9450676441192627
                },
                {
                    "X": 0.9018882513046265,
                    "Y": 0.9450492262840271
                },
                {
                    "X": 0.9018986225128174,
                    "Y": 0.9682780504226685
                },
                {
                    "X": 0.5122487545013428,
                    "Y": 0.9682949185371399
                }
            ]
        },
        "Id": "87255dad-9f98-434c-b238-caf02fd6e22f",
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 72.22813415527344,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08956311643123627,
                "Height": 0.008150068111717701,
                "Left": 0.0757259726524353,
                "Top": 0.0883038267493248
            },
            "Polygon": [
                {
                    "X": 0.0757259726524353,
                    "Y": 0.08832117915153503
                },
                {
                    "X": 0.1652873307466507,
                    "Y": 0.0883038267493248
                },
                {
                    "X": 0.16528908908367157,
                    "Y": 0.09643666446208954
                },
                {
                    "X": 0.07572750747203827,
                    "Y": 0.09645389765501022
                }
            ]
        },
        "Id": "9f783b9c-620e-4303-b0cc-444ffa982201",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "d1536cd9-84fd-4b97-bfe2-4abd26544c48"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "0a2d8f08-4a1f-4791-9dab-9e9a3702c828"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 72.22813415527344,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10132396966218948,
                "Height": 0.00836778525263071,
                "Left": 0.29939496517181396,
                "Top": 0.08776216953992844
            },
            "Polygon": [
                {
                    "X": 0.29939496517181396,
                    "Y": 0.08778180927038193
                },
                {
                    "X": 0.40071651339530945,
                    "Y": 0.08776216953992844
                },
                {
                    "X": 0.40071892738342285,
                    "Y": 0.09611045569181442
                },
                {
                    "X": 0.2993971109390259,
                    "Y": 0.09612995386123657
                }
            ]
        },
        "Id": "d1536cd9-84fd-4b97-bfe2-4abd26544c48",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "c02f6566-57aa-4f06-9723-c1492bf37c6b"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 71.16751861572266,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10330862551927567,
                "Height": 0.007742662914097309,
                "Left": 0.034887682646512985,
                "Top": 0.7852588295936584
            },
            "Polygon": [
                {
                    "X": 0.034887682646512985,
                    "Y": 0.7852665185928345
                },
                {
                    "X": 0.13819469511508942,
                    "Y": 0.7852588295936584
                },
                {
                    "X": 0.13819630444049835,
                    "Y": 0.7929939031600952
                },
                {
                    "X": 0.034889042377471924,
                    "Y": 0.7930014729499817
                }
            ]
        },
        "Id": "c5de8735-5938-4970-8e8b-17a8e647a5e2",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "dee85f65-cdf7-4a34-847f-b9d289592bde"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "a8e43ed6-c751-4dc1-8905-4284bf4ff0ca",
                    "2145169a-0d1a-473e-8c64-591ae0a5b449",
                    "033ec13a-9e16-4edd-bbb4-94b2b8cd875b"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 71.16751861572266,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.23069073259830475,
                "Height": 0.018903788179159164,
                "Left": 0.03800102695822716,
                "Top": 0.7950372099876404
            },
            "Polygon": [
                {
                    "X": 0.03800102695822716,
                    "Y": 0.795054018497467
                },
                {
                    "X": 0.26868706941604614,
                    "Y": 0.7950372099876404
                },
                {
                    "X": 0.2686917781829834,
                    "Y": 0.8139249086380005
                },
                {
                    "X": 0.03800436109304428,
                    "Y": 0.8139410018920898
                }
            ]
        },
        "Id": "dee85f65-cdf7-4a34-847f-b9d289592bde",
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 69.22344207763672,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04013048857450485,
                "Height": 0.008192661218345165,
                "Left": 0.07623721659183502,
                "Top": 0.07674746960401535
            },
            "Polygon": [
                {
                    "X": 0.07623721659183502,
                    "Y": 0.07675532251596451
                },
                {
                    "X": 0.11636605858802795,
                    "Y": 0.07674746960401535
                },
                {
                    "X": 0.11636770516633987,
                    "Y": 0.08493233472108841
                },
                {
                    "X": 0.07623875886201859,
                    "Y": 0.08494012802839279
                }
            ]
        },
        "Id": "c99f79b7-9ceb-458d-b875-29c371c8480a",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "c215525e-8aae-4cf4-89ee-ce3ea17d68f1"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "bea4ed08-d6ac-42ea-ba68-b8ab24534a7b"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 69.22344207763672,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06449874490499496,
                "Height": 0.007939274422824383,
                "Left": 0.33558329939842224,
                "Top": 0.07653610408306122
            },
            "Polygon": [
                {
                    "X": 0.33558329939842224,
                    "Y": 0.076548732817173
                },
                {
                    "X": 0.40007975697517395,
                    "Y": 0.07653610408306122
                },
                {
                    "X": 0.4000820517539978,
                    "Y": 0.08446284383535385
                },
                {
                    "X": 0.33558544516563416,
                    "Y": 0.08447538316249847
                }
            ]
        },
        "Id": "c215525e-8aae-4cf4-89ee-ce3ea17d68f1",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "ec4de695-574b-4605-a098-710a9458e620"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 67.38967895507812,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08689938485622406,
                "Height": 0.010102707892656326,
                "Left": 0.7358497977256775,
                "Top": 0.45143258571624756
            },
            "Polygon": [
                {
                    "X": 0.7358497977256775,
                    "Y": 0.45144402980804443
                },
                {
                    "X": 0.8227449059486389,
                    "Y": 0.45143258571624756
                },
                {
                    "X": 0.822749137878418,
                    "Y": 0.46152400970458984
                },
                {
                    "X": 0.7358537912368774,
                    "Y": 0.4615353047847748
                }
            ]
        },
        "Id": "5df8da78-0f0c-4fdc-ac0b-b322d979b766",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "034e183d-b64d-4562-800d-dff66ec78662"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "8570c23e-14ca-466a-8774-5cde48f55eee"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 67.38967895507812,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024644745513796806,
                "Height": 0.008798392489552498,
                "Left": 0.8971868753433228,
                "Top": 0.4515581429004669
            },
            "Polygon": [
                {
                    "X": 0.8971868753433228,
                    "Y": 0.4515613913536072
                },
                {
                    "X": 0.9218276143074036,
                    "Y": 0.4515581429004669
                },
                {
                    "X": 0.9218316674232483,
                    "Y": 0.4603533148765564
                },
                {
                    "X": 0.8971908092498779,
                    "Y": 0.46035653352737427
                }
            ]
        },
        "Id": "034e183d-b64d-4562-800d-dff66ec78662",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "76f5db2e-f0cc-4f47-972f-aa0bb6062802"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 66.88201141357422,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.22759100794792175,
                "Height": 0.008052365854382515,
                "Left": 0.036340270191431046,
                "Top": 0.7615976929664612
            },
            "Polygon": [
                {
                    "X": 0.036340270191431046,
                    "Y": 0.7616155743598938
                },
                {
                    "X": 0.2639292776584625,
                    "Y": 0.7615976929664612
                },
                {
                    "X": 0.2639312744140625,
                    "Y": 0.7696324586868286
                },
                {
                    "X": 0.03634168207645416,
                    "Y": 0.7696500420570374
                }
            ]
        },
        "Id": "1c86aa2e-74ee-45ec-8119-5018404d7325",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "a3957914-a9b5-43ab-b930-fc3c3ccf0dae"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "c69d2d1f-6cec-4d10-9104-27951c19bcad",
                    "bbf7ef0a-3104-4984-90a0-d73fb459dcf0",
                    "639c8b9d-598f-4c7c-9738-5abf365ae358"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 66.88201141357422,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.2345006763935089,
                "Height": 0.013508744537830353,
                "Left": 0.03427916020154953,
                "Top": 0.7716505527496338
            },
            "Polygon": [
                {
                    "X": 0.03427916020154953,
                    "Y": 0.7716686129570007
                },
                {
                    "X": 0.26877647638320923,
                    "Y": 0.7716505527496338
                },
                {
                    "X": 0.26877984404563904,
                    "Y": 0.7851418256759644
                },
                {
                    "X": 0.03428152576088905,
                    "Y": 0.7851592898368835
                }
            ]
        },
        "Id": "a3957914-a9b5-43ab-b930-fc3c3ccf0dae",
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 60.72745895385742,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.023294325917959213,
                "Height": 0.005796967539936304,
                "Left": 0.33419349789619446,
                "Top": 0.8972944617271423
            },
            "Polygon": [
                {
                    "X": 0.33419349789619446,
                    "Y": 0.8972957730293274
                },
                {
                    "X": 0.35748621821403503,
                    "Y": 0.8972944617271423
                },
                {
                    "X": 0.35748782753944397,
                    "Y": 0.9030901789665222
                },
                {
                    "X": 0.334195077419281,
                    "Y": 0.9030914306640625
                }
            ]
        },
        "Id": "fa58d016-05dc-4467-9748-b33f1afef8ba",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "709d80a2-0c0c-468e-a816-72711c58fe16"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "07c59a93-39c8-4ef8-95f3-fb0d1850b039"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 60.72745895385742,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.49550575017929077,
                "Height": 0.019401317462325096,
                "Left": 0.3346403241157532,
                "Top": 0.9028703570365906
            },
            "Polygon": [
                {
                    "X": 0.3346403241157532,
                    "Y": 0.9028973579406738
                },
                {
                    "X": 0.8301377892494202,
                    "Y": 0.9028703570365906
                },
                {
                    "X": 0.830146074295044,
                    "Y": 0.9222463369369507
                },
                {
                    "X": 0.334645539522171,
                    "Y": 0.9222716689109802
                }
            ]
        },
        "Id": "709d80a2-0c0c-468e-a816-72711c58fe16",
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 60.5234260559082,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.494108647108078,
                "Height": 0.007136179134249687,
                "Left": 0.32906028628349304,
                "Top": 0.8401639461517334
            },
            "Polygon": [
                {
                    "X": 0.32906028628349304,
                    "Y": 0.8401961326599121
                },
                {
                    "X": 0.8231658935546875,
                    "Y": 0.8401639461517334
                },
                {
                    "X": 0.823168933391571,
                    "Y": 0.8472684621810913
                },
                {
                    "X": 0.32906216382980347,
                    "Y": 0.847300112247467
                }
            ]
        },
        "Id": "d5c1a027-3ce6-4724-936d-63d3cbb87ac6",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "7ba1fe13-e3ba-4c2c-95d3-305c0a9bad67"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "cd5266e1-4118-4bf9-94f4-f35573744ae9",
                    "5a44b654-8653-40a4-950f-38f819ccba39",
                    "9fe5efbf-c077-4360-8d33-e236e871d6ee",
                    "2e5f04c1-8ec5-48fb-ac83-f38c6227553b",
                    "11ae35c8-f84d-494f-a486-bb37fc1ecc42",
                    "b285f2d2-b318-4753-a8c4-d1b8fec86a7a",
                    "ac51eae9-610b-4308-8056-29581451a682",
                    "07c52e39-2805-462a-a3c5-b412dea9184e",
                    "511ed585-daf8-4387-ac7f-bcfc35e0abe2",
                    "5bc383e3-f2fa-4760-b2c2-b0683bed81ae",
                    "bbc29df2-da46-4086-9afb-af1719ba6d33",
                    "040b05f8-7eeb-4fcf-8fb1-85923499da3e",
                    "13db7ef7-0bf8-4656-b625-2c7813ef42c8",
                    "6b7c14f0-666a-4a50-ae10-5aa915d8bc30",
                    "0215b1fe-659e-43e1-a9e5-745c1ac25b90",
                    "51c00e67-c2da-49dd-a8e0-bf79115fdc4b",
                    "e0823c26-ebe7-435b-b1c8-003f84260157",
                    "65879395-bdf9-41cc-8e7b-f91c0fb0bca6"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 60.5234260559082,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.6135319471359253,
                "Height": 0.014691279269754887,
                "Left": 0.3332785665988922,
                "Top": 0.8454251289367676
            },
            "Polygon": [
                {
                    "X": 0.3332785665988922,
                    "Y": 0.8454645872116089
                },
                {
                    "X": 0.9468037486076355,
                    "Y": 0.8454251289367676
                },
                {
                    "X": 0.9468105435371399,
                    "Y": 0.8600785136222839
                },
                {
                    "X": 0.3332825303077698,
                    "Y": 0.8601164221763611
                }
            ]
        },
        "Id": "7ba1fe13-e3ba-4c2c-95d3-305c0a9bad67",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "dbe8562b-f974-41fa-a2ae-9b1e9bd3de55",
                    "6a922f50-b114-4068-ac45-cb39d86f6122",
                    "53a355a4-71d9-469a-a6dd-d1de19e67584",
                    "398b0156-a3b1-4f71-9c2d-3fefc97a3d89",
                    "37450730-c82c-4032-a8de-dd80877068ae",
                    "43049838-ce3f-4508-a688-d44f6c548f2d",
                    "29897be4-0f78-44cf-9886-06c6055597e8",
                    "3dc3b617-fbae-4ea7-9d2c-48653e2cbb30",
                    "eff9b28e-aab5-4f63-9bd2-8dfe58567ba0",
                    "51502732-d304-4c83-b2d3-cdb7c5e5cc53",
                    "735a2b41-25ac-450d-91e3-1c14b0aacd81",
                    "ef37051d-83e9-4743-a370-7ac10f7cb509",
                    "f9760450-37ea-4f10-bd7a-0b0501bd9da2"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 57.19941711425781,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08693347126245499,
                "Height": 0.010120370425283909,
                "Left": 0.736060619354248,
                "Top": 0.4390145242214203
            },
            "Polygon": [
                {
                    "X": 0.736060619354248,
                    "Y": 0.4390261769294739
                },
                {
                    "X": 0.822989821434021,
                    "Y": 0.4390145242214203
                },
                {
                    "X": 0.8229940533638,
                    "Y": 0.44912344217300415
                },
                {
                    "X": 0.736064612865448,
                    "Y": 0.4491349160671234
                }
            ]
        },
        "Id": "c7fbe502-a4a4-454d-ac5a-bd4f26af6997",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "12443c9e-3592-41d9-a07e-f0e01042aa1b"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "c1529c6f-eac1-4703-8e63-fb2badaf4b40"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 57.19941711425781,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02519685961306095,
                "Height": 0.008601758629083633,
                "Left": 0.8968358039855957,
                "Top": 0.43925946950912476
            },
            "Polygon": [
                {
                    "X": 0.8968358039855957,
                    "Y": 0.43926283717155457
                },
                {
                    "X": 0.9220287799835205,
                    "Y": 0.43925946950912476
                },
                {
                    "X": 0.9220326542854309,
                    "Y": 0.44785788655281067
                },
                {
                    "X": 0.8968396782875061,
                    "Y": 0.4478612244129181
                }
            ]
        },
        "Id": "12443c9e-3592-41d9-a07e-f0e01042aa1b",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "eda452a8-6d1c-4658-b6cd-d47ea1769a91"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 54.71225357055664,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10405922681093216,
                "Height": 0.010239673778414726,
                "Left": 0.7191193103790283,
                "Top": 0.4025369882583618
            },
            "Polygon": [
                {
                    "X": 0.7191193103790283,
                    "Y": 0.4025515615940094
                },
                {
                    "X": 0.823174238204956,
                    "Y": 0.4025369882583618
                },
                {
                    "X": 0.8231785297393799,
                    "Y": 0.41276228427886963
                },
                {
                    "X": 0.7191233038902283,
                    "Y": 0.4127766489982605
                }
            ]
        },
        "Id": "ec42dad1-94ad-401b-95ac-77a130a09fe5",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "7ab61d34-932f-4438-b335-9f8125331a21"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "ec9dbf4c-b685-43d8-818f-3310aab0660e",
                    "52d38553-cbe9-4561-a186-97477d5263df"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 54.71225357055664,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02780299261212349,
                "Height": 0.008819451555609703,
                "Left": 0.8938037753105164,
                "Top": 0.402322918176651
            },
            "Polygon": [
                {
                    "X": 0.8938037753105164,
                    "Y": 0.4023268222808838
                },
                {
                    "X": 0.9216027855873108,
                    "Y": 0.402322918176651
                },
                {
                    "X": 0.9216067790985107,
                    "Y": 0.41113850474357605
                },
                {
                    "X": 0.8938077092170715,
                    "Y": 0.41114237904548645
                }
            ]
        },
        "Id": "7ab61d34-932f-4438-b335-9f8125331a21",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "5107e227-7ad4-4a1c-8679-2188bf1574df"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 51.16708755493164,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10379385203123093,
                "Height": 0.010190836153924465,
                "Left": 0.719234049320221,
                "Top": 0.41486597061157227
            },
            "Polygon": [
                {
                    "X": 0.719234049320221,
                    "Y": 0.41488030552864075
                },
                {
                    "X": 0.8230236172676086,
                    "Y": 0.41486597061157227
                },
                {
                    "X": 0.8230279088020325,
                    "Y": 0.42504268884658813
                },
                {
                    "X": 0.7192380428314209,
                    "Y": 0.4250568151473999
                }
            ]
        },
        "Id": "27fc862b-698a-439b-a657-1c291a15a82c",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "b64252e5-8926-470d-90c2-9a1e034bd07e"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "98dd9cbc-48ca-4e21-aa1c-653c42970856",
                    "55a306b6-257f-4b93-b79d-58e50b25a28f"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 51.16708755493164,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02635464444756508,
                "Height": 0.008468256331980228,
                "Left": 0.8956896066665649,
                "Top": 0.4148085117340088
            },
            "Polygon": [
                {
                    "X": 0.8956896066665649,
                    "Y": 0.4148121476173401
                },
                {
                    "X": 0.9220404028892517,
                    "Y": 0.4148085117340088
                },
                {
                    "X": 0.9220442771911621,
                    "Y": 0.42327314615249634
                },
                {
                    "X": 0.8956934213638306,
                    "Y": 0.42327675223350525
                }
            ]
        },
        "Id": "b64252e5-8926-470d-90c2-9a1e034bd07e",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "4e99bc76-f663-4032-93c9-d6cd519b1707"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 51.03703308105469,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.10325543582439423,
                "Height": 0.010209036991000175,
                "Left": 0.7196297645568848,
                "Top": 0.3808320164680481
            },
            "Polygon": [
                {
                    "X": 0.7196297645568848,
                    "Y": 0.38084685802459717
                },
                {
                    "X": 0.8228808641433716,
                    "Y": 0.3808320164680481
                },
                {
                    "X": 0.8228852152824402,
                    "Y": 0.39102640748023987
                },
                {
                    "X": 0.7196337580680847,
                    "Y": 0.3910410702228546
                }
            ]
        },
        "Id": "26648c17-e229-4922-863b-92e669c46494",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "d7184983-322e-429e-abe1-9f33a854c62a"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "da2bd4a8-dc5c-4247-bfdb-53425450b893"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 51.03703308105469,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.026314031332731247,
                "Height": 0.008881102316081524,
                "Left": 0.8961017727851868,
                "Top": 0.3805356025695801
            },
            "Polygon": [
                {
                    "X": 0.8961017727851868,
                    "Y": 0.3805393874645233
                },
                {
                    "X": 0.9224117994308472,
                    "Y": 0.3805356025695801
                },
                {
                    "X": 0.9224158525466919,
                    "Y": 0.3894129693508148
                },
                {
                    "X": 0.8961057662963867,
                    "Y": 0.3894166946411133
                }
            ]
        },
        "Id": "d7184983-322e-429e-abe1-9f33a854c62a",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "db5d24bf-ccaa-4e07-aa80-e6f2ffb6971b"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 50.89336013793945,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08728638291358948,
                "Height": 0.010089726187288761,
                "Left": 0.7357789278030396,
                "Top": 0.426794171333313
            },
            "Polygon": [
                {
                    "X": 0.7357789278030396,
                    "Y": 0.4268060326576233
                },
                {
                    "X": 0.8230610489845276,
                    "Y": 0.426794171333313
                },
                {
                    "X": 0.8230653405189514,
                    "Y": 0.4368722140789032
                },
                {
                    "X": 0.7357829213142395,
                    "Y": 0.4368838965892792
                }
            ]
        },
        "Id": "8d735cf9-e023-443d-ad40-de6e5c7ace6b",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "1775b88a-62aa-432a-a148-07d593a009d4"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "219e1a25-cbf1-40bd-bbd5-b3988c56ab6c"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 50.89336013793945,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.025361955165863037,
                "Height": 0.008645727299153805,
                "Left": 0.8962910771369934,
                "Top": 0.4267290234565735
            },
            "Polygon": [
                {
                    "X": 0.8962910771369934,
                    "Y": 0.42673245072364807
                },
                {
                    "X": 0.9216490983963013,
                    "Y": 0.4267290234565735
                },
                {
                    "X": 0.9216530323028564,
                    "Y": 0.4353713393211365
                },
                {
                    "X": 0.8962949514389038,
                    "Y": 0.43537473678588867
                }
            ]
        },
        "Id": "1775b88a-62aa-432a-a148-07d593a009d4",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "24d6b7aa-a06f-44c3-abb5-c9e838bf5372"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 47.630008697509766,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.042018067091703415,
                "Height": 0.007469967473298311,
                "Left": 0.07006071507930756,
                "Top": 0.32896098494529724
            },
            "Polygon": [
                {
                    "X": 0.07006071507930756,
                    "Y": 0.3289673924446106
                },
                {
                    "X": 0.11207728832960129,
                    "Y": 0.32896098494529724
                },
                {
                    "X": 0.11207877844572067,
                    "Y": 0.3364245891571045
                },
                {
                    "X": 0.07006210833787918,
                    "Y": 0.33643093705177307
                }
            ]
        },
        "Id": "b7d63de8-408d-494d-9ee6-2686da0ede19",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "05395314-704a-4537-871a-5ff6ddb487e4"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "40bf0c35-bea2-4352-bbb2-801f653af198"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 47.630008697509766,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.11176050454378128,
                "Height": 0.018828490749001503,
                "Left": 0.06613653153181076,
                "Top": 0.34085574746131897
            },
            "Polygon": [
                {
                    "X": 0.06613653153181076,
                    "Y": 0.34087255597114563
                },
                {
                    "X": 0.17789287865161896,
                    "Y": 0.34085574746131897
                },
                {
                    "X": 0.17789703607559204,
                    "Y": 0.35966774821281433
                },
                {
                    "X": 0.06614001840353012,
                    "Y": 0.3596842288970947
                }
            ]
        },
        "Id": "05395314-704a-4537-871a-5ff6ddb487e4",
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 46.671043395996094,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.15757043659687042,
                "Height": 0.007173917256295681,
                "Left": 0.0600537545979023,
                "Top": 0.6572763323783875
            },
            "Polygon": [
                {
                    "X": 0.0600537545979023,
                    "Y": 0.6572915315628052
                },
                {
                    "X": 0.2176225334405899,
                    "Y": 0.6572763323783875
                },
                {
                    "X": 0.21762420237064362,
                    "Y": 0.6644352674484253
                },
                {
                    "X": 0.06005506590008736,
                    "Y": 0.6644502878189087
                }
            ]
        },
        "Id": "8929a96b-218f-44a6-ab74-b228041c4c25",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "a6081620-27be-4772-9cd7-475881065cfd"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "d572b613-dc84-42f0-9f96-cb61cc892296",
                    "e30cda20-1545-416f-ac99-48e0d17de044",
                    "a73ad77e-424f-4961-9feb-94b686f0d649"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 46.671043395996094,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.19871340692043304,
                "Height": 0.02616089954972267,
                "Left": 0.05285600572824478,
                "Top": 0.6647704243659973
            },
            "Polygon": [
                {
                    "X": 0.05285600572824478,
                    "Y": 0.6647893786430359
                },
                {
                    "X": 0.25156304240226746,
                    "Y": 0.6647704243659973
                },
                {
                    "X": 0.2515694200992584,
                    "Y": 0.6909133195877075
                },
                {
                    "X": 0.05286074057221413,
                    "Y": 0.6909313201904297
                }
            ]
        },
        "Id": "a6081620-27be-4772-9cd7-475881065cfd",
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 44.220298767089844,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.13002635538578033,
                "Height": 0.00813516229391098,
                "Left": 0.0989876464009285,
                "Top": 0.2116253674030304
            },
            "Polygon": [
                {
                    "X": 0.0989876464009285,
                    "Y": 0.21164780855178833
                },
                {
                    "X": 0.22901208698749542,
                    "Y": 0.2116253674030304
                },
                {
                    "X": 0.22901400923728943,
                    "Y": 0.21973824501037598
                },
                {
                    "X": 0.09898924082517624,
                    "Y": 0.21976052224636078
                }
            ]
        },
        "Id": "d8fd0d20-204d-419e-9f81-9811a172c0f8",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "b9fb3df2-aa85-4b87-b994-9f59454e6ea1"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "25fbe5f5-30bb-4e38-9818-710cd4a4666f"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 44.220298767089844,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.15841886401176453,
                "Height": 0.046708934009075165,
                "Left": 0.09811603277921677,
                "Top": 0.22313304245471954
            },
            "Polygon": [
                {
                    "X": 0.09811603277921677,
                    "Y": 0.22316007316112518
                },
                {
                    "X": 0.256523460149765,
                    "Y": 0.22313304245471954
                },
                {
                    "X": 0.2565349042415619,
                    "Y": 0.26981619000434875
                },
                {
                    "X": 0.098125159740448,
                    "Y": 0.2698419690132141
                }
            ]
        },
        "Id": "b9fb3df2-aa85-4b87-b994-9f59454e6ea1",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "c060ee34-d0f7-4c0a-a66f-a8fe7c6c732f",
                    "1a1381c6-3093-4b36-bfb6-b8c9dc8f9df5",
                    "9cb8be3e-f483-4e39-a6ba-13721be9a37c",
                    "445c81e6-5aec-4f9b-ad28-ecb4e989eafe",
                    "0a540398-a846-4d6e-9ea2-296339db54b8",
                    "d25e78d6-b535-45ee-9e80-0f532da2529f",
                    "5e646b37-01c3-4b9f-80f0-93b87450c475",
                    "d2d89795-cfea-4597-8fce-c261584dbb32"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 42.590003967285156,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.019457640126347542,
                "Height": 0.0067514232359826565,
                "Left": 0.7644492387771606,
                "Top": 0.6131942868232727
            },
            "Polygon": [
                {
                    "X": 0.7644492387771606,
                    "Y": 0.6131963133811951
                },
                {
                    "X": 0.7839040756225586,
                    "Y": 0.6131942868232727
                },
                {
                    "X": 0.783906877040863,
                    "Y": 0.6199437379837036
                },
                {
                    "X": 0.7644519805908203,
                    "Y": 0.6199457049369812
                }
            ]
        },
        "Id": "fd09ea70-a934-44d5-8892-a61eb85e2305",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "944bc7ac-d5b6-4b1c-b7b4-3c0f1b0c135f"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "b45e9295-3a23-4198-a903-dde7c1d3e952"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 42.590003967285156,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07114363461732864,
                "Height": 0.006784830242395401,
                "Left": 0.7874887585639954,
                "Top": 0.6131066679954529
            },
            "Polygon": [
                {
                    "X": 0.7874887585639954,
                    "Y": 0.613114058971405
                },
                {
                    "X": 0.8586294651031494,
                    "Y": 0.6131066679954529
                },
                {
                    "X": 0.8586324453353882,
                    "Y": 0.6198841333389282
                },
                {
                    "X": 0.7874915599822998,
                    "Y": 0.6198914647102356
                }
            ]
        },
        "Id": "944bc7ac-d5b6-4b1c-b7b4-3c0f1b0c135f",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "16b0fa0b-07c8-43ca-a102-488348560447"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 42.087894439697266,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08105460554361343,
                "Height": 0.00900531280785799,
                "Left": 0.22950831055641174,
                "Top": 0.32871174812316895
            },
            "Polygon": [
                {
                    "X": 0.22950831055641174,
                    "Y": 0.32872411608695984
                },
                {
                    "X": 0.31056055426597595,
                    "Y": 0.32871174812316895
                },
                {
                    "X": 0.3105629086494446,
                    "Y": 0.3377048075199127
                },
                {
                    "X": 0.22951044142246246,
                    "Y": 0.33771705627441406
                }
            ]
        },
        "Id": "d3a45ea4-48ae-4b71-ba6b-175e3121dc23",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "f428ea5f-7363-4503-8d0e-a06715275e1a"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "59a7f206-b651-4f76-8692-ffc8da8103b9"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 42.087894439697266,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.11421167850494385,
                "Height": 0.00967747624963522,
                "Left": 0.2293432205915451,
                "Top": 0.3431050777435303
            },
            "Polygon": [
                {
                    "X": 0.2293432205915451,
                    "Y": 0.3431222140789032
                },
                {
                    "X": 0.34355226159095764,
                    "Y": 0.3431050777435303
                },
                {
                    "X": 0.34355491399765015,
                    "Y": 0.35276558995246887
                },
                {
                    "X": 0.22934551537036896,
                    "Y": 0.35278254747390747
                }
            ]
        },
        "Id": "f428ea5f-7363-4503-8d0e-a06715275e1a",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "0a65fa72-9a84-4303-9fa1-08bb9ab47c67",
                    "55ee5ccf-32ff-4c05-8414-c6b2ab82eeff"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 40.898834228515625,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.024770164862275124,
                "Height": 0.0063680666498839855,
                "Left": 0.7643874287605286,
                "Top": 0.6204586625099182
            },
            "Polygon": [
                {
                    "X": 0.7643874287605286,
                    "Y": 0.6204612255096436
                },
                {
                    "X": 0.7891550064086914,
                    "Y": 0.6204586625099182
                },
                {
                    "X": 0.7891576290130615,
                    "Y": 0.6268242001533508
                },
                {
                    "X": 0.7643900513648987,
                    "Y": 0.6268267035484314
                }
            ]
        },
        "Id": "83d068dc-2e4b-48b6-ad7d-1ed98d178350",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "c75f5fd8-3241-4c48-8f52-6f0d800fe64a"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "b5c73ce2-b824-489f-95b4-dfd621c1a576"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 40.898834228515625,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.08353004604578018,
                "Height": 0.006261913105845451,
                "Left": 0.7917146682739258,
                "Top": 0.6199845671653748
            },
            "Polygon": [
                {
                    "X": 0.7917146682739258,
                    "Y": 0.6199932098388672
                },
                {
                    "X": 0.8752419352531433,
                    "Y": 0.6199845671653748
                },
                {
                    "X": 0.875244677066803,
                    "Y": 0.6262379884719849
                },
                {
                    "X": 0.7917172312736511,
                    "Y": 0.6262465119361877
                }
            ]
        },
        "Id": "c75f5fd8-3241-4c48-8f52-6f0d800fe64a",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "3287210b-c944-4eba-8a5e-a5327cad8f78",
                    "930e7391-22f6-447f-b979-f7e878cc795d",
                    "eee89f8d-0939-4b4e-96af-29ec4d1d6b50"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 32.91085433959961,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.01848733238875866,
                "Height": 0.006592415273189545,
                "Left": 0.06337487697601318,
                "Top": 0.5938044786453247
            },
            "Polygon": [
                {
                    "X": 0.06337487697601318,
                    "Y": 0.5938064455986023
                },
                {
                    "X": 0.08186095952987671,
                    "Y": 0.5938044786453247
                },
                {
                    "X": 0.08186221122741699,
                    "Y": 0.6003949046134949
                },
                {
                    "X": 0.06337609142065048,
                    "Y": 0.6003968715667725
                }
            ]
        },
        "Id": "c847de0d-fe51-46b5-99e3-0e6de509d2e4",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "196ed679-c44d-41db-9b9e-8cfb4dec0d17"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "fc2540fb-7a3f-4c7f-b4f9-2e08cf0f6d20"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 32.91085433959961,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.09734906256198883,
                "Height": 0.027073407545685768,
                "Left": 0.0640081986784935,
                "Top": 0.6021431088447571
            },
            "Polygon": [
                {
                    "X": 0.0640081986784935,
                    "Y": 0.6021534204483032
                },
                {
                    "X": 0.16135144233703613,
                    "Y": 0.6021431088447571
                },
                {
                    "X": 0.16135726869106293,
                    "Y": 0.629206657409668
                },
                {
                    "X": 0.06401319801807404,
                    "Y": 0.6292164921760559
                }
            ]
        },
        "Id": "196ed679-c44d-41db-9b9e-8cfb4dec0d17",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "5876fbcd-c802-46d9-8e1f-f780ef4fb86c",
                    "1ace1197-fd36-47fb-a557-50103b3ab895",
                    "341a8f69-c329-4278-92da-1cb603ba09ff",
                    "1dac47b4-1507-4259-93e9-69e0af9da836",
                    "2646df33-6b12-4741-8730-dc78fcd3f102",
                    "d1ba2211-cf92-4ab9-8c72-195de512ffcf",
                    "160f4002-b622-4559-91ca-5d7f91654747",
                    "40be6b65-fa97-4f5d-a9fb-97c61772e2b4",
                    "fdb8b6bc-2019-4290-8d9b-af64e0c934c7",
                    "34ab3e7b-e919-4d98-ac5c-38e3c58fed09"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 30.767074584960938,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.091720350086689,
                "Height": 0.007065368350595236,
                "Left": 0.5739266872406006,
                "Top": 0.5924549698829651
            },
            "Polygon": [
                {
                    "X": 0.5739266872406006,
                    "Y": 0.592464804649353
                },
                {
                    "X": 0.6656443476676941,
                    "Y": 0.5924549698829651
                },
                {
                    "X": 0.665647029876709,
                    "Y": 0.5995105504989624
                },
                {
                    "X": 0.5739290714263916,
                    "Y": 0.5995203256607056
                }
            ]
        },
        "Id": "bf22b806-c29f-4851-a14f-15ac531e40e8",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "de6ee6e2-d969-4883-9a64-093589eae524"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "2634ac2a-2fc1-4212-8130-86bee0bd0269"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 30.767074584960938,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07846519351005554,
                "Height": 0.019789764657616615,
                "Left": 0.5722041726112366,
                "Top": 0.600155234336853
            },
            "Polygon": [
                {
                    "X": 0.5722041726112366,
                    "Y": 0.6001635789871216
                },
                {
                    "X": 0.6506620645523071,
                    "Y": 0.600155234336853
                },
                {
                    "X": 0.6506693959236145,
                    "Y": 0.6199369430541992
                },
                {
                    "X": 0.572210967540741,
                    "Y": 0.6199449896812439
                }
            ]
        },
        "Id": "de6ee6e2-d969-4883-9a64-093589eae524",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "e5e70051-741b-4e3c-9e02-032963052141",
                    "897727c3-2e8f-4d5d-a435-03e16155a915",
                    "4e5f532a-c95e-450e-9494-aad2989bde20",
                    "1cf14bfe-e860-4e5e-91ab-c6931507672d"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 30.022140502929688,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.040569256991147995,
                "Height": 0.009846939705312252,
                "Left": 0.33605334162712097,
                "Top": 0.041607584804296494
            },
            "Polygon": [
                {
                    "X": 0.33605334162712097,
                    "Y": 0.041615769267082214
                },
                {
                    "X": 0.376619815826416,
                    "Y": 0.041607584804296494
                },
                {
                    "X": 0.37662258744239807,
                    "Y": 0.05144640803337097
                },
                {
                    "X": 0.3360559940338135,
                    "Y": 0.05145452544093132
                }
            ]
        },
        "Id": "9d13bf9e-9994-4186-b8a2-cff7267a4ecb",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "09545ebb-1756-46c5-bc68-fb5d96c919da"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "44369894-436a-4329-9ec4-8ecc1a8eef40"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 30.022140502929688,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.021129131317138672,
                "Height": 0.009887196123600006,
                "Left": 0.3770117163658142,
                "Top": 0.04155709594488144
            },
            "Polygon": [
                {
                    "X": 0.3770117163658142,
                    "Y": 0.04156135767698288
                },
                {
                    "X": 0.39813798666000366,
                    "Y": 0.04155709594488144
                },
                {
                    "X": 0.3981408476829529,
                    "Y": 0.05144006386399269
                },
                {
                    "X": 0.37701451778411865,
                    "Y": 0.051444292068481445
                }
            ]
        },
        "Id": "09545ebb-1756-46c5-bc68-fb5d96c919da",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "6f3ba9a9-ab54-48ee-ab07-2e74efaa3600"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 27.67186737060547,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.07122080028057098,
                "Height": 0.013393576256930828,
                "Left": 0.31397584080696106,
                "Top": 0.5930758118629456
            },
            "Polygon": [
                {
                    "X": 0.31397584080696106,
                    "Y": 0.5930835008621216
                },
                {
                    "X": 0.3851928114891052,
                    "Y": 0.5930758118629456
                },
                {
                    "X": 0.38519665598869324,
                    "Y": 0.6064619421958923
                },
                {
                    "X": 0.3139793574810028,
                    "Y": 0.6064693927764893
                }
            ]
        },
        "Id": "0c64d8f5-b90c-4db6-b408-5d51c4d0c5b4",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "2e261f73-fb6e-47c1-95b7-b8424756b29a"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "72c4c51d-f7ac-472f-83ba-d5c7a66728d4",
                    "890baf19-c871-4397-8b00-a1fe9b1b335b"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 27.67186737060547,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.1311100870370865,
                "Height": 0.0068405321799218655,
                "Left": 0.35462436079978943,
                "Top": 0.6004290580749512
            },
            "Polygon": [
                {
                    "X": 0.35462436079978943,
                    "Y": 0.6004429459571838
                },
                {
                    "X": 0.4857322871685028,
                    "Y": 0.6004290580749512
                },
                {
                    "X": 0.4857344627380371,
                    "Y": 0.6072558164596558
                },
                {
                    "X": 0.35462623834609985,
                    "Y": 0.6072695851325989
                }
            ]
        },
        "Id": "2e261f73-fb6e-47c1-95b7-b8424756b29a",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "39d8d4de-e9b5-4130-8bfa-9c9be721542b"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 26.933961868286133,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.03233030065894127,
                "Height": 0.007951643317937851,
                "Left": 0.6407114267349243,
                "Top": 0.3275550603866577
            },
            "Polygon": [
                {
                    "X": 0.6407114267349243,
                    "Y": 0.3275599777698517
                },
                {
                    "X": 0.6730387210845947,
                    "Y": 0.3275550603866577
                },
                {
                    "X": 0.6730417013168335,
                    "Y": 0.3355017900466919
                },
                {
                    "X": 0.6407143473625183,
                    "Y": 0.3355066776275635
                }
            ]
        },
        "Id": "063e6f9b-473e-4037-86de-c29fd7d83eb0",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "f4e4a851-2a31-4ff5-9b9a-9d0310f5ad77"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "6214c22d-ed88-4749-9482-effbb2004d32"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 26.933961868286133,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0258119385689497,
                "Height": 0.008749389089643955,
                "Left": 0.6472307443618774,
                "Top": 0.3422526717185974
            },
            "Polygon": [
                {
                    "X": 0.6472307443618774,
                    "Y": 0.3422565460205078
                },
                {
                    "X": 0.6730393767356873,
                    "Y": 0.3422526717185974
                },
                {
                    "X": 0.6730426549911499,
                    "Y": 0.3509982228279114
                },
                {
                    "X": 0.6472339630126953,
                    "Y": 0.3510020673274994
                }
            ]
        },
        "Id": "f4e4a851-2a31-4ff5-9b9a-9d0310f5ad77",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "6516d0f6-edbd-4212-a06e-3cc606c4be7c"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 26.914913177490234,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04236878082156181,
                "Height": 0.010107173584401608,
                "Left": 0.543495774269104,
                "Top": 0.3278326988220215
            },
            "Polygon": [
                {
                    "X": 0.543495774269104,
                    "Y": 0.3278391659259796
                },
                {
                    "X": 0.5858610272407532,
                    "Y": 0.3278326988220215
                },
                {
                    "X": 0.5858645439147949,
                    "Y": 0.3379334509372711
                },
                {
                    "X": 0.5434991717338562,
                    "Y": 0.3379398584365845
                }
            ]
        },
        "Id": "676e2ac1-34f9-44be-af22-0eed1730b224",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "6414259a-1ac8-40d2-92dd-a9cb5a45e4a0"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "928f589b-7088-4d4a-85a5-a81a034b4a3e"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 26.914913177490234,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.005992064252495766,
                "Height": 0.007633080240339041,
                "Left": 0.5782533884048462,
                "Top": 0.3426189422607422
            },
            "Polygon": [
                {
                    "X": 0.5782533884048462,
                    "Y": 0.3426198363304138
                },
                {
                    "X": 0.5842427611351013,
                    "Y": 0.3426189422607422
                },
                {
                    "X": 0.5842454433441162,
                    "Y": 0.35025110840797424
                },
                {
                    "X": 0.5782560110092163,
                    "Y": 0.3502520024776459
                }
            ]
        },
        "Id": "6414259a-1ac8-40d2-92dd-a9cb5a45e4a0",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "e5ccc4e9-885f-4bf7-992f-ac1be6b7b491"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 26.839902877807617,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.8536067008972168,
                "Height": 0.01834053173661232,
                "Left": 0.06271576136350632,
                "Top": 0.49331560730934143
            },
            "Polygon": [
                {
                    "X": 0.06271576136350632,
                    "Y": 0.49342188239097595
                },
                {
                    "X": 0.9163141846656799,
                    "Y": 0.49331560730934143
                },
                {
                    "X": 0.9163224697113037,
                    "Y": 0.5115525126457214
                },
                {
                    "X": 0.06271912157535553,
                    "Y": 0.5116561651229858
                }
            ]
        },
        "Id": "697832d4-0349-479e-b19d-892105b0b913",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "6c206e5d-b8d1-42cd-91bb-150538480b0e"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "6cb25ff7-3c71-4c0c-9f42-7b646bddc7c1",
                    "465acfd3-3949-4a13-b290-c4afbef0af19",
                    "864b9de0-baad-4e51-9a5b-7f04fdf5dad3",
                    "610f3b1d-3d7b-4f19-a305-a5aeb10eae3c",
                    "bce41981-6d74-4537-ad3c-dfb93c4ef727",
                    "efd83edf-97f6-4097-8e19-a669d2dd15a2",
                    "6ebeb30a-8489-4761-a135-e6da1eeceeb8",
                    "09fb3828-c334-4e36-8651-6cb69b687321",
                    "7baeb9a4-2774-4863-a8f3-953abcf9d247",
                    "ce4734be-6c15-4074-8307-8bd8c82c9de6",
                    "23f78938-f1ae-4ce8-9b5e-bfd5b697c2ca",
                    "cbcbb3bf-1f7f-4e0e-a1a3-38c8f5bdf1ab",
                    "ad5431af-67f4-45e4-9e92-898eec4821b9",
                    "5eb093bf-d835-4c80-8c26-37f604927e09",
                    "4ea6df63-d5fb-4c3a-8516-198e0391084b",
                    "bb697781-7e09-4fcc-b0f6-112f1cbf6d69",
                    "f31eed12-9c92-4102-8ebf-e047c1d8eefb",
                    "09da6182-90d4-47bf-923a-094215f441c1",
                    "df849451-e989-4a35-b0e5-0df988e31fc8",
                    "8eb0bf3c-e32d-450f-b26e-9d7524795158",
                    "2e4efe04-2f9f-41ed-89d9-0420b542e763",
                    "7ca0cbbe-69b6-45dd-b41b-f4ac6bc04999",
                    "7c7bdcf9-84ee-4cad-be1b-05f1e6416755",
                    "af09f509-6175-4d8c-9c25-2cc67fadc52f",
                    "656ba3f3-78c4-4463-bf07-d2c500c19c95",
                    "b4c2ea40-5d9e-42e5-b117-c8de7f7cb6fb",
                    "1ad59f7a-9de8-4d3a-a4b0-115f8c59e895",
                    "51bc1a7a-434e-4c05-8275-23fcb65024a9",
                    "c7409e0e-6924-4803-9abb-62c4ac5dd8fa",
                    "6fc28b87-d80f-415c-bd2b-9ab761992ec6",
                    "71d6f46c-1395-4512-ae30-6a803cfae8f4",
                    "30252b00-f794-4456-9d80-8d1e67d7f7c3",
                    "042f3046-966c-418c-bc12-460ef4532a0d",
                    "ba519680-f7c7-4e24-adce-0ce48510f5ad",
                    "1413a492-62d0-48bc-b70c-a5245c4c5218"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 26.839902877807617,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.8598541021347046,
                "Height": 0.05448282137513161,
                "Left": 0.05941936746239662,
                "Top": 0.5184840559959412
            },
            "Polygon": [
                {
                    "X": 0.05941936746239662,
                    "Y": 0.5185874104499817
                },
                {
                    "X": 0.9192487597465515,
                    "Y": 0.5184840559959412
                },
                {
                    "X": 0.9192734360694885,
                    "Y": 0.5728715658187866
                },
                {
                    "X": 0.05942933261394501,
                    "Y": 0.5729668736457825
                }
            ]
        },
        "Id": "6c206e5d-b8d1-42cd-91bb-150538480b0e",
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 26.421092987060547,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.06157161667943001,
                "Height": 0.007713769096881151,
                "Left": 0.18485426902770996,
                "Top": 0.5938472151756287
            },
            "Polygon": [
                {
                    "X": 0.18485426902770996,
                    "Y": 0.5938538312911987
                },
                {
                    "X": 0.24642401933670044,
                    "Y": 0.5938472151756287
                },
                {
                    "X": 0.24642588198184967,
                    "Y": 0.6015545129776001
                },
                {
                    "X": 0.18485599756240845,
                    "Y": 0.6015610098838806
                }
            ]
        },
        "Id": "2b2bd710-6e35-4eb9-81c6-b846a29b43d5",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "b70b3a40-6a48-47ee-9e6d-929b49236d17"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "735a4f1d-450f-4c49-9ca8-e9c8740e483d"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 26.421092987060547,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0979110449552536,
                "Height": 0.024162331596016884,
                "Left": 0.18407656252384186,
                "Top": 0.6062481999397278
            },
            "Polygon": [
                {
                    "X": 0.18407656252384186,
                    "Y": 0.6062585115432739
                },
                {
                    "X": 0.2819814682006836,
                    "Y": 0.6062481999397278
                },
                {
                    "X": 0.28198760747909546,
                    "Y": 0.6304005980491638
                },
                {
                    "X": 0.18408192694187164,
                    "Y": 0.6304104924201965
                }
            ]
        },
        "Id": "b70b3a40-6a48-47ee-9e6d-929b49236d17",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "e3fe0066-8391-4e18-862b-318b43266acb",
                    "aec89e98-bdf1-41c1-9464-126e6ed67d97",
                    "ff1b2a77-4f7c-4191-a0f5-21452d0ff3a7",
                    "33939146-02ed-4d1e-84f2-496616cdbc27",
                    "4c5c9c1b-fb52-4171-bcd2-5f3b39db02b4",
                    "4714dc5e-90fa-4d79-a4d4-e1142426a454",
                    "7f81e601-e501-46ff-bd8e-876690e5a3df",
                    "2b4d70e6-45a6-4ba8-ae6b-46ff1009c15f"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 24.841127395629883,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.031307123601436615,
                "Height": 0.006651639938354492,
                "Left": 0.782325804233551,
                "Top": 0.6057544946670532
            },
            "Polygon": [
                {
                    "X": 0.782325804233551,
                    "Y": 0.6057577729225159
                },
                {
                    "X": 0.8136301636695862,
                    "Y": 0.6057544946670532
                },
                {
                    "X": 0.8136329650878906,
                    "Y": 0.6124028563499451
                },
                {
                    "X": 0.7823285460472107,
                    "Y": 0.6124061346054077
                }
            ]
        },
        "Id": "809190c3-2e0e-421b-b8dd-692fcec67dbf",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "95aae85f-d2b2-449b-b22b-00e68cdae0f9"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 24.841127395629883,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.101226806640625,
                "Height": 0.006763739045709372,
                "Left": 0.8141854405403137,
                "Top": 0.6057909727096558
            },
            "Polygon": [
                {
                    "X": 0.8141854405403137,
                    "Y": 0.6058016419410706
                },
                {
                    "X": 0.9154091477394104,
                    "Y": 0.6057909727096558
                },
                {
                    "X": 0.9154122471809387,
                    "Y": 0.6125441789627075
                },
                {
                    "X": 0.8141882419586182,
                    "Y": 0.6125547289848328
                }
            ]
        },
        "Id": "95aae85f-d2b2-449b-b22b-00e68cdae0f9",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "25c06405-aa99-47c6-828e-b533e6f13acd"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 23.659988403320312,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.04888197034597397,
                "Height": 0.007655948866158724,
                "Left": 0.8713411092758179,
                "Top": 0.32666704058647156
            },
            "Polygon": [
                {
                    "X": 0.8713411092758179,
                    "Y": 0.32667452096939087
                },
                {
                    "X": 0.9202196002006531,
                    "Y": 0.32666704058647156
                },
                {
                    "X": 0.92022305727005,
                    "Y": 0.33431556820869446
                },
                {
                    "X": 0.8713444471359253,
                    "Y": 0.334322988986969
                }
            ]
        },
        "Id": "261be18d-07b0-4209-9e08-11a3c0b094b8",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "e0bec3ca-5326-407f-be48-7142c7211c9e"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "6342d5c8-bff1-40eb-b8e4-2418c8a5e279"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 23.659988403320312,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.02614201419055462,
                "Height": 0.008840648457407951,
                "Left": 0.8935784697532654,
                "Top": 0.34108105301856995
            },
            "Polygon": [
                {
                    "X": 0.8935784697532654,
                    "Y": 0.3410849869251251
                },
                {
                    "X": 0.919716477394104,
                    "Y": 0.34108105301856995
                },
                {
                    "X": 0.919720470905304,
                    "Y": 0.34991779923439026
                },
                {
                    "X": 0.8935824036598206,
                    "Y": 0.34992170333862305
                }
            ]
        },
        "Id": "e0bec3ca-5326-407f-be48-7142c7211c9e",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "09c728b0-8a9a-4798-84c2-2c74808c00a4"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 23.25904655456543,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.020281584933400154,
                "Height": 0.0075123365968465805,
                "Left": 0.1472744643688202,
                "Top": 0.18659713864326477
            },
            "Polygon": [
                {
                    "X": 0.1472744643688202,
                    "Y": 0.1866007298231125
                },
                {
                    "X": 0.16755440831184387,
                    "Y": 0.18659713864326477
                },
                {
                    "X": 0.1675560474395752,
                    "Y": 0.19410592317581177
                },
                {
                    "X": 0.14727604389190674,
                    "Y": 0.1941094845533371
                }
            ]
        },
        "Id": "d35ad8cd-daa1-46cf-bfab-cb12e5b5b9ba",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "24d12fab-24b4-43e4-ac58-5b59cff38e70"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "0b840adf-7cb4-4f4e-b5e5-45b3976614eb"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 23.25904655456543,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.026955369859933853,
                "Height": 0.006928013172000647,
                "Left": 0.16894616186618805,
                "Top": 0.18717961013317108
            },
            "Polygon": [
                {
                    "X": 0.16894616186618805,
                    "Y": 0.1871843785047531
                },
                {
                    "X": 0.19589996337890625,
                    "Y": 0.18717961013317108
                },
                {
                    "X": 0.1959015280008316,
                    "Y": 0.19410288333892822
                },
                {
                    "X": 0.16894766688346863,
                    "Y": 0.19410762190818787
                }
            ]
        },
        "Id": "24d12fab-24b4-43e4-ac58-5b59cff38e70",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "36f53747-b1d9-406f-83f7-498c05bd00b9"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 22.407499313354492,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.0845811739563942,
                "Height": 0.007160253822803497,
                "Left": 0.08840297907590866,
                "Top": 0.1676463782787323
            },
            "Polygon": [
                {
                    "X": 0.08840297907590866,
                    "Y": 0.1676616221666336
                },
                {
                    "X": 0.1729825884103775,
                    "Y": 0.1676463782787323
                },
                {
                    "X": 0.17298415303230286,
                    "Y": 0.17479149997234344
                },
                {
                    "X": 0.0884043499827385,
                    "Y": 0.1748066246509552
                }
            ]
        },
        "Id": "f369dbe3-794b-4271-9f73-4dcd27c50367",
        "Relationships": [
            {
                "Type": "VALUE",
                "Ids": [
                    "8a7af5ef-7017-4293-8b58-be96a152fefd"
                ]
            },
            {
                "Type": "CHILD",
                "Ids": [
                    "fc9c5767-7f84-46bd-98f4-726c069e57d0"
                ]
            }
        ],
        "EntityTypes": [
            "KEY"
        ]
    },
    {
        "BlockType": "KEY_VALUE_SET",
        "Confidence": 22.407499313354492,
        "Geometry": {
            "BoundingBox": {
                "Width": 0.15083129703998566,
                "Height": 0.007706427946686745,
                "Left": 0.16774249076843262,
                "Top": 0.17670775949954987
            },
            "Polygon": [
                {
                    "X": 0.16774249076843262,
                    "Y": 0.17673470079898834
                },
                {
                    "X": 0.3185717463493347,
                    "Y": 0.17670775949954987
                },
                {
                    "X": 0.31857380270957947,
                    "Y": 0.1843874305486679
                },
                {
                    "X": 0.16774415969848633,
                    "Y": 0.18441417813301086
                }
            ]
        },
        "Id": "8a7af5ef-7017-4293-8b58-be96a152fefd",
        "Relationships": [
            {
                "Type": "CHILD",
                "Ids": [
                    "8bedb801-1986-4c32-aded-81bc0ba429cb",
                    "942259d3-f41b-4ab4-9108-46abbf758b1d",
                    "506b3600-a5b7-4a03-8ee2-4b03ace54d5f",
                    "30add774-f2e3-4006-8e14-ae6ff67a67ac",
                    "93df3d7a-71c8-4ee5-bb2a-6a8dc55b91e4",
                    "6b9311a7-5878-4fe7-8428-e3428f913633"
                ]
            }
        ],
        "EntityTypes": [
            "VALUE"
        ]
    }
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
  

return (
    <View style={{flex: 1}}>
      <Image 
        source={require('./assets/Scan0005.jpg')}
        style={{width: windowWidth, height: windowHeight}}
        resizeMode="contain"
      />
      {blocks.filter(block => ["WORD", "LINE"].includes(block.BlockType)).map((block, index) => {
        const position = 'absolute';
        const width = block.Geometry.BoundingBox.Width * windowWidth;
        const height = block.Geometry.BoundingBox.Height * windowHeight;
        const left = block.Geometry.BoundingBox.Left * windowWidth;
        const top = block.Geometry.BoundingBox.Top * windowHeight;
        
        const backgroundColor = 'rgba(0, 0, 255, 0.3)'; // semi-transparent blue

        return (
          <View
            key={index}
            style={{
              position: position,
              left: left,
              top: top,
              width: width,
              height: height,
              backgroundColor: backgroundColor,
            }}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

export default App;
