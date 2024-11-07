import { makeObservable, observable, action } from "mobx"

type MP = {
  id: string
  firstLastName: string
}

export class MPsStore {
  data: MP[] = []
  isLoading: boolean = true

  constructor() {
    makeObservable(this, {
      data: observable,
      isLoading: observable,
      fetchData: action,
    })
  }

  fetchData = async () => {
    this.isLoading = true
    try {
      const response = await fetch("https://api.sejm.gov.pl/sejm/term10/MP")
      if (!response.ok) {
        throw new Error("Error")
      }
      this.data = await response.json()
    } catch (error) {
      console.log(error)
    } finally {
      this.isLoading = false
    }
  }

  resetData = () => {
    this.data = []
  }
}
