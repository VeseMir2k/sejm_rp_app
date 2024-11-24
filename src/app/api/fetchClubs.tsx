export const fetchClubs = async () => {
  const url = `https://api.sejm.gov.pl/sejm/term10/clubs`
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
