import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_6_32}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2183/add1/3c62fbc4b260891e31638128416cc46b"
          }}
          style={styles.ImageBackground_6_33}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec9c/634a/0185e365dee8779905f2291e0381a072"
          }}
          style={styles.ImageBackground_6_34}
        />
        <View style={styles.View_6_35}>
          <View style={styles.View_6_36} />
          <View style={styles.View_6_37}>
            <View style={styles.View_6_38}>
              <View style={styles.View_6_39} />
              <View style={styles.View_6_40}>
                <View style={styles.View_6_41}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a771/376d/f48714e64d20329809cae414cf39d53c"
                    }}
                    style={styles.ImageBackground_6_42}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_43}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_44}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_45}
                  />
                </View>
                <View style={styles.View_6_46}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a771/376d/f48714e64d20329809cae414cf39d53c"
                    }}
                    style={styles.ImageBackground_6_47}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_48}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_49}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_50}
                  />
                </View>
                <View style={styles.View_6_51}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a771/376d/f48714e64d20329809cae414cf39d53c"
                    }}
                    style={styles.ImageBackground_6_52}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_53}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_54}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_55}
                  />
                </View>
                <View style={styles.View_6_56}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a771/376d/f48714e64d20329809cae414cf39d53c"
                    }}
                    style={styles.ImageBackground_6_57}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_58}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_59}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_60}
                  />
                </View>
                <View style={styles.View_6_61}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a771/376d/f48714e64d20329809cae414cf39d53c"
                    }}
                    style={styles.ImageBackground_6_62}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_63}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_64}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_65}
                  />
                </View>
                <View style={styles.View_6_66}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a771/376d/f48714e64d20329809cae414cf39d53c"
                    }}
                    style={styles.ImageBackground_6_67}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_68}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_69}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_70}
                  />
                </View>
                <View style={styles.View_6_71}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a771/376d/f48714e64d20329809cae414cf39d53c"
                    }}
                    style={styles.ImageBackground_6_72}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_73}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_74}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_75}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_6_76}>
              <View style={styles.View_6_77} />
              <View style={styles.View_6_78}>
                <View style={styles.View_6_79}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_80}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_81}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_82}
                  />
                </View>
              </View>
              <View style={styles.View_6_83}>
                <View style={styles.View_6_84}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_85}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_86}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_87}
                  />
                </View>
              </View>
              <View style={styles.View_6_88}>
                <View style={styles.View_6_89}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_90}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_91}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_92}
                  />
                </View>
              </View>
              <View style={styles.View_6_93}>
                <View style={styles.View_6_94}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_95}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_96}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_97}
                  />
                </View>
              </View>
              <View style={styles.View_6_98}>
                <View style={styles.View_6_99}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_100}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_101}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_102}
                  />
                </View>
              </View>
              <View style={styles.View_6_103}>
                <View style={styles.View_6_104}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_105}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_106}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_107}
                  />
                </View>
              </View>
              <View style={styles.View_6_108}>
                <View style={styles.View_6_109}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_110}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_111}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_112}
                  />
                </View>
              </View>
              <View style={styles.View_6_113}>
                <View style={styles.View_6_114}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_115}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_116}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_117}
                  />
                </View>
                <View style={styles.View_6_118}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_119}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_120}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_121}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_6_122} />
        <View style={styles.View_6_123} />
        <View style={styles.View_6_124} />
        <View style={styles.View_6_125} />
        <View style={styles.View_6_126}>
          <View style={styles.View_6_127} />
          <View style={styles.View_6_128}>
            <Text style={styles.Text_6_128}>Edit Selected</Text>
          </View>
        </View>
        <View style={styles.View_6_129}>
          <View style={styles.View_6_130} />
          <View style={styles.View_6_131}>
            <Text style={styles.Text_6_131}>Templates</Text>
          </View>
          <View style={styles.View_6_132} />
        </View>
        <View style={styles.View_6_133}>
          <View style={styles.View_6_134}>
            <View style={styles.View_6_135} />
            <View style={styles.View_6_136}>
              <Text style={styles.Text_6_136}>AI Suggested</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_6_137}>
          <View style={styles.View_6_138}>
            <View style={styles.View_6_139} />
            <View style={styles.View_6_140}>
              <Text style={styles.Text_6_140}>Modules</Text>
            </View>
          </View>
          <View style={styles.View_6_141} />
        </View>
      </View>
      <View style={styles.View_1_5}>
        <View style={styles.View_1_6}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04fd/5c33/0547c5b3971a10b0cfb3e2c19f0cb775"
            }}
            style={styles.ImageBackground_1_7}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82a0/875f/7dd9d09202fe085abe1fd2b156eb546b"
            }}
            style={styles.ImageBackground_1_8}
          />
        </View>
        <View style={styles.View_1_9}>
          <View style={styles.View_1_10} />
          <View style={styles.View_1_11}>
            <Text style={styles.Text_1_11}>Edit Selected</Text>
          </View>
          <View style={styles.View_1_12} />
        </View>
        <View style={styles.View_1_13}>
          <View style={styles.View_1_14} />
          <View style={styles.View_1_15}>
            <Text style={styles.Text_1_15}>Templates</Text>
          </View>
          <View style={styles.View_1_16} />
          <View style={styles.View_1_17} />
        </View>
        <View style={styles.View_1_18}>
          <View style={styles.View_1_19}>
            <View style={styles.View_1_20} />
            <View style={styles.View_1_21}>
              <Text style={styles.Text_1_21}>AI Suggested</Text>
            </View>
          </View>
          <View style={styles.View_1_22} />
        </View>
        <View style={styles.View_1_23}>
          <View style={styles.View_1_24}>
            <View style={styles.View_1_25} />
            <View style={styles.View_1_26} />
            <View style={styles.View_1_27} />
            <View style={styles.View_1_28} />
            <View style={styles.View_1_29}>
              <Text style={styles.Text_1_29}>Modules</Text>
            </View>
          </View>
          <View style={styles.View_1_30} />
        </View>
        <View style={styles.View_1_31}>
          <Text style={styles.Text_1_31}>Add Modules</Text>
        </View>
        <View style={styles.View_1_32}>
          <View style={styles.View_1_33}>
            <View style={styles.View_1_34}>
              <View style={styles.View_1_35} />
              <View style={styles.View_1_36} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee4f/0195/0c30d0c1fad2d9d2ae88eed84ab6f47b"
                }}
                style={styles.ImageBackground_1_37}
              />
              <View style={styles.View_1_38}>
                <Text style={styles.Text_1_38}>Create a module</Text>
              </View>
              <View style={styles.View_1_39} />
            </View>
          </View>
        </View>
        <View style={styles.View_2_446}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6301/332e/15c86012fd7745a059b8e7658171c561"
            }}
            style={styles.ImageBackground_2_447}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5aa/e632/1517071da387dd8c15ddfce18aaef5b3"
            }}
            style={styles.ImageBackground_2_448}
          />
        </View>
        <View style={styles.View_1_40}>
          <View style={styles.View_1_41} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc6f/d468/4730e96baec2eede38dd7b7c56aac843"
            }}
            style={styles.ImageBackground_1_42}
          />
          <View style={styles.View_1_45}>
            <Text style={styles.Text_1_45}>All modules</Text>
          </View>
        </View>
        <View style={styles.View_1_46}>
          <View style={styles.View_1_47} />
          <View style={styles.View_1_48} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7e3/333c/1da2d0ee648dc5819f9b61045160e2a3"
            }}
            style={styles.ImageBackground_1_49}
          />
          <View style={styles.View_1_50}>
            <Text style={styles.Text_1_50}>Search...</Text>
          </View>
        </View>
        <View style={styles.View_1_51}>
          <View style={styles.View_1_52} />
          <View style={styles.View_1_53}>
            <Text style={styles.Text_1_53}>
              Show only modules available with Basic Subscription
            </Text>
          </View>
        </View>
        <View style={styles.View_1_54}>
          <Text style={styles.Text_1_54}>
            Upgrade your subscription model to access more features.
          </Text>
        </View>
        <View style={styles.View_1_55}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c1/972a/2ef2109446f95c2120b2d2908fc11db6"
            }}
            style={styles.ImageBackground_1_56}
          />
          <View style={styles.View_1_57} />
          <View style={styles.View_1_58} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef40/be66/1ee4aea8f98cba2834ff9257e991d5f6"
            }}
            style={styles.ImageBackground_1_59}
          />
          <View style={styles.View_1_60}>
            <View style={styles.View_1_61} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f062/1aff/c150e9172251c70cbaeedc4adb631a62"
              }}
              style={styles.ImageBackground_1_62}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fedf/1e8e/02be9b03c75b7197d98737d74aad9fdd"
              }}
              style={styles.ImageBackground_1_63}
            />
          </View>
          <View style={styles.View_1_64}>
            <Text style={styles.Text_1_64}>$399.90</Text>
          </View>
          <View style={styles.View_1_65}>
            <Text style={styles.Text_1_65}>Article View</Text>
          </View>
          <View style={styles.View_1_66}>
            <Text style={styles.Text_1_66}>Crowdbotics</Text>
          </View>
          <View style={styles.View_1_67} />
        </View>
        <View style={styles.View_1_68}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da4c/c404/0f60f4595972cfb016a2850af13df0f8"
            }}
            style={styles.ImageBackground_1_69}
          />
          <View style={styles.View_1_70}>
            <View style={styles.View_1_71} />
            <View style={styles.View_1_72}>
              <Text style={styles.Text_1_72}>Owned</Text>
            </View>
            <View style={styles.View_1_73}>
              <Text style={styles.Text_1_73}>Map View</Text>
            </View>
            <View style={styles.View_1_74}>
              <Text style={styles.Text_1_74}>Crowdbotics</Text>
            </View>
          </View>
          <View style={styles.View_1_75}>
            <View style={styles.View_1_76} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f062/1aff/c150e9172251c70cbaeedc4adb631a62"
              }}
              style={styles.ImageBackground_1_77}
            />
          </View>
        </View>
        <View style={styles.View_1_78}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a39/82b8/57c7b03e2ebaa2328385c35914d36e2b"
            }}
            style={styles.ImageBackground_1_79}
          />
          <View style={styles.View_1_80} />
          <View style={styles.View_1_81}>
            <View style={styles.View_1_82} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f062/1aff/c150e9172251c70cbaeedc4adb631a62"
              }}
              style={styles.ImageBackground_1_83}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fedf/1e8e/02be9b03c75b7197d98737d74aad9fdd"
              }}
              style={styles.ImageBackground_1_84}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d37e/df6b/f864f00da267d4d1c327ebd9774d0811"
            }}
            style={styles.ImageBackground_1_85}
          />
          <View style={styles.View_1_86}>
            <View style={styles.View_1_87} />
            <View style={styles.View_1_88}>
              <Text style={styles.Text_1_88}>$399.90</Text>
            </View>
            <View style={styles.View_1_89}>
              <Text style={styles.Text_1_89}>Feed</Text>
            </View>
            <View style={styles.View_1_90}>
              <Text style={styles.Text_1_90}>Crowdbotics</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_91}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/484c/8c9e/3b4789e471ade7e250c5f62c0a3663ea"
            }}
            style={styles.ImageBackground_1_92}
          />
          <View style={styles.View_1_93}>
            <View style={styles.View_1_94} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f062/1aff/c150e9172251c70cbaeedc4adb631a62"
              }}
              style={styles.ImageBackground_1_95}
            />
          </View>
          <View style={styles.View_1_96}>
            <View style={styles.View_1_97} />
            <View style={styles.View_1_98}>
              <Text style={styles.Text_1_98}>$399.90</Text>
            </View>
            <View style={styles.View_1_99}>
              <Text style={styles.Text_1_99}>List Menu</Text>
            </View>
            <View style={styles.View_1_100}>
              <Text style={styles.Text_1_100}>Crowdbotics</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_101} />
        <View style={styles.View_1_105}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/342c/49ab/03414d9efedd15f3806b2f86919c7db1"
            }}
            style={styles.ImageBackground_1_106}
          />
          <View style={styles.View_1_107}>
            <View style={styles.View_1_108} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f062/1aff/c150e9172251c70cbaeedc4adb631a62"
              }}
              style={styles.ImageBackground_1_109}
            />
          </View>
          <View style={styles.View_1_110}>
            <View style={styles.View_1_111} />
            <View style={styles.View_1_112}>
              <Text style={styles.Text_1_112}>$399.90</Text>
            </View>
            <View style={styles.View_1_113}>
              <Text style={styles.Text_1_113}>Article list</Text>
            </View>
            <View style={styles.View_1_114}>
              <Text style={styles.Text_1_114}>Crowdbotics</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_115}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da4c/c404/0f60f4595972cfb016a2850af13df0f8"
            }}
            style={styles.ImageBackground_1_116}
          />
          <View style={styles.View_1_117}>
            <View style={styles.View_1_118} />
            <View style={styles.View_1_119}>
              <Text style={styles.Text_1_119}>Owned</Text>
            </View>
            <View style={styles.View_1_120}>
              <Text style={styles.Text_1_120}>Map View</Text>
            </View>
            <View style={styles.View_1_121}>
              <Text style={styles.Text_1_121}>Crowdbotics</Text>
            </View>
          </View>
          <View style={styles.View_1_122}>
            <View style={styles.View_1_123} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f062/1aff/c150e9172251c70cbaeedc4adb631a62"
              }}
              style={styles.ImageBackground_1_124}
            />
          </View>
        </View>
        <View style={styles.View_1_125}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/342c/49ab/03414d9efedd15f3806b2f86919c7db1"
            }}
            style={styles.ImageBackground_1_126}
          />
          <View style={styles.View_1_127}>
            <View style={styles.View_1_128} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f062/1aff/c150e9172251c70cbaeedc4adb631a62"
              }}
              style={styles.ImageBackground_1_129}
            />
          </View>
          <View style={styles.View_1_130}>
            <View style={styles.View_1_131} />
            <View style={styles.View_1_132}>
              <Text style={styles.Text_1_132}>Free</Text>
            </View>
            <View style={styles.View_1_133}>
              <Text style={styles.Text_1_133}>Article list</Text>
            </View>
            <View style={styles.View_1_134}>
              <Text style={styles.Text_1_134}>Crowdbotics</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_135}>
          <View style={styles.View_1_136} />
          <View style={styles.View_1_137}>
            <View style={styles.View_1_138}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a77/25ab/347965d743a4f24eb64487c501fdd72e"
                }}
                style={styles.ImageBackground_1_139}
              />
              <View style={styles.View_1_140}>
                <View style={styles.View_1_141} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f062/1aff/c150e9172251c70cbaeedc4adb631a62"
                  }}
                  style={styles.ImageBackground_1_142}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fedf/1e8e/02be9b03c75b7197d98737d74aad9fdd"
                  }}
                  style={styles.ImageBackground_1_143}
                />
              </View>
            </View>
            <View style={styles.View_1_144}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ce9/9c9c/8c4fc60db01829d3ed5e51f3423ef948"
                }}
                style={styles.ImageBackground_1_145}
              />
              <View style={styles.View_1_146} />
              <View style={styles.View_1_147}>
                <View style={styles.View_1_148} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f062/1aff/c150e9172251c70cbaeedc4adb631a62"
                  }}
                  style={styles.ImageBackground_1_149}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fedf/1e8e/02be9b03c75b7197d98737d74aad9fdd"
                  }}
                  style={styles.ImageBackground_1_150}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d37e/df6b/f864f00da267d4d1c327ebd9774d0811"
                }}
                style={styles.ImageBackground_1_151}
              />
            </View>
            <View style={styles.View_1_152}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/342c/49ab/03414d9efedd15f3806b2f86919c7db1"
                }}
                style={styles.ImageBackground_1_153}
              />
              <View style={styles.View_1_154} />
              <View style={styles.View_1_155}>
                <View style={styles.View_1_156} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f062/1aff/c150e9172251c70cbaeedc4adb631a62"
                  }}
                  style={styles.ImageBackground_1_157}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fedf/1e8e/02be9b03c75b7197d98737d74aad9fdd"
                  }}
                  style={styles.ImageBackground_1_158}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d37e/df6b/f864f00da267d4d1c327ebd9774d0811"
                }}
                style={styles.ImageBackground_1_159}
              />
            </View>
            <View style={styles.View_1_160}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/342c/49ab/03414d9efedd15f3806b2f86919c7db1"
                }}
                style={styles.ImageBackground_1_161}
              />
              <View style={styles.View_1_162} />
              <View style={styles.View_1_163}>
                <View style={styles.View_1_164} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f062/1aff/c150e9172251c70cbaeedc4adb631a62"
                  }}
                  style={styles.ImageBackground_1_165}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fedf/1e8e/02be9b03c75b7197d98737d74aad9fdd"
                  }}
                  style={styles.ImageBackground_1_166}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d37e/df6b/f864f00da267d4d1c327ebd9774d0811"
                }}
                style={styles.ImageBackground_1_167}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1_168}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/838d/c6ba/b0f3e72c6397699a5b3c1af758183bc6"
            }}
            style={styles.ImageBackground_1_169}
          />
          <View style={styles.View_1_170}>
            <View style={styles.View_1_171}>
              <View style={styles.View_1_172} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f062/1aff/c150e9172251c70cbaeedc4adb631a62"
                }}
                style={styles.ImageBackground_1_173}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fedf/1e8e/02be9b03c75b7197d98737d74aad9fdd"
                }}
                style={styles.ImageBackground_1_174}
              />
            </View>
            <View style={styles.View_1_175}>
              <View style={styles.View_1_176} />
              <View style={styles.View_1_177}>
                <Text style={styles.Text_1_177}>Owned</Text>
              </View>
              <View style={styles.View_1_178}>
                <Text style={styles.Text_1_178}>Dashboard</Text>
              </View>
              <View style={styles.View_1_179}>
                <Text style={styles.Text_1_179}>Crowdbotics</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_180} />
      </View>
      <View style={styles.View_2_460}>
        <View style={styles.View_2_465}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/986b/82d7/ec5eed74b8eca7f300890286e99c2f62"
            }}
            style={styles.ImageBackground_2_466}
          />
          <View style={styles.View_2_473} />
          <View style={styles.View_2_475}>
            <View style={styles.View_2_477}>
              <Text style={styles.Text_2_477}>create a blank module</Text>
            </View>
            <View style={styles.View_2_478}>
              <Text style={styles.Text_2_478}>import design</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_843}>
        <View style={styles.View_2_844} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c1/972a/2ef2109446f95c2120b2d2908fc11db6"
          }}
          style={styles.ImageBackground_2_845}
        />
        <View style={styles.View_2_846} />
        <View style={styles.View_2_847}>
          <Text style={styles.Text_2_847}>Article View</Text>
        </View>
        <View style={styles.View_2_848} />
      </View>
      <View style={styles.View_2_849}>
        <View style={styles.View_2_850} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a39/82b8/57c7b03e2ebaa2328385c35914d36e2b"
          }}
          style={styles.ImageBackground_2_851}
        />
        <View style={styles.View_2_852}>
          <View style={styles.View_2_853} />
          <View style={styles.View_2_854}>
            <Text style={styles.Text_2_854}>Feed</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_855}>
        <View style={styles.View_2_856} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/342c/49ab/03414d9efedd15f3806b2f86919c7db1"
          }}
          style={styles.ImageBackground_2_857}
        />
        <View style={styles.View_2_858}>
          <View style={styles.View_2_859} />
          <View style={styles.View_2_860}>
            <Text style={styles.Text_2_860}>Article list</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_861}>
        <View style={styles.View_2_862} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/342c/49ab/03414d9efedd15f3806b2f86919c7db1"
          }}
          style={styles.ImageBackground_2_863}
        />
        <View style={styles.View_2_864}>
          <View style={styles.View_2_865} />
          <View style={styles.View_2_866}>
            <Text style={styles.Text_2_866}>Article list</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_867}>
        <View style={styles.View_2_868} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/838d/c6ba/b0f3e72c6397699a5b3c1af758183bc6"
          }}
          style={styles.ImageBackground_2_869}
        />
        <View style={styles.View_2_870}>
          <View style={styles.View_2_871}>
            <View style={styles.View_2_872} />
            <View style={styles.View_2_873}>
              <Text style={styles.Text_2_873}>Dashboard</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_1858}>
        <View style={styles.View_I2_1858_2_1703}>
          <View style={styles.View_I2_1858_2_1706} />
          <View style={styles.View_I2_1858_2_1912} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/c3a8/37d181acc01cfdde353591a2944d812c"
            }}
            style={styles.ImageBackground_I2_1858_2_1708}
          />
          <View style={styles.View_I2_1858_2_2108}>
            <View style={styles.View_I2_1858_2_1705} />
            <View style={styles.View_I2_1858_2_1709}>
              <Text style={styles.Text_I2_1858_2_1709}>save</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I2_1858_2_1727}>
          <View style={styles.View_I2_1858_2_1728}>
            <View style={styles.View_I2_1858_2_1729} />
            <View style={styles.View_I2_1858_2_1730}>
              <Text style={styles.Text_I2_1858_2_1730}>Cancel</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I2_1858_2_1715}>
          <View style={styles.View_I2_1858_2_1716} />
          <View style={styles.View_I2_1858_2_1717}>
            <Text style={styles.Text_I2_1858_2_1717}>properties</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("147.54098360655738%") },
  View_6_32: {
    width: wp("99.94791666666667%"),
    minWidth: wp("99.94791666666667%"),
    height: hp("147.54098360655738%"),
    minHeight: hp("147.54098360655738%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_33: {
    width: wp("99.94791666666667%"),
    minWidth: wp("99.94791666666667%"),
    height: hp("133.74316939890713%"),
    minHeight: hp("133.74316939890713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_6_34: {
    width: wp("99.94791666666667%"),
    minWidth: wp("99.94791666666667%"),
    height: hp("73.224043715847%"),
    minHeight: hp("73.224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74.31693989071039%")
  },
  View_6_35: {
    width: wp("81.71875%"),
    minWidth: wp("81.71875%"),
    height: hp("121.31147540983606%"),
    minHeight: hp("121.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.770833333333334%"),
    top: hp("21.311475409836063%")
  },
  View_6_36: {
    width: wp("81.71875%"),
    minWidth: wp("81.71875%"),
    height: hp("121.31147540983606%"),
    minHeight: hp("121.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_6_37: {
    width: wp("81.71875%"),
    minWidth: wp("81.71875%"),
    height: hp("121.31147540983606%"),
    minHeight: hp("121.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_38: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("122.95081967213115%"),
    minHeight: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_39: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("122.95081967213115%"),
    minHeight: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_6_40: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("122.95081967213115%"),
    minHeight: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_41: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("116.39344262295081%")
  },
  ImageBackground_6_42: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_43: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.96874999999999%"),
    top: hp("0%")
  },
  ImageBackground_6_44: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.447916666666664%"),
    top: hp("0%")
  },
  ImageBackground_6_45: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.302083333333336%"),
    top: hp("0%")
  },
  View_6_46: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("96.99453551912569%")
  },
  ImageBackground_6_47: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_48: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.96874999999999%"),
    top: hp("0%")
  },
  ImageBackground_6_49: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.447916666666664%"),
    top: hp("0%")
  },
  ImageBackground_6_50: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.302083333333336%"),
    top: hp("0%")
  },
  View_6_51: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("77.59562841530054%")
  },
  ImageBackground_6_52: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_53: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.96874999999999%"),
    top: hp("0%")
  },
  ImageBackground_6_54: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.447916666666664%"),
    top: hp("0%")
  },
  ImageBackground_6_55: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.302083333333336%"),
    top: hp("0%")
  },
  View_6_56: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.1967213114754%")
  },
  ImageBackground_6_57: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_58: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.96874999999999%"),
    top: hp("0%")
  },
  ImageBackground_6_59: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.447916666666664%"),
    top: hp("0%")
  },
  ImageBackground_6_60: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.302083333333336%"),
    top: hp("0%")
  },
  View_6_61: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.797814207650276%")
  },
  ImageBackground_6_62: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_63: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.96874999999999%"),
    top: hp("0%")
  },
  ImageBackground_6_64: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.447916666666664%"),
    top: hp("0%")
  },
  ImageBackground_6_65: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.302083333333336%"),
    top: hp("0%")
  },
  View_6_66: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.398907103825135%")
  },
  ImageBackground_6_67: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_68: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.96874999999999%"),
    top: hp("0%")
  },
  ImageBackground_6_69: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.447916666666664%"),
    top: hp("0%")
  },
  ImageBackground_6_70: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.302083333333336%"),
    top: hp("0%")
  },
  View_6_71: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_72: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_73: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.96874999999999%"),
    top: hp("0%")
  },
  ImageBackground_6_74: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.447916666666664%"),
    top: hp("0%")
  },
  ImageBackground_6_75: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.302083333333336%"),
    top: hp("0%")
  },
  View_6_76: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("122.95081967213115%"),
    minHeight: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.104166666666664%"),
    top: hp("0%")
  },
  View_6_77: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("122.95081967213115%"),
    minHeight: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_6_78: {
    width: wp("65.72916666666667%"),
    minWidth: wp("65.72916666666667%"),
    height: hp("122.95081967213115%"),
    minHeight: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_79: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_80: {
    width: wp("15.312500000000002%"),
    minWidth: wp("15.312500000000002%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4375%"),
    top: hp("0%")
  },
  ImageBackground_6_81: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.46875%"),
    top: hp("0%")
  },
  ImageBackground_6_82: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_83: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.97916666666667%"),
    top: hp("84.15300546448088%")
  },
  View_6_84: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_85: {
    width: wp("15.312500000000002%"),
    minWidth: wp("15.312500000000002%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4375%"),
    top: hp("0%")
  },
  ImageBackground_6_86: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.46875%"),
    top: hp("0%")
  },
  ImageBackground_6_87: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_88: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.97916666666667%"),
    top: hp("64.75409836065573%")
  },
  View_6_89: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_90: {
    width: wp("15.312500000000002%"),
    minWidth: wp("15.312500000000002%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4375%"),
    top: hp("0%")
  },
  ImageBackground_6_91: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.46875%"),
    top: hp("0%")
  },
  ImageBackground_6_92: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_93: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.97916666666667%"),
    top: hp("45.355191256830594%")
  },
  View_6_94: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_95: {
    width: wp("15.312500000000002%"),
    minWidth: wp("15.312500000000002%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4375%"),
    top: hp("0%")
  },
  ImageBackground_6_96: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.46875%"),
    top: hp("0%")
  },
  ImageBackground_6_97: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_98: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.97916666666667%"),
    top: hp("64.75409836065573%")
  },
  View_6_99: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_100: {
    width: wp("15.312500000000002%"),
    minWidth: wp("15.312500000000002%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4375%"),
    top: hp("0%")
  },
  ImageBackground_6_101: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.46875%"),
    top: hp("0%")
  },
  ImageBackground_6_102: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_103: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.97916666666667%"),
    top: hp("45.355191256830594%")
  },
  View_6_104: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_105: {
    width: wp("15.312500000000002%"),
    minWidth: wp("15.312500000000002%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4375%"),
    top: hp("0%")
  },
  ImageBackground_6_106: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.46875%"),
    top: hp("0%")
  },
  ImageBackground_6_107: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_108: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.97916666666667%"),
    top: hp("25.95628415300547%")
  },
  View_6_109: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_110: {
    width: wp("15.312500000000002%"),
    minWidth: wp("15.312500000000002%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4375%"),
    top: hp("0%")
  },
  ImageBackground_6_111: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.46875%"),
    top: hp("0%")
  },
  ImageBackground_6_112: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_113: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("38.79781420765027%"),
    minHeight: hp("38.79781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.97916666666667%"),
    top: hp("-12.841530054644807%")
  },
  View_6_114: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.398907103825135%")
  },
  ImageBackground_6_115: {
    width: wp("15.312500000000002%"),
    minWidth: wp("15.312500000000002%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4375%"),
    top: hp("0%")
  },
  ImageBackground_6_116: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.46875%"),
    top: hp("0%")
  },
  ImageBackground_6_117: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_118: {
    width: wp("33.75%"),
    minWidth: wp("33.75%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_119: {
    width: wp("15.312500000000002%"),
    minWidth: wp("15.312500000000002%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4375%"),
    top: hp("0%")
  },
  ImageBackground_6_120: {
    width: wp("9.791666666666666%"),
    minWidth: wp("9.791666666666666%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.46875%"),
    top: hp("0%")
  },
  ImageBackground_6_121: {
    width: wp("11.197916666666668%"),
    minWidth: wp("11.197916666666668%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_122: {
    width: wp("40.88541666666667%"),
    minWidth: wp("40.88541666666667%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.06249999999999%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(233, 224, 249, 1)"
  },
  View_6_123: {
    width: wp("5.9375%"),
    minWidth: wp("5.9375%"),
    height: hp("53.00546448087432%"),
    minHeight: hp("53.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.01041666666666%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(233, 224, 249, 1)"
  },
  View_6_124: {
    width: wp("38.80208333333333%"),
    minWidth: wp("38.80208333333333%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.06249999999999%"),
    top: hp("14.617486338797814%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_6_125: {
    width: wp("83.07291666666666%"),
    minWidth: wp("83.07291666666666%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.9375%"),
    top: hp("142.62295081967213%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_6_126: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.01041666666666%"),
    top: hp("14.617486338797814%")
  },
  View_6_127: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_6_128: {
    width: wp("3.4895833333333335%"),
    minWidth: wp("3.4895833333333335%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    top: hp("2.3224043715846996%"),
    justifyContent: "flex-start"
  },
  Text_6_128: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_6_129: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.90625%"),
    top: hp("34.2896174863388%")
  },
  View_6_130: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10416666666665719%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_6_131: {
    width: wp("4.114583333333333%"),
    minWidth: wp("4.114583333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_6_131: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_6_132: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_6_133: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.01041666666666%"),
    top: hp("44.12568306010929%")
  },
  View_6_134: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_135: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0
  },
  View_6_136: {
    width: wp("4.114583333333333%"),
    minWidth: wp("4.114583333333333%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("2.322404371584703%"),
    justifyContent: "flex-start"
  },
  Text_6_136: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_6_137: {
    width: wp("5.3125%"),
    minWidth: wp("5.3125%"),
    height: hp("121.85792349726776%"),
    minHeight: hp("121.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.80208333333333%"),
    top: hp("21.03825136612022%")
  },
  View_6_138: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333286%"),
    top: hp("3.4153047155161325%")
  },
  View_6_139: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_6_140: {
    width: wp("3.3854166666666665%"),
    minWidth: wp("3.3854166666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8854166666666714%"),
    top: hp("3.5519125683060118%"),
    justifyContent: "flex-start"
  },
  Text_6_140: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_6_141: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("121.85792349726776%"),
    minHeight: hp("121.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_5: {
    width: wp("35.41666666666667%"),
    minWidth: wp("35.41666666666667%"),
    height: hp("117.07650273224044%"),
    minHeight: hp("117.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.697916666666664%"),
    top: hp("14.617486338797814%")
  },
  View_1_6: {
    width: wp("30.312499999999996%"),
    minWidth: wp("30.312499999999996%"),
    height: hp("117.07650273224044%"),
    minHeight: hp("117.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_7: {
    width: wp("30.312499999999996%"),
    minWidth: wp("30.312499999999996%"),
    height: hp("117.07650273224044%"),
    minHeight: hp("117.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_8: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("89.61748633879782%"),
    minHeight: hp("89.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.697916666666664%"),
    top: hp("25.546448087431695%")
  },
  View_1_9: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.208333333333336%"),
    top: hp("0%")
  },
  View_1_10: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10416666666665719%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_11: {
    width: wp("3.4895833333333335%"),
    minWidth: wp("3.4895833333333335%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9375%"),
    top: hp("2.3224043715846996%"),
    justifyContent: "flex-start"
  },
  Text_1_11: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1_12: {
    width: wp("0.10416666666666667%"),
    minWidth: wp("0.10416666666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_1_13: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.208333333333336%"),
    top: hp("19.672131147540984%")
  },
  View_1_14: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10416666666665719%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_15: {
    width: wp("4.114583333333333%"),
    minWidth: wp("4.114583333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_1_15: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1_16: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_17: {
    width: wp("0.10416666666666667%"),
    minWidth: wp("0.10416666666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_1_18: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.208333333333336%"),
    top: hp("29.508196721311474%")
  },
  View_1_19: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10416666666665719%"),
    top: hp("0%")
  },
  View_1_20: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0
  },
  View_1_21: {
    width: wp("4.114583333333333%"),
    minWidth: wp("4.114583333333333%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("2.322404371584703%"),
    justifyContent: "flex-start"
  },
  Text_1_21: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1_22: {
    width: wp("0.10416666666666667%"),
    minWidth: wp("0.10416666666666667%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_1_23: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    height: hp("10.109293786554389%"),
    minHeight: hp("10.109293786554389%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.208333333333336%"),
    top: hp("9.562841530054644%")
  },
  View_1_24: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("10.109293786554389%"),
    minHeight: hp("10.109293786554389%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10416666666665719%"),
    top: hp("0%")
  },
  View_1_25: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.000004169068052561897%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_1_26: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.836069742838546%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_1_27: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.273228212783895%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_28: {
    width: wp("0.10416666666666667%"),
    minWidth: wp("0.10416666666666667%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.000000000000014%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_1_29: {
    width: wp("3.3854166666666665%"),
    minWidth: wp("3.3854166666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8854166666666714%"),
    top: hp("3.8251407810899067%"),
    justifyContent: "flex-start"
  },
  Text_1_29: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1_30: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.273228212783895%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_31: {
    width: wp("7.656250000000001%"),
    minWidth: wp("7.656250000000001%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666643%"),
    top: hp("3.5519125683060118%"),
    justifyContent: "flex-start"
  },
  Text_1_31: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_32: {
    width: wp("9.375%"),
    minWidth: wp("9.375%"),
    height: hp("3.9617512395473127%"),
    minHeight: hp("3.9617512395473127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.802083333333336%"),
    top: hp("3.5519125683060118%")
  },
  View_1_33: {
    width: wp("9.375%"),
    minWidth: wp("9.375%"),
    height: hp("3.9617512395473127%"),
    minHeight: hp("3.9617512395473127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_34: {
    width: wp("9.375%"),
    minWidth: wp("9.375%"),
    height: hp("3.9617491550132873%"),
    minHeight: hp("3.9617491550132873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_35: {
    width: wp("9.375%"),
    minWidth: wp("9.375%"),
    height: hp("3.9617491550132873%"),
    minHeight: hp("3.9617491550132873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_1_36: {
    width: wp("1.5104166666666667%"),
    minWidth: wp("1.5104166666666667%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.864583333333343%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1_37: {
    width: wp("0.5732154846191406%"),
    height: hp("1.366120218579235%"),
    top: hp("1.2295081967213086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.380661010742188%")
  },
  View_1_38: {
    width: wp("5.729166666666666%"),
    minWidth: wp("5.729166666666666%"),
    minHeight: hp("2.1857926102935292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9895833333333286%"),
    top: hp("0.8196721311475379%"),
    justifyContent: "center"
  },
  Text_1_38: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1_39: {
    width: wp("0.052083333333333336%"),
    minWidth: wp("0.052083333333333336%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.864583333333343%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_446: {
    width: wp("0.8858744303385417%"),
    minWidth: wp("0.8858744303385417%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.02641805013021%"),
    top: hp("5.464480874316941%")
  },
  ImageBackground_2_447: {
    width: wp("0.8072916666666667%"),
    minWidth: wp("0.8072916666666667%"),
    height: hp("2.527322404371585%"),
    minHeight: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.004831949869796404%"),
    top: hp("0.13661202185792476%")
  },
  ImageBackground_2_448: {
    width: wp("0.8858744303385417%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_40: {
    width: wp("9.375%"),
    minWidth: wp("9.375%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.802083333333336%"),
    top: hp("8.743169398907106%")
  },
  View_1_41: {
    width: wp("9.375%"),
    minWidth: wp("9.375%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(206, 212, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1_42: {
    width: wp("0.3987895945707957%"),
    minWidth: wp("0.3987895945707957%"),
    height: hp("2.0257594155483556%"),
    minHeight: hp("2.0257594155483556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.541666666666671%"),
    top: hp("1.0928961748633839%")
  },
  View_1_45: {
    width: wp("4.010416666666667%"),
    minWidth: wp("4.010416666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "center"
  },
  Text_1_45: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_46: {
    width: wp("16.71875%"),
    minWidth: wp("16.71875%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666643%"),
    top: hp("8.743169398907106%")
  },
  View_1_47: {
    width: wp("16.71875%"),
    minWidth: wp("16.71875%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(206, 212, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_48: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(206, 212, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 5
  },
  ImageBackground_1_49: {
    width: wp("0.6774330139160156%"),
    height: hp("1.7759562841530054%"),
    top: hp("1.2295081967213086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5027262369791714%")
  },
  View_1_50: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.187500000000014%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "center"
  },
  Text_1_50: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_51: {
    width: wp("17.395833333333332%"),
    minWidth: wp("17.395833333333332%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666643%"),
    top: hp("19.808743169398905%")
  },
  View_1_52: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(206, 212, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_53: {
    width: wp("15.729166666666666%"),
    minWidth: wp("15.729166666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: hp("0.2732240437158495%"),
    justifyContent: "center"
  },
  Text_1_53: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_54: {
    width: wp("19.010416666666664%"),
    minWidth: wp("19.010416666666664%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666643%"),
    top: hp("15.300546448087431%"),
    justifyContent: "flex-start"
  },
  Text_1_54: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_55: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.020833333333336%"),
    top: hp("25.546448087431695%")
  },
  ImageBackground_1_56: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_57: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.37704918032787%"),
    minHeight: hp("32.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_58: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.31693989071038%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1_59: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("5.62060882484978%"),
    minHeight: hp("5.62060882484978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666714%"),
    top: hp("10.519125683060103%")
  },
  View_1_60: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_61: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1_62: {
    width: wp("0.7816632588704427%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.935760498046875%")
  },
  ImageBackground_1_63: {
    width: wp("0.7816505432128907%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.893559773763016%")
  },
  View_1_64: {
    width: wp("1.9270833333333335%"),
    minWidth: wp("1.9270833333333335%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("29.91803278688524%"),
    justifyContent: "flex-start"
  },
  Text_1_64: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_65: {
    width: wp("3.3854166666666665%"),
    minWidth: wp("3.3854166666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("25.409836065573764%"),
    justifyContent: "flex-start"
  },
  Text_1_65: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_66: {
    width: wp("2.96875%"),
    minWidth: wp("2.96875%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("27.868852459016388%"),
    justifyContent: "flex-start"
  },
  Text_1_66: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_67: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-223.125%"),
    top: hp("26.502732240437147%")
  },
  View_1_68: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.000000000000007%"),
    top: hp("25.546448087431695%")
  },
  ImageBackground_1_69: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_70: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.31693989071038%")
  },
  View_1_71: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_72: {
    width: wp("1.7187500000000002%"),
    minWidth: wp("1.7187500000000002%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("5.601092896174862%"),
    justifyContent: "flex-start"
  },
  Text_1_72: {
    color: "rgba(137, 185, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_73: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_73: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_74: {
    width: wp("2.96875%"),
    minWidth: wp("2.96875%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_1_74: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_75: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_76: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1_77: {
    width: wp("0.7816632588704427%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.939397176106766%")
  },
  View_1_78: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666643%"),
    top: hp("60.10928961748634%")
  },
  ImageBackground_1_79: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_80: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.37704918032787%"),
    minHeight: hp("32.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_81: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_82: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1_83: {
    width: wp("0.7816632588704427%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.932123819986984%")
  },
  ImageBackground_1_84: {
    width: wp("0.7816505432128907%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.889923095703125%")
  },
  ImageBackground_1_85: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("5.62060882484978%"),
    minHeight: hp("5.62060882484978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666714%"),
    top: hp("10.382513661202182%")
  },
  View_1_86: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.316939890710387%")
  },
  View_1_87: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_88: {
    width: wp("1.9270833333333335%"),
    minWidth: wp("1.9270833333333335%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("5.601092896174848%"),
    justifyContent: "flex-start"
  },
  Text_1_88: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_89: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_89: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_90: {
    width: wp("2.96875%"),
    minWidth: wp("2.96875%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_1_90: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_91: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.020833333333336%"),
    top: hp("60.10928961748634%")
  },
  ImageBackground_1_92: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_93: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_94: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1_95: {
    width: wp("0.7816632588704427%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.935760498046875%")
  },
  View_1_96: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.316939890710387%")
  },
  View_1_97: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_98: {
    width: wp("1.9270833333333335%"),
    minWidth: wp("1.9270833333333335%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("5.601092896174848%"),
    justifyContent: "flex-start"
  },
  Text_1_98: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_99: {
    width: wp("2.7604166666666665%"),
    minWidth: wp("2.7604166666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_99: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_100: {
    width: wp("2.96875%"),
    minWidth: wp("2.96875%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_1_100: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_101: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.020833333333336%"),
    top: hp("60.10928961748634%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_105: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.000000000000007%"),
    top: hp("60.10928961748634%")
  },
  ImageBackground_1_106: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_107: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_108: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1_109: {
    width: wp("0.7816632588704427%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.939397176106766%")
  },
  View_1_110: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.316939890710387%")
  },
  View_1_111: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_112: {
    width: wp("1.9270833333333335%"),
    minWidth: wp("1.9270833333333335%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("5.601092896174848%"),
    justifyContent: "flex-start"
  },
  Text_1_112: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_113: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_113: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_114: {
    width: wp("2.96875%"),
    minWidth: wp("2.96875%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_1_114: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_115: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.97916666666668%"),
    top: hp("25.546448087431695%")
  },
  ImageBackground_1_116: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_117: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.31693989071038%")
  },
  View_1_118: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_119: {
    width: wp("1.7187500000000002%"),
    minWidth: wp("1.7187500000000002%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333144%"),
    top: hp("5.601092896174862%"),
    justifyContent: "flex-start"
  },
  Text_1_119: {
    color: "rgba(137, 185, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_120: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333144%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_120: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_121: {
    width: wp("2.96875%"),
    minWidth: wp("2.96875%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333144%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_1_121: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_122: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_123: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1_124: {
    width: wp("0.7816632588704427%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.943033854166657%")
  },
  View_1_125: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.97916666666668%"),
    top: hp("60.10928961748634%")
  },
  ImageBackground_1_126: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_127: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_128: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1_129: {
    width: wp("0.7816632588704427%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.943033854166657%")
  },
  View_1_130: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.316939890710387%")
  },
  View_1_131: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_132: {
    width: wp("1.09375%"),
    minWidth: wp("1.09375%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333144%"),
    top: hp("5.601092896174848%"),
    justifyContent: "flex-start"
  },
  Text_1_132: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_133: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333144%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_133: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_134: {
    width: wp("2.96875%"),
    minWidth: wp("2.96875%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333144%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_1_134: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_135: {
    width: wp("27.447916666666668%"),
    minWidth: wp("27.447916666666668%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666643%"),
    top: hp("93.98907103825137%")
  },
  View_1_136: {
    width: wp("27.447916666666668%"),
    minWidth: wp("27.447916666666668%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_137: {
    width: wp("27.447916666666668%"),
    minWidth: wp("27.447916666666668%"),
    height: hp("22.814207650273225%"),
    minHeight: hp("22.814207650273225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_138: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_139: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_140: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_141: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1_142: {
    width: wp("0.7816632588704427%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092895989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.932123819986984%")
  },
  ImageBackground_1_143: {
    width: wp("0.7816505432128907%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092895989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.889923095703125%")
  },
  View_1_144: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.979166666666671%"),
    top: hp("0%")
  },
  ImageBackground_1_145: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_146: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.37704918032787%"),
    minHeight: hp("32.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_147: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_148: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1_149: {
    width: wp("0.7816632588704427%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092895989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.935760498046875%")
  },
  ImageBackground_1_150: {
    width: wp("0.7816505432128907%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092895989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.893559773763016%")
  },
  ImageBackground_1_151: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("5.62060882484978%"),
    minHeight: hp("5.62060882484978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666714%"),
    top: hp("10.382513661202168%")
  },
  View_1_152: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.958333333333343%"),
    top: hp("0%")
  },
  ImageBackground_1_153: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_154: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.37704918032787%"),
    minHeight: hp("32.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_155: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_156: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1_157: {
    width: wp("0.7816632588704427%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092895989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.939397176106766%")
  },
  ImageBackground_1_158: {
    width: wp("0.7816505432128907%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092895989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.897196451822907%")
  },
  ImageBackground_1_159: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("5.62060882484978%"),
    minHeight: hp("5.62060882484978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666714%"),
    top: hp("10.382513661202168%")
  },
  View_1_160: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.937500000000014%"),
    top: hp("0%")
  },
  ImageBackground_1_161: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_162: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.37704918032787%"),
    minHeight: hp("32.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_163: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_164: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1_165: {
    width: wp("0.7816632588704427%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092895989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.943033854166657%")
  },
  ImageBackground_1_166: {
    width: wp("0.7816505432128907%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092895989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9008331298827983%")
  },
  ImageBackground_1_167: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("5.62060882484978%"),
    minHeight: hp("5.62060882484978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.291666666666657%"),
    top: hp("10.382513661202168%")
  },
  View_1_168: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666643%"),
    top: hp("25.546448087431695%")
  },
  ImageBackground_1_169: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_170: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_171: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_172: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1_173: {
    width: wp("0.7816632588704427%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.932123819986984%")
  },
  ImageBackground_1_174: {
    width: wp("0.7816505432128907%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.889923095703125%")
  },
  View_1_175: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.31693989071038%")
  },
  View_1_176: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_177: {
    width: wp("1.7187500000000002%"),
    minWidth: wp("1.7187500000000002%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("5.601092896174862%"),
    justifyContent: "flex-start"
  },
  Text_1_177: {
    color: "rgba(137, 185, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_178: {
    width: wp("3.0729166666666665%"),
    minWidth: wp("3.0729166666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_178: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_179: {
    width: wp("2.96875%"),
    minWidth: wp("2.96875%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333428%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_1_179: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_180: {
    width: wp("28.489583333333336%"),
    minWidth: wp("28.489583333333336%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("116.80327868852459%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_2_460: {
    width: wp("7.03125%"),
    minWidth: wp("7.03125%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.84375%"),
    top: hp("23.36065573770492%")
  },
  View_2_465: {
    width: wp("7.03125%"),
    minWidth: wp("7.03125%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_466: {
    width: wp("7.03125%"),
    minWidth: wp("7.03125%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_473: {
    width: wp("7.03125%"),
    minWidth: wp("7.03125%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169396%"),
    backgroundColor: "rgba(222, 226, 230, 1)"
  },
  View_2_475: {
    width: wp("5.989583333333334%"),
    minWidth: wp("5.989583333333334%"),
    height: hp("6.284157174532531%"),
    minHeight: hp("6.284157174532531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("1.6393400932270303%")
  },
  View_2_477: {
    width: wp("5.989583333333334%"),
    minWidth: wp("5.989583333333334%"),
    minHeight: hp("1.5027325010039116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_477: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_2_478: {
    width: wp("3.6458333333333335%"),
    minWidth: wp("3.6458333333333335%"),
    minHeight: hp("1.5027323707205351%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.781424934095369%"),
    justifyContent: "center"
  },
  Text_2_478: {
    color: "rgba(119, 122, 243, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_2_843: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.5625%"),
    top: hp("30.87431693989071%")
  },
  View_2_844: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_2_845: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_2_846: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.377049180327866%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_2_847: {
    width: wp("3.3854166666666665%"),
    minWidth: wp("3.3854166666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333357%"),
    top: hp("33.46994535519125%"),
    justifyContent: "flex-start"
  },
  Text_2_847: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_848: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-192.96875%"),
    top: hp("35.792349726775946%")
  },
  View_2_849: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.958333333333336%"),
    top: hp("30.87431693989071%")
  },
  View_2_850: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_2_851: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_2_852: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.377049180327866%")
  },
  View_2_853: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_2_854: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333286%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_2_854: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_855: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.760416666666664%"),
    top: hp("30.87431693989071%")
  },
  View_2_856: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_2_857: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_2_858: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.377049180327866%")
  },
  View_2_859: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_2_860: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333357%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_2_860: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_861: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.364583333333336%"),
    top: hp("30.87431693989071%")
  },
  View_2_862: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_2_863: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_2_864: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.377049180327866%")
  },
  View_2_865: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_2_866: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333357%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_2_866: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_867: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.156249999999998%"),
    top: hp("30.87431693989071%")
  },
  View_2_868: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_2_869: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_2_870: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.377049180327866%")
  },
  View_2_871: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_872: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_2_873: {
    width: wp("3.0729166666666665%"),
    minWidth: wp("3.0729166666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333357%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_2_873: {
    color: "rgba(62, 76, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1858: {
    width: wp("23.958333333333336%"),
    minWidth: wp("23.958333333333336%"),
    height: hp("3.961750718413806%"),
    minHeight: hp("3.961750718413806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.52083333333334%"),
    top: hp("8.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1858_2_1703: {
    flexGrow: 1,
    width: wp("6.250001589457193%"),
    height: hp("4.09836274027173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.572916666666657%"),
    top: hp("0.4098360655737707%")
  },
  View_I2_1858_2_1706: {
    width: wp("1.5625%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6875%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I2_1858_2_1912: {
    width: wp("0.052083333333333336%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.635416666666671%"),
    backgroundColor: "rgba(233, 224, 248, 1)"
  },
  ImageBackground_I2_1858_2_1708: {
    width: wp("0.3987890233596166%"),
    height: hp("0.6596386758356146%"),
    top: hp("1.7759562841530059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.260416666666671%")
  },
  View_I2_1858_2_2108: {
    width: wp("4.635416666666667%"),
    minWidth: wp("4.635416666666667%"),
    height: hp("4.098361176871211%"),
    minHeight: hp("4.098361176871211%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_1858_2_1705: {
    width: wp("4.635416666666667%"),
    height: hp("4.098361176871211%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(174, 174, 246, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I2_1858_2_1709: {
    width: wp("1.5104166666666667%"),
    top: hp("0.9562883220735152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5625%"),
    justifyContent: "center"
  },
  Text_I2_1858_2_1709: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I2_1858_2_1727: {
    flexGrow: 1,
    width: wp("6.25%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.343749999999986%"),
    top: hp("0.4098360655737707%")
  },
  View_I2_1858_2_1728: {
    width: wp("6.25%"),
    height: hp("4.098361958571471%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_1858_2_1729: {
    width: wp("6.250000397364299%"),
    height: hp("4.0983609163044585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(174, 174, 246, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I2_1858_2_1730: {
    width: wp("2.3958333333333335%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9270833333333286%"),
    justifyContent: "center"
  },
  Text_I2_1858_2_1730: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I2_1858_2_1715: {
    flexGrow: 1,
    width: wp("6.25%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8020833333333286%"),
    top: hp("0.4098360655737707%")
  },
  View_I2_1858_2_1716: {
    width: wp("6.25%"),
    height: hp("4.0983609163044585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I2_1858_2_1717: {
    width: wp("3.6979166666666665%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3020833333333286%"),
    justifyContent: "center"
  },
  Text_I2_1858_2_1717: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
