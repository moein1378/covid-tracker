import { api } from 'boot/axios';
/* eslint-disable */
class CovidTrackerDataService {
  getAll(): Promise<any> {
    return api.get('all');
  }
  getSpecificCountry(countries: string): Promise<any> {
    return api.get(`countries/${countries}`);
  }
  getSpecificState(states: string): Promise<any> {
    return api.get(`states/${states}`);
  }
  getAllCountries(): Promise<any> {
    return api.get('countries');
  }
  getAllStates(): Promise<any> {
    return api.get('states');
  }
  getCountryVaccineInfo(countryName: string, lastDays: number): Promise<any> {
    return api.get(
      `vaccine/coverage/countries/${countryName}?lastdays=${lastDays}&fullData=true`
    );
  }
  getStateVaccineInfo(stateName: string, lastDays: number): Promise<any> {
    return api.get(
      `vaccine/coverage/states/${stateName}?lastdays=${lastDays}&fullData=true`
    );
  }
}
export default new CovidTrackerDataService();
