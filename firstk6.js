import http from 'k6/http';
import { check } from 'k6';

export let options={

    vus:5,
    duration:'30s'
}

export default function () {
  let res=http.get('http://test.k6.io');
  check(res, {
    
    'is status 200': (r) => r.status===200,

  });
}