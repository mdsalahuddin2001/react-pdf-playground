/* eslint-disable react/prop-types */
import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 24,
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 10,
    color: '#8a8a8a',
    marginBottom: 20,
  },
  columns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%', // Adjust as needed
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#4a4a4a',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    width: '50%',
    color: '#6a6a6a',
    fontSize: 10,
  },
  value: {
    width: '50%',
    color: '#2a2a2a',
    fontSize: 10,
  },
})
const yourData = {
  billingAccount: {
    address: 'West St',
    city: 'Houston',
    state: 'Texas',
    zipCode: '1234566789',
  },
  clarifyingInformation: {
    startMiles: 0,
    endMiles: 0,
    personalBelongings: 'No',
    paperwork: 'No',
    medication: 'No',
  },
  patientInformation: {
    accountName: '', // Not provided in the image
    claimNumber: '', // Not provided in the image
  },
  tripInformation: {
    pickupLocation: 'Park Way',
    tripAssignTime: '08:36 PM',
  },
}
const MedicalTransportPDF = ({ data }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.header}>
        <Text>
          <Text style={{ color: '#ff0000' }}>Ma</Text>
          <Text style={{ color: '#0000ff' }}>Guy</Text>
        </Text>
      </View>
      <Text style={styles.subHeader}>Medical Transport</Text>

      <View style={styles.columns}>
        <View style={styles.column}>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Billing Account</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Address</Text>
              <Text style={styles.value}>{data.billingAccount.address}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>City</Text>
              <Text style={styles.value}>{data.billingAccount.city}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>State</Text>
              <Text style={styles.value}>{data.billingAccount.state}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Zip Code</Text>
              <Text style={styles.value}>{data.billingAccount.zipCode}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Patient Information</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Account Name:</Text>
              <Text style={styles.value}>
                {data.patientInformation.accountName}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Claim#:</Text>
              <Text style={styles.value}>
                {data.patientInformation.claimNumber}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Clarifying information</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Start Miles</Text>
              <Text style={styles.value}>
                {data.clarifyingInformation.startMiles}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>End Miles</Text>
              <Text style={styles.value}>
                {data.clarifyingInformation.endMiles}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Personal belongings?</Text>
              <Text style={styles.value}>
                {data.clarifyingInformation.personalBelongings}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Paperwork?</Text>
              <Text style={styles.value}>
                {data.clarifyingInformation.paperwork}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Medication?</Text>
              <Text style={styles.value}>
                {data.clarifyingInformation.medication}
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Trip Information</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Pick up Location:</Text>
              <Text style={styles.value}>
                {data.tripInformation.pickupLocation}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Trip Assign Time:</Text>
              <Text style={styles.value}>
                {data.tripInformation.tripAssignTime}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)

const PDFDownloadButton = ({ data }) => (
  <PDFDownloadLink
    document={<MedicalTransportPDF data={data} />}
    fileName='medical_transport.pdf'
  >
    {({ blob, url, loading, error }) =>
      loading ? (
        'Loading document...'
      ) : (
        <div
          style={{
            color: 'white',
            backgroundColor: 'mediumseagreen',
          }}
        >
          Download PDF
        </div>
      )
    }
  </PDFDownloadLink>
)
function App() {
  return (
    <div>
      <h1>Medical Transport PDF Generator</h1>
      <PDFDownloadButton data={yourData} />
    </div>
  )
}

export default App
