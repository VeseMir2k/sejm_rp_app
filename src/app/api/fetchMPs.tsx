export const fetchMPs = async () => {
  const url = `https://api.sejm.gov.pl/sejm/term10/MP`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`HTTP Error! Status: ${response.status}`)
  }

  const data = await response.json()
  return data
}
