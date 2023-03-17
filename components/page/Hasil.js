import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import HasilBox from "../HasilBox";

export default function Hasil({ route, navigation }) {
  const { locKeberangkatan, locTujuan, tanggal } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View>
          <TouchableOpacity
            style={styles.iconHeader}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              name="arrow-back"
              style={styles.icon}
              size={24}
              color="black"
            />
            <FontAwesome5 name="user-alt" style={styles.icon} size={30} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Hiling.id</Text>
        <Text style={styles.childTitle}>Hasil Pencarian Penerbangan</Text>
        <Text style={styles.childTitle}>{tanggal}</Text>
      </View>
      <HasilBox
        lokasiAsal={locKeberangkatan}
        lokasiTujuan={locTujuan}
        maskapai="Garuda"
        tanggal={tanggal}
      />
      <HasilBox
        lokasiAsal={locKeberangkatan}
        lokasiTujuan={locTujuan}
        maskapai="Sriwijaya"
        tanggal={tanggal}
      />
      <HasilBox
        lokasiAsal={locKeberangkatan}
        lokasiTujuan={locTujuan}
        maskapai="Lion Air"
        tanggal={tanggal}
      />
      <View style={styles.footer}>
        <Text style={{ fontSize: 17, color: "rgba(0,0,0, 0.3)" }}>
          Copyright FatyaAstiUtami-120140055
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  background: {
    width: "100%",
    backgroundColor: "#86B257",
    borderBottomEndRadius: 5,
    borderBottomLeftRadius: 5,
    height: 130,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    textAlign: "center",
    position: "absolute",
    marginTop: 15,
  },
  iconHeader: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    color: "#fff",
  },
  footer: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },

  childTitle: {
    fontSize: 15,
    color: "#fff",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 5,
  },
});
