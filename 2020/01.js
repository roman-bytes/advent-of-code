'use strict';
/*
    Code of Advent - Day 01
 */
// Find the two entries that sum to 2020; what do you get if you multiply them together?

const input = [
    1211,
    1698,
    1787,
    1947,
    1888,
    444,
    1819,
    1890,
    1940,
    1884,
    1917,
    1814,
    1724,
    1561,
    1823,
    1266,
    1982,
    1826,
    1871,
    1692,
    1665,
    1081,
    1847,
    640,
    1861,
    1632,
    1916,
    1921,
    1450,
    1806,
    1950,
    1969,
    1757,
    1766,
    1799,
    422,
    1865,
    1934,
    1954,
    1640,
    1743,
    1812,
    1745,
    1574,
    1904,
    1510,
    1491,
    1977,
    1727,
    1979,
    1842,
    1784,
    1655,
    1991,
    1296,
    1849,
    1863,
    1886,
    1696,
    1716,
    1679,
    1848,
    1540,
    1780,
    1926,
    1986,
    1898,
    1448,
    315,
    1568,
    1869,
    1875,
    2010,
    1268,
    1892,
    1248,
    1746,
    1987,
    1963,
    20,
    1575,
    1827,
    1653,
    1851,
    1365,
    1599,
    1688,
    1943,
    1677,
    1320,
    154,
    1490,
    1737,
    1573,
    1908,
    1667,
    1151,
    1761,
    1587,
    1924,
    1941,
    1731,
    1669,
    1857,
    1723,
    1880,
    1970,
    1791,
    1928,
    1942,
    1816,
    1989,
    1832,
    1911,
    1711,
    1817,
    1893,
    896,
    1998,
    1720,
    317,
    1964,
    1379,
    1750,
    1971,
    1322,
    1992,
    1347,
    1608,
    1373,
    1668,
    1252,
    373,
    1968,
    1754,
    1709,
    1988,
    1946,
    1537,
    1758,
    1830,
    624,
    1694,
    1914,
    1867,
    1145,
    1973,
    1769,
    1773,
    1424,
    1777,
    1659,
    1789,
    1907,
    1201,
    1967,
    1682,
    1952,
    1978,
    1937,
    1974,
    1488,
    1896,
    1657,
    1420,
    1935,
    1778,
    1822,
    1703,
    2003,
    119,
    1149,
    1732,
    1878,
    1938,
    1918,
    1797,
    1836,
    1741,
    1579,
    1589,
    1999,
    1772,
    1853,
    1793,
    1768,
    1759,
    1216,
    1765,
    1944,
    1735,
    1580,
    1756,
    1308,
    1786,
    1962,
    1981,
    1156,
    1948,
    1894
];


/**
 * find2Total finds the two numbers that equal the target number and adds them together.
 * @param numbers This is an array of numbers.
 * @param target This is the combined total you are looking for.
 */
const find2Total = (arr, sum) => {
    const map = {};
    for(let i = 0; i < arr.length; i++){
        if(map[sum-arr[i]]){
            return [map[sum-arr[i]], i];
        };
        map[arr[i]] = i;
    };
    return -1;
};

const find3Total = (arr, sum) => {
    for(let i = 0; i < arr.length; i++){
        const indices = find2Total(arr, sum-arr[i]);
        if(indices !== -1 && !indices.includes(i)){
            return [i, ...indices];
        };
    };
    return -1;
};

const pt1 = find2Total(input, 2020);
const pt2 = find3Total(input, 2020);

console.log('Part one: ', input[pt1[0]] * input[pt1[1]]);
console.log('Part two: ', input[pt2[0]] * input[pt2[1]] * input[pt2[2]]);
