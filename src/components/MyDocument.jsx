// eslint-disable-next-line no-unused-vars
import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const MyDocument = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          Understanding the Differences between Uncontrolled and Controlled
          Components in React
        </Text>
        <Image
          style={styles.image}
          src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1683267325/Rakibul_Hasan/Screenshot_189_wudjlj.png"
        />
        <Text style={styles.text}>
          In React, form inputs can either be controlled or uncontrolled. The
          difference between the two lies in how they manage their state: 1.
          Controlled Components: In a controlled component, the state of the
          form inputs is managed by the React component. The value of the input
          is bound to a state variable, and the components onChange method is
          used to update the state as the user types. This means that the React
          component has complete control over the form inputs. Features: All
          state updates are handled within the component, which gives the
          component complete control over the forms state. Since the state is
          managed within the component, its easy to access the current value of
          an input field and use it to validate or manipulate other parts of the
          components state. Since the component controls the state, it can
          easily implement features like data validation, real-time input
          feedback, and error messages. 2. Uncontrolled Components: In an
          uncontrolled component, the state of the form inputs is managed by the
          DOM itself. The value of the input is not bound to any state variable,
          and instead, the component uses a ref to access the inputs value when
          it needs it. This means that the DOM has complete control over the
          form inputs. Features: Since the state is managed by the DOM, its easy
          to create simple, lightweight form components without a lot of
          overhead. Uncontrolled components can be useful when building complex
          forms with many inputs, as they can help avoid performance issues that
          can arise when dealing with large amounts of state. However, since the
          state is managed by the DOM, it can be more difficult to implement
          features like data validation, real-time input feedback, and error
          messages.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default MyDocument;
