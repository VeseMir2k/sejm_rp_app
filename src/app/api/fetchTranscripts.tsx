export const fetchProceedingTranscripts = async (
  proceeding: string,
  date: string
) => {
  const url = `https://api.sejm.gov.pl/sejm/term10/proceedings/${proceeding}/${date}/transcripts`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Błąd podczas pobierania danych: ${error}`)
    throw error
  }
}
