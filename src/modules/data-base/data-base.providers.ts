import dataSource from './data-source'

export const DataBaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => dataSource.initialize()
  },
]
