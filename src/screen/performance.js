/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Dropdown} from 'react-native-element-dropdown';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const Performance = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <View
        style={[
          styles.topbar,
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '5%',
            backgroundColor: '#D83772',
            paddingTop: wp('5%'),
            paddingBottom: wp('5%'),
          },
        ]}>
        <Image source={require('../image/arrow.png')} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={{color: 'white', fontSize: wp('4%')}}>
            performance matrix
          </Text>
        </View>
      </View>

      <View style={{marginRight:wp('5%'),justifyContent:'space-between'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center',
          flexDirection:'row',
          marginLeft:wp('6%'),
          marginBottom:wp('3%'),
          marginTop:wp('4%')
          
          
        }}>
          
        <View
          style={{
            width: wp('50%'),
            flexWrap: 'wrap',
            backgroundColor: '#F5F6F9',
            paddingTop: wp('4%'),
            paddingBottom: wp('4%'),
            borderRadius: wp('4%'),
         
          }}>
            
          <Text>Personal Leads</Text>
        </View>
        <View style={{alignItems:'center'}}>
        
          <Text
            style={{
              paddingBottom: wp('4%'),
              paddingTop: wp('4%'),
              paddingLeft: wp('5.5%'),
              paddingRight: wp('5.5%'),
              borderRadius: wp('4%'),
              backgroundColor: '#ED3C3F33',
            
            }}>
            43
          </Text>
         
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
  
          <Text
            style={{
              paddingBottom: wp('4%'),
              paddingTop: wp('4%'),
              paddingLeft: wp('5.5%'),
              paddingRight: wp('5.5%'),
              borderRadius: wp('4%'),
              backgroundColor: '#F5F6F9',
            }}>
            86
          </Text>
        
        </View>
      </View>

      <View
        style={{
          marginLeft: wp('6%'),
          marginTop: wp('1%'),
          marginBottom: wp('8%'),
          marginRight: wp('5%'),
        }}>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Overall/Month' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center',
          flexDirection:'row',
          marginLeft:wp('6%'),
          
        }}>
        <View
          style={{
            width: wp('50%'),
            flexWrap: 'wrap',
            backgroundColor: '#F5F6F9',
            paddingTop: wp('4%'),
            paddingBottom: wp('4%'),
            borderRadius: wp('4%'),
         
          }}>
          <Text>Direct Closures 54</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text>actual</Text>
          <Text
            style={{
              paddingBottom: wp('4%'),
              paddingTop: wp('4%'),
              paddingLeft: wp('6%'),
              paddingRight: wp('6%'),
              borderRadius: wp('4%'),
              backgroundColor: '#3A9D3D33',
            }}>
            54
          </Text>
          <Text>42%</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <Text>ideal</Text>
          <Text
            style={{
              paddingBottom: wp('4%'),
              paddingTop: wp('4%'),
              paddingLeft: wp('6%'),
              paddingRight: wp('6%'),
              borderRadius: wp('4%'),
              backgroundColor: '#F5F6F9',
            }}>
            54
          </Text>
        <Text></Text>
        </View>
      </View>


      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center',
          flexDirection:'row',
          marginLeft:wp('6%'),
          
        }}>
        <View
          style={{
            width: wp('50%'),
            flexWrap: 'wrap',
            backgroundColor: '#F5F6F9',
            paddingTop: wp('4%'),
            paddingBottom: wp('4%'),
            borderRadius: wp('4%'),
         
          }}>
          <Text>Referral Providers</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <Text></Text>
          <Text
            style={{
              paddingBottom: wp('4%'),
              paddingTop: wp('4%'),
              paddingLeft: wp('5%'),
              paddingRight: wp('5%'),
              borderRadius: wp('4%'),
              backgroundColor: '#EEB44133',
              
            }}>
            45%
          </Text>
          
          <Text>74%</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text></Text>
          <Text
            style={{
              paddingBottom: wp('5%'),
              paddingTop: wp('5%'),
              paddingLeft: wp('5%'),
              paddingRight: wp('5%'),
              borderRadius: wp('4%'),
              backgroundColor: '#F5F6F9',
            }}>
            50%
          </Text>
        <Text></Text>
        </View>
      </View>


      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center',
          flexDirection:'row',
          marginLeft:wp('6%'),
          
        }}>
        <View
          style={{
            width: wp('50%'),
            flexWrap: 'wrap',
            backgroundColor: '#F5F6F9',
            paddingTop: wp('4%'),
            paddingBottom: wp('4%'),
            borderRadius: wp('4%'),
         
          }}>
          <Text>Average Referrals</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <Text></Text>
          <Text
            style={{
              paddingBottom: wp('4%'),
              paddingTop: wp('4%'),
              paddingLeft: wp('5.7%'),
              paddingRight: wp('5.7%'),
              borderRadius: wp('4%'),
              backgroundColor: '#ED3C3F33',
            }}>
            4%
          </Text>
          <Text>40%</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text></Text>
          <Text
            style={{
              paddingBottom: wp('4%'),
              paddingTop: wp('4%'),
              paddingLeft: wp('5.5%'),
              paddingRight: wp('5.5%'),
              borderRadius: wp('4%'),
              backgroundColor: '#F5F6F9',
            }}>
            10%
          </Text>
        <Text></Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center',
          flexDirection:'row',
          marginLeft:wp('6%'),
          
        }}>
        <View
          style={{
            width: wp('50%'),
            flexWrap: 'wrap',
            backgroundColor: '#F5F6F9',
            paddingTop: wp('4%'),
            paddingBottom: wp('4%'),
            borderRadius: wp('4%'),
         
          }}>
          <Text>Referrals Closures sfdhfrhjaghf</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <Text></Text>
          <Text
            style={{
              paddingBottom: wp('4%'),
              paddingTop: wp('4%'),
              paddingLeft: wp('4.5%'),
              paddingRight: wp('4.5%'),
              borderRadius: wp('4%'),
              backgroundColor: '#ED3C3F33',
            }}>
            32%
          </Text>
          <Text>124%</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text></Text>
          <Text
            style={{
              paddingBottom: wp('4%'),
              paddingTop: wp('4%'),
              paddingLeft: wp('5.2%'),
              paddingRight: wp('5.2%'),
              borderRadius: wp('4%'),
              backgroundColor: '#F5F6F9',
            }}>
            25%
          </Text>
        <Text></Text>
        </View>
      </View>

      </View>


      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: wp('6%'),
        }}>
        <Image source={require('../image/Group.png')} />
      </View>
    </View>
  );
};

export default Performance;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: '#F5F6F9',
    borderWidth: wp('0.5%'),
    borderRadius: 18,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
