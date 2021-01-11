import {ApolloClient,HttpLink,InMemoryCache} from '@apollo/client'
import {graphqUrl} from '../config/api'
const client = new ApolloClient({
    link: new HttpLink({ uri: graphqUrl }),
    cache: new InMemoryCache()
})

export default client