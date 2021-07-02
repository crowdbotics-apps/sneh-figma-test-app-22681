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
      <View style={styles.View_6_252}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2183/add1/3c62fbc4b260891e31638128416cc46b"
          }}
          style={styles.ImageBackground_6_253}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec9c/634a/0185e365dee8779905f2291e0381a072"
          }}
          style={styles.ImageBackground_6_254}
        />
        <View style={styles.View_6_255}>
          <View style={styles.View_6_256} />
          <View style={styles.View_6_257}>
            <View style={styles.View_6_258}>
              <View style={styles.View_6_259} />
              <View style={styles.View_6_260}>
                <View style={styles.View_6_261}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a771/376d/f48714e64d20329809cae414cf39d53c"
                    }}
                    style={styles.ImageBackground_6_262}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_263}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_264}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_265}
                  />
                </View>
                <View style={styles.View_6_266}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a771/376d/f48714e64d20329809cae414cf39d53c"
                    }}
                    style={styles.ImageBackground_6_267}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_268}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_269}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_270}
                  />
                </View>
                <View style={styles.View_6_271}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a771/376d/f48714e64d20329809cae414cf39d53c"
                    }}
                    style={styles.ImageBackground_6_272}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_273}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_274}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_275}
                  />
                </View>
                <View style={styles.View_6_276}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a771/376d/f48714e64d20329809cae414cf39d53c"
                    }}
                    style={styles.ImageBackground_6_277}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_278}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_279}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_280}
                  />
                </View>
                <View style={styles.View_6_281}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a771/376d/f48714e64d20329809cae414cf39d53c"
                    }}
                    style={styles.ImageBackground_6_282}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_283}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_284}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_285}
                  />
                </View>
                <View style={styles.View_6_286}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a771/376d/f48714e64d20329809cae414cf39d53c"
                    }}
                    style={styles.ImageBackground_6_287}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_288}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_289}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_290}
                  />
                </View>
                <View style={styles.View_6_291}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a771/376d/f48714e64d20329809cae414cf39d53c"
                    }}
                    style={styles.ImageBackground_6_292}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_293}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_294}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_295}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_6_296}>
              <View style={styles.View_6_297} />
              <View style={styles.View_6_298}>
                <View style={styles.View_6_299}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_300}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_301}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_302}
                  />
                </View>
              </View>
              <View style={styles.View_6_303}>
                <View style={styles.View_6_304}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_305}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_306}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_307}
                  />
                </View>
              </View>
              <View style={styles.View_6_308}>
                <View style={styles.View_6_309}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_310}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_311}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_312}
                  />
                </View>
              </View>
              <View style={styles.View_6_313}>
                <View style={styles.View_6_314}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_315}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_316}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_317}
                  />
                </View>
              </View>
              <View style={styles.View_6_318}>
                <View style={styles.View_6_319}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_320}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_321}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_322}
                  />
                </View>
              </View>
              <View style={styles.View_6_323}>
                <View style={styles.View_6_324}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_325}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_326}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_327}
                  />
                </View>
              </View>
              <View style={styles.View_6_328}>
                <View style={styles.View_6_329}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_330}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_331}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_332}
                  />
                </View>
              </View>
              <View style={styles.View_6_333}>
                <View style={styles.View_6_334}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_335}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_336}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_337}
                  />
                </View>
                <View style={styles.View_6_338}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178b/d889/97889de22da97b8b071b8f696e762889"
                    }}
                    style={styles.ImageBackground_6_339}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b91/f1ea/745a2fbfabf7a0cbd8e2117daf6f720b"
                    }}
                    style={styles.ImageBackground_6_340}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/6324/1f1b778fc1fbab1f97fb58689b644389"
                    }}
                    style={styles.ImageBackground_6_341}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_6_342} />
        <View style={styles.View_6_343} />
        <View style={styles.View_6_344} />
        <View style={styles.View_6_345} />
        <View style={styles.View_6_346}>
          <View style={styles.View_6_347} />
          <View style={styles.View_6_348}>
            <Text style={styles.Text_6_348}>Edit Selected</Text>
          </View>
        </View>
        <View style={styles.View_6_349}>
          <View style={styles.View_6_350} />
          <View style={styles.View_6_351}>
            <Text style={styles.Text_6_351}>Templates</Text>
          </View>
          <View style={styles.View_6_352} />
        </View>
        <View style={styles.View_6_353}>
          <View style={styles.View_6_354}>
            <View style={styles.View_6_355} />
            <View style={styles.View_6_356}>
              <Text style={styles.Text_6_356}>AI Suggested</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_6_357}>
          <View style={styles.View_6_358}>
            <View style={styles.View_6_359} />
            <View style={styles.View_6_360}>
              <Text style={styles.Text_6_360}>Modules</Text>
            </View>
          </View>
          <View style={styles.View_6_361} />
        </View>
      </View>
      <View style={styles.View_2_1821}>
        <View style={styles.View_2_1703}>
          <View style={styles.View_2_1706} />
          <View style={styles.View_2_1912} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/c3a8/37d181acc01cfdde353591a2944d812c"
            }}
            style={styles.ImageBackground_2_1708}
          />
          <View style={styles.View_2_2108}>
            <View style={styles.View_2_1705} />
            <View style={styles.View_2_1709}>
              <Text style={styles.Text_2_1709}>save</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_1727}>
          <View style={styles.View_2_1728}>
            <View style={styles.View_2_1729} />
            <View style={styles.View_2_1730}>
              <Text style={styles.Text_2_1730}>Cancel</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_1715}>
          <View style={styles.View_2_1716} />
          <View style={styles.View_2_1717}>
            <Text style={styles.Text_2_1717}>properties</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("147.54098360655738%") },
  View_6_252: {
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
  ImageBackground_6_253: {
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
  ImageBackground_6_254: {
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
  View_6_255: {
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
  View_6_256: {
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
  View_6_257: {
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
  View_6_258: {
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
  View_6_259: {
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
  View_6_260: {
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
  View_6_261: {
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
  ImageBackground_6_262: {
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
  ImageBackground_6_263: {
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
  ImageBackground_6_264: {
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
  ImageBackground_6_265: {
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
  View_6_266: {
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
  ImageBackground_6_267: {
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
  ImageBackground_6_268: {
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
  ImageBackground_6_269: {
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
  ImageBackground_6_270: {
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
  View_6_271: {
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
  ImageBackground_6_272: {
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
  ImageBackground_6_273: {
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
  ImageBackground_6_274: {
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
  ImageBackground_6_275: {
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
  View_6_276: {
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
  ImageBackground_6_277: {
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
  ImageBackground_6_278: {
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
  ImageBackground_6_279: {
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
  ImageBackground_6_280: {
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
  View_6_281: {
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
  ImageBackground_6_282: {
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
  ImageBackground_6_283: {
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
  ImageBackground_6_284: {
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
  ImageBackground_6_285: {
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
  View_6_286: {
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
  ImageBackground_6_287: {
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
  ImageBackground_6_288: {
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
  ImageBackground_6_289: {
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
  ImageBackground_6_290: {
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
  View_6_291: {
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
  ImageBackground_6_292: {
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
  ImageBackground_6_293: {
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
  ImageBackground_6_294: {
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
  ImageBackground_6_295: {
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
  View_6_296: {
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
  View_6_297: {
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
  View_6_298: {
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
  View_6_299: {
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
  ImageBackground_6_300: {
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
  ImageBackground_6_301: {
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
  ImageBackground_6_302: {
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
  View_6_303: {
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
  View_6_304: {
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
  ImageBackground_6_305: {
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
  ImageBackground_6_306: {
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
  ImageBackground_6_307: {
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
  View_6_308: {
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
  View_6_309: {
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
  ImageBackground_6_310: {
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
  ImageBackground_6_311: {
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
  ImageBackground_6_312: {
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
  View_6_313: {
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
  View_6_314: {
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
  ImageBackground_6_315: {
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
  ImageBackground_6_316: {
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
  ImageBackground_6_317: {
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
  View_6_318: {
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
  View_6_319: {
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
  ImageBackground_6_320: {
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
  ImageBackground_6_321: {
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
  ImageBackground_6_322: {
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
  View_6_323: {
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
  View_6_324: {
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
  ImageBackground_6_325: {
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
  ImageBackground_6_326: {
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
  ImageBackground_6_327: {
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
  View_6_328: {
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
  View_6_329: {
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
  ImageBackground_6_330: {
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
  ImageBackground_6_331: {
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
  ImageBackground_6_332: {
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
  View_6_333: {
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
  View_6_334: {
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
  ImageBackground_6_335: {
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
  ImageBackground_6_336: {
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
  ImageBackground_6_337: {
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
  View_6_338: {
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
  ImageBackground_6_339: {
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
  ImageBackground_6_340: {
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
  ImageBackground_6_341: {
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
  View_6_342: {
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
  View_6_343: {
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
  View_6_344: {
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
  View_6_345: {
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
  View_6_346: {
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
  View_6_347: {
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
  View_6_348: {
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
  Text_6_348: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_6_349: {
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
  View_6_350: {
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
  View_6_351: {
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
  Text_6_351: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_6_352: {
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
  View_6_353: {
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
  View_6_354: {
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
  View_6_355: {
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
  View_6_356: {
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
  Text_6_356: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_6_357: {
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
  View_6_358: {
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
  View_6_359: {
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
  View_6_360: {
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
  Text_6_360: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_6_361: {
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
  View_2_1821: {
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
  View_2_1703: {
    flexGrow: 1,
    width: wp("6.250001589457193%"),
    height: hp("4.09836274027173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.572916666666657%"),
    top: hp("0.4098360655737707%")
  },
  View_2_1706: {
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
  View_2_1912: {
    width: wp("0.052083333333333336%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.635416666666671%"),
    backgroundColor: "rgba(233, 224, 248, 1)"
  },
  ImageBackground_2_1708: {
    width: wp("0.3987890233596166%"),
    height: hp("0.6596386758356146%"),
    top: hp("1.7759562841530059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.260416666666671%")
  },
  View_2_2108: {
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
  View_2_1705: {
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
  View_2_1709: {
    width: wp("1.5104166666666667%"),
    top: hp("0.9562883220735152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5625%"),
    justifyContent: "center"
  },
  Text_2_1709: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_2_1727: {
    flexGrow: 1,
    width: wp("6.25%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.343749999999986%"),
    top: hp("0.4098360655737707%")
  },
  View_2_1728: {
    width: wp("6.25%"),
    height: hp("4.098361958571471%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_1729: {
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
  View_2_1730: {
    width: wp("2.3958333333333335%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9270833333333286%"),
    justifyContent: "center"
  },
  Text_2_1730: {
    color: "rgba(233, 233, 250, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_2_1715: {
    flexGrow: 1,
    width: wp("6.25%"),
    height: hp("4.098361958571471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8020833333333286%"),
    top: hp("0.4098360655737707%")
  },
  View_2_1716: {
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
  View_2_1717: {
    width: wp("3.6979166666666665%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3020833333333286%"),
    justifyContent: "center"
  },
  Text_2_1717: {
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
