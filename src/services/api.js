import axios from "axios";

export const api = {
  async getTableData() {
    try {
      const response = await axios.get("/api/sifre");
      return response.data;
    } catch (error) {
      console.error("Greška pri dohvatanju podataka tabele:", error);
      throw error;
    }
  },

  async getColumns() {
    try {
      const response = await axios.get("/api/kolone");
      return response.data;
    } catch (error) {
      console.error("Greška pri dohvatanju kolona:", error);
      throw error;
    }
  },
};
