export const fetchClubs = async () => {
  const url = `https://api.sejm.gov.pl/sejm/term10/clubs`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Error fetching transcripts data")
  }

  const data = await response.json()
  return data
}
