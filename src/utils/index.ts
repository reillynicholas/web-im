export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const storage = {
  local: {
    setItem(key: string, data: any) {
      if (
        Array.isArray(data) ||
        (typeof data).toLocaleLowerCase() === "object"
      ) {
        data = JSON.stringify(data)
      }
      localStorage.setItem(key, data)
    },
    getItem(key: string) {
      let data = localStorage.getItem(key)
      if (!data) return ""
      try {
        return (data.lastIndexOf("}") && data.includes("{")) ||
          (data.includes("[") && data.lastIndexOf("]"))
          ? JSON.parse(data)
          : data
      } catch (error) {
        return ""
      }
    },
  },

  session: {
    setItem(key: string, data: any) {
      if (
        Array.isArray(data) ||
        (typeof data).toLocaleLowerCase() === "object"
      ) {
        data = JSON.stringify(data)
      }
      sessionStorage.setItem(key, data)
    },
    getItem(key: string) {
      let data = sessionStorage.getItem(key)
      if (!data) return ""
      try {
        return (data.lastIndexOf("}") && data.includes("{")) ||
          (data.includes("[") && data.lastIndexOf("]"))
          ? JSON.parse(data)
          : data
      } catch (error) {
        return ""
      }
    },
  },
}
