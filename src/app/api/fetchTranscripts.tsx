export const fetchTranscripts = async (proceeding: string, date: string) => {
  const url = `https://api.sejm.gov.pl/sejm/term10/proceedings/${proceeding}/${date}/transcripts`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Error fetching transcripts data")
  }

  const data = await response.json()
  return data
}
