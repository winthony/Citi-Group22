import React, {useState} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { images, COLORS, FONTS, SIZES } from '../constants';

const cardspayment = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    // Render

    return (
        <SafeAreaView style={styles.container}>
          

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }}>

                <Image source={{uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhIVFRUXGBUWFxUVGBUVFRcVFRUWFhUVFxcYHiggGBolGxgVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi8lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALMBGQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBAUGBwj/xABFEAABAgMEBwcCBAQEAwkAAAABAAIDESEEEjHwQVGBkaGx0QUGEyJhccFS4RQyQvEjYnKyB1OC0hYkNBUzQ2OSk6TC0//EABsBAAIDAQEBAAAAAAAAAAAAAAABAgMEBQYH/8QANxEAAQMCBQEGBQIEBwAAAAAAAQACEQMhBBIxQVGRBSJhcaHwBhMVsdGB4SMy0vEUJENSYnLB/9oADAMBAAIRAxEAPwDvd/u+0URX2azPLGsJa+I2jnOH5mtP6QDSYrMHRj87dHe4lznuJ1lxJO0o7U8uc4mpJJJ9SSSUF1ejpUW02hoC8xWxD6ji4lC6I76jvKt0R0vzHecFGtznNEJEznDPNWqoOUER2N419SqD3fUd5XsOw+4sWKzx7REbZoEgQ58rxbrkSA0HWTsIW09j9hA3Dbopd9QmW7xCuy2qg4hkwATHAJWtuHqRLiGzpJheBdFd9R3lB4rvqO8r2va/cB/hmPYozbVD1Nl4gAxldJDz6CR1ArxIYSaAmVcDQDEnUrKdRlQS1NzH0zD1Qe76jvKvxXfUfSp3qpKSz8KaWZF4jvqO8oHRXaz7TKsq4bNJQp54CJhcP1GfuUfiO+o7yoomqy4m6niO+o7ylvtTsA4+8ylPeTQYc0xkOSFaAGiXdFId7EudvOQntiHWd5S1C+SLKtxc5OEV31HeU1sR2s7ysYdNPhFCy1JatTXH6jvKfD93byEhjvZaIZPrySCxuc7lM8Vut28oHx9TjvKKLCJqMefFYnKxwSZ3tz1TXR3fUd5SX2h2s7ygJQOUIV4bCjox+o7ylGK76jvMlT2JJcktNMJjop+o7zJKMRw0n2meCk9SGf7dELawKCK76jvPFWIrsQ47yhI/fqhzn0RCtWtkcn9R3lMEV2hzt5WMHSMc8E9jpoWZ7YK9r3N78xoERsO0RHRIDiAS83nQ5/qDjUtGkHRh6/ZvEbrG8L8zELs/9vWj/NO8rDisEHuDmW5WmhjCwZXX4XOePMfcqjnOcEZbj6lNscAPisYaBxa0nUHOAPCa3aLi6mAu12F3KtVqZfYGshnB7yWhw03QASfeUvVO7U7oWqwStDmw4rWkGbZva3VfY4Ck/ca13P8AFXtGLDdCs8MmHC8MOk3yh3mLQ0y0NDRTDzey8Se04/hGB4r/AAiQSyZLZtw9hPRhMA6AslJ1aqA+RB2jbz5W6sKFAmnBzDed7HThej74WK3RXWX8TGhu8chsNrS4MaXXRec26JHziomcV6YdyYg7NNlb4ItDnAviAuuuDYt9oL7l4ybIAS6rl/4n/wDT2H+h/wDZCQxHu/4eBvGd/GZn/wBSdKz991KmWkDvRpvJgrZ3G1qoIJ7s67QJH7rj90+y7dDtkaDZosNkSGHCJeL/AA3hrg3C4b0iaTAXHi9uRWx40RzWF7z57outL2ki9IazMk0JxmDNen/wfcTaoxNf4Rxx/wC8YvE9oD+LE9HO33jJaW96q5rgDYbe+izucWUGOaYkm3F7dFju6MzUKMBC4ceS1rK1ypon7JigCtNSLpVSSIrp0GGn19EyK7QMTyUhsSU2kC6jGSVokmI6dAhMS4qnxNSFQlCc6klqaABATGuzoToZzhwSbNBc8yaJnXoG3Qu/2f2O0ViG8dQo3qULDinMZYm/CxwJmgmfQfZdGDYIh/8ADP8AqpzK7MBgaJNAA1ASWlqRK5pOZcpvZkSX5W72rLH7Kif5YPsWr0rVHpGoTYpimBcLxVos5b+Zrm+4MlkcvcPK5Nt7MhOrdunW2nDAqQMqYq5TdeZKB7QVqtlifDr+ZusYj3CyNeCmttPvDM1Z4jSOvVUCtJWeJDl7ckLZTfNlYOdf3QkZ+CoNWSjGfX7pKRKDP2RsdKo3KpZ1hEhVudNk9aFjhOlTM8/K2SQVQnvFTnHIQsGlMiaT6n7fCEtpLOZIC5xOy9+zt6w2+EyHb70KNDFIjZgGYEyCAQJyE2uEp4Ll9vM7LhWd0Kzl8eM4giKSZtu63XQ27KYk0VpPAFeTYKE61ZGePRZ24YNMtcQNYm3vwW1+Oc8HM1pMRmi/9/Fes7+9swI8GytgxL7obXB4k4SN2GJVAnUHDUtHdztWxRezjYbXEdCuuJDgDUeJ4gIN0ic5ggjDh4d+c+6BwwCP8O3IGSbGQd59lMYx3zDUIFxBG0L23cztSxWS2R3CK5tnuXIbnhznOILC5xutpMgnAYrxdtIMRxGBLnbySOCq7gM6yoBpznBWNphri7kAdFB+IL2BsCxJ6pRCADTmSc4dEJViraVUkLjJEELmzKlKlmEpbG6SmIgFCgKWZKiFLcjIQOSV7HJTjnonWOxl5maN5+gVWeDeNcF14IwQAlVxGUQ3X7LTZ4YaJNEgtzIrWi85waNZouTaraIY1u0D5OoLlPiOebzzPVqH9I0ZxTJWRmGdU7zjA55Xo39utwhtn/M6g3Y8ks9rRD+sD0aPkriMWhqUKBpAaLqjtF3+Y/f90B7UijCIf9Vec1iaEtykQCFEMvuumzt54/O0OGsUPTgFrgdow4lGukfpNDs17F5xxSHs1YqICs+QHL0kZce32EHzModWg9ChsnahHliV1O0/6tecVviJ6oa2ph33/YriQ3zoaFFdTrbAnUY80lhmElszhwzBZ3w5U3IhxTnNmEmUvlCnnkIgJ/HvqVAIpZ5Ii3PqhVGogln5Wq+76VnI0rVdCRSD+Vtiiu3PJDEHL7fKbEHm2lBEGOwc/shc2boQ2gzioRn3PQBNcM7F1ewuyYcUu8S8Q0No1zmTJm2Zc0h1Lmg6VXVqikzMVdh6Lq9QMauA4ZzsQSmV9BhdzLDIucx4ABJJtNrAAFST/EwktFm/w8s0QBwZEhhxE2mPbC5sO6+oPi0jElhqC0ASun8xx/UafB9Pyun9Jq/7h6/hfOJYnZvxUkvp7O4dhALXwIl5v6haLYGvBwc3+NQ4gt0S1EE4bZ3OsbWu8Nj2ukZOMePEkdBuxHkHduR9Rp8H0/KPpFbZw9fwvnt2udKXLjy/aW5OFRPX80Cq78ccldBcsOQEUQtFCc1wTogQuGA2/AQpNMpQChCcGIXNTJTL0gtz8JJbMrW8Z5Jd2QQptcs5cdBI9lZivFA58/cpvh6UtzJe6Fc2oNwga2dTX3qT6lMQAFRzyhaBLkYiLbZyFy2AnBbYDpI1WfE0o0XYhSlgsUeSjIp9OCzxXZCkdAsDKRBSnuQEpcRyFj1GV06VMkSjc2aoRXil50tUzJMCpzEKecAQUN931O3lWz9+qjWZzmqaG6dhQqXVANFJIHM07066ra3RrTKqJtKztboz6Jl3PqPsilhu6IwOu7HgoqBck3U7wyqurRJBTa5ayPMdvMoJV29Fou+YoGtqPc8ynCwZtUJGdq7/AHWhPJfdeG0Zi29i6L6rihuGz5XoO6THzfcLfyw53gTpiaiFjx4/gn9F0uxz/mR5Fehi2eLcE4oLb8K+LgE4fisviczQtnsmNK9fZm0Xl47IwZNxh3GuhvfJrwfDZEa+JI3vpB0VkRpXqhRq4S9WuR2xHffYxhDS4PcXEXvKy6JATFS6IyuoHZxLZDi1/ij/ANsf7lv7Yc8xYfhlocBELi4Fw8M3RdoRIl4YQdUNy5VsMaRrD/8AS/8A3JHQpjUL5qxvlaPbl+yNreZzxTIbKN/p/wBqtrc7SvVFeFzWSHjBWW1O7cJJlzzAZx+yjW8STxKSc+/fkhc3PHolhueJWh7anb8BA0fJQgGyzxBnh1ULa5zrTbtc6P3UY2qalmSnN4VzwSyzPNaSMfflVDcwQmHrK6Es5hzPounEbwSHw0K6nWIWWStjkTmHVnQkup7oWtmWpaV1oUAkErFaXSp9itdkizYa6PT5XNtEQk1rzCZWOixzqhB2SX+ijQjZDOdKeyBJRW6pXa0ZQhhhOLE1kLEaMdmZo2sp7U2hNYXVt0l0PTnOKJrc+oTYbKeyjW/HT4SVebZKcMN27IQjFaCyh9weFULofLr0TBUg8RBQxWY7DnerDajdvp8pxbPaPg9EsCmz4+ySrDrIbvL7fCfNUW12nmEzwkFSa4LcBV2dCBgqNv8AcUz9RzoQQzUbeZWgBYJ1VhudhXT7F7VFnLi5jnhwaJMu3gWzlK8QCDeOkYaVzdWdBQvNM6lXVotqsLHaK7D4h9CoKjNV7GB39gtxstp/+N/+yzO/xCMNpZCsUaIwA+HfiQIbmkYQ3EPdNomJOxAkCCRM+VdhtKBpoc6GLH9Lw/Luo/C6X1vE8N6H+peqHfBlSbPaC90rzv8AlgKYNaPHMmidB6k4kk5rR3la4ENhRAZGReYV2eEz4cRx4blxXGu3ohcaZ9EfTKHj1H4UR23iuG9D/V9wUsslIam/CsM5KF1R7Hkpe5dV0IC5d0LWecZ1qoTMNitrvONnypCfhsSsmZj9Pyo9nm3f3qmw6bD8q3v827+9QPpsPylDUCUAhV38lIUHn8lV4lc6lcKLz+Sl3VI5oQ+DQ+7ui9D2TAZBsxtBhNixHRPCaIgvMaA0Oc4t/UTMATwXnfEx939V1uy+2mMhugxoZiQnODpNdccxwErzTI4ihBVNYAtsOnC1YV2V8kwYME6A7HdVGgC12iG2HCZCLzDYQ2d29PzODTgJVkNS198LDBc1kezMa2H/ABIJAlK9Debrj6uaWu2IIXb8OHFdFhQLkod2H5y4tc4EeKSR5nSLqAAYLPbO80WLAiwY5MS8Wuhu8o8N7SZmQFZtJCqh2ZpaIA8edeZi2+xWprqfy3Nc4FzryBa0EcRNxYGQdtV3rfYgYLvwtms0azhlHilphuDRN0QzDrwdeMpSkAuZG7rGNY7M+GITH/8AMB7nFjHOlFkyZP5pAH2mlQO8lmhkxINlLIxDgD4rjDaXtul4aRM44EyXF7S7cDrPAghsjB8abpzveI8Ow0SVbKbxEWvMmOCL3M7XBEzotD6rXGdTliBYfzNiCWgi0mLxpMFa+9lg/DxRDYxjR4EGdyV0xLovumKEk1npXrbB2NDnZmGBYCx0Gzl5cGi0OLmDxCLpvFxrIgVK8Pb7cLU6/dLbsCHBlMGZY0Au0SnSi6DO9VnBgufZYjosFkKGD411jjCDQCWhk6kTlNJ9N5ptG9/eoWinVaK1QtjVvOn6A/udxNtndywwIb40aOy9CgkAMfKZdEdJocDpa0PMtYTLH3eZDtcdkVt+HZ2xYt2cr7AAWAkYAgsJWBnfSM2GRCPhxHxIkWM8XTfc4iQaCDda0TT397HOiwozmBzhDMOMHHyxmmYqAPKS072j2UiKpJPPjx7dfxBtErMHUW5Wk6GdNZmd9u7aNGnmENq7QbHDAbNBhvvHzwgWC5gWFkyHa5leg7a7GbZ/xUcQ2El4DIcm3YLHTHiubrJaQ3QMa4LzVq7QsxDWwLOWym8vdEL3yr5W0ADfeZwWhveKdpjxnMLoccvY+EXVIkGtk6VCC0EGVJIc02yNgXsTrcW1MTf7TdVsqgSKjwXGIcBpZwnQTBI6yLgIuz7BZ/wkV3iOv3oVfDabpLIhug36gkCbpDAUK4fhZ2lDBdjnBDez7krU0AEzJk+9lgqPL4AAECLbpxgibvYf3hR0IU254pRf+bOkFRzqjOvopy3hUgHlPbDHlzrS2QxLOsqNfhnWlMfTPqUS3hMA3v7utLmDj8Ba7gXOL+Z4ALV4qC4cJZSiveYoGOqPc/JQud5s6yll3P4CWZQyrSHYbEt7qblRdz+UDjnajMgNRl1NvwUF6m7l9kAdQ7EIPLkZfKWYqYatT3/HIdELnUSp0Htyopez7pZio5Vd/DOn7KB2GdaS48+dFZd1+USrMqJ0SoOdal6p9zzSopULq+8jvEuYRKYCdFdXYeQSHvM8aInOoDq+P3SnZ2YcEgpsCsPMxMpjXVOc4FZiiL8DnPVSKm5qc92OwoDElnUhc/TmRSy7hkcOSSTWp7omG7okRYiAuSIrkK5lG8BSLEz8LKXTOeKY5yOBBrNC3ta2k2V0rFRujD0WC0wpunNbGN9EqK1OFhpHK8u5SWpl9IfEkghmfyUStLqRIldBkWk9aMPkM5xmsQfP46prXzMkljdThbGvk1W01zo/ZZzE69FA5CrFMrSDxPJDOuz7/wD2QT0Zrjn0VwjPafuUKMJzzwHx90DRncEL3U9+WJ+EIf1+UkgDCbOo2nefsnTWefAAZ2rVRBTCkY12nPBLiGp2HO9XFOfYy6oHnDdncEKuLpk88FROdiBhpnOtQnPshIBRp0e4QB2GcR1kqvVQv08OYQpgJzXU2njUKgeiBrsfUTGyvJCShOETjxVB2c+iF505zihBxzn7IUgEbjTOdSG9Qbt9RxB3obyEGpGvI4oTATg7r1S3HPt9pbkLXqnnPLohMCCoShLuPPPJU1yp6krsqsRM5zglPOdYQF2/SqLs50JK1tJNa+ap4mkXiDzCa108ESrvl5bpbma9+harJCKFoWmDTRuoiFViKhcIC1w4VMFljs1Ba4dopp4dEiLEJ1pnQLA3PmuuVEha9yNrP2TntSylC6jahLYUuqg6SF8TOtXDbpOPJCT2WunNRgpYQl+4JrOQnOdxyem1NaenyVlhunXdnOKbeznNElW5uyNzs++KtmOfdKRT45KZQRAgJzD1T1kvUTZ+qiVFrU95qfc8clLJ8vqKqOdX3n16oWmvuhUwra7rnYrJSgemdiMlCZCFxUecDmYQuVA047RihSAVh0th4YjgeCtx4ckqfGnyPkbUQNOHRCkQiJznNUqec5xVzzyQPznOKEwEZKW8oQ5S9nmmpAKy/Tmaq9ozJLnn5VTQrAyUV6ud6YlmqFj0Aq0MVxW6RjzSZrUkRIc6jFBCupkDVADPPJW1pnTePlUyU5EZ9Fpakraj8toUhE6QtTG6kloT2lSXNqEkprWH13IHMPryTWxjJKe9M6KgZuFni0WV8zh9lreEohJbKLy1JYyXvrWiFDn9/uqhw7xlmlVrcZ+2rQBoJ1rl9o9ojCgNaJcfTxO+treN419P2H2Ge0ialQkU2mCRq46wNhA1N4nzIQ6zfznY2iB1jP6XV1YLQtVgs190jgKnouD9axTTmLhHECPSD6r11T4W7L+WRkI8Q90+dyW+keCDszsaNG/KJNwvHCXppJ9l1x3RpWMJ+jJj+5dSwR7pDf0mgGr2XVXMxnxNjzU/hkMG0AE/qXA+gG3muMz4bwdK1QF55JI9GkepK8Vbu7kZgmyT/wCmcx63ek1xWunnQvpy8x3q7MAHjsEjMB4GBn+V2+h9/ddXsX4kfiKooYkCTZrhaTwRydARqbRouP2v2CylTNbDkwLlpvbkHW2pBJtpwvNErXc9QsMPWtm1euK8pCjzU+8+P7qnnTmqqIa7SM8N6CaAqyFcTH35jJVtdnOxQwnVbdN5tZSMwAJzI0CVfZBIiRkQDUTGOimvSEJ5VbigvSKa6G4T8pF3GYPlrKuqshVSPZIjRN0NzRoLmuA9pkJSpBh4SXjRn03FUHcaH3/fmmRrO9smuhva4yk1zXBxBpQETKXFgva645rmuoLrgQ6Z/LQ1r0TkKeQ7qOPQoCVbpihFRQg47QmRbHFaJuhRGgaXNcBI0EyRsQm1hWcnOc4qimGC6YF114yk2RvGdRIeqUAZTkZTlORlPGU9dDT09E1aGKyhnOmnR0UOeipwnnNUlc1qgdnWoUE5+/P7qg7OtCta1MZEz1TEjFE10kJvp7hMLQcVGQyMDP3VtcmNCazPcQITGDXTiE9sPVLf8JLCQnNjHSBuTusbs2yYILvpKB0M6t9FohRmkflE0ESI36eE1J2ipDnzEe+qyv2bKrNEJ0Daei1xHnQPhY4rSdO7qoLRTN7o7B+szmacZLSs1hkHFul3xp571pXkO2gRiyTuBHl/eV9c+Fntd2a0N1DnA+eYn7EKLs9jt8hP83IDquMur2NFo5u34PxvXEr/AMi7teci6YXchGYB1gLisZMgDTRdwCVFyMSdFyq+ytZ7ewOhRGnSx3IyWhc7t21CHAe4nEXR7upTZeOxLBsc/EU2s1Lmx5yIWLEPayk5ztACT5QvnxcnTWWa011L7E7VfLWtICbFxO1AD0K7ffDsZ1ltMRhEmEl8N2gscZgD1GB9vVcElQY4OaHDdVPplji12y9mYt6zi0MIMeOxliuzqXtdde93vBZCbP8A8wqd5GwXwHMhRWxDZHMa0BrmkQi1kKIZkAPnFa18x/mFeMNeXRCaj1CqFCHAzofY6WHmthxctILdRBv5301JMnn1Xv8AvFaIcVvaMQFoitIhPaKX2ttUPwYjdZuNuu/padKLvT+KFqbEYyJ4bYzXAxY4dBe++PDNwkCG3riF87BRUSGHAi/pyAORx71UnYwkkxExoeCTweet94XvLV40OPZ4oEURS+MBZY9oD5B0PzPhRSQWB05Amt5olNBFsrYdphx40WK0QoTopZaHeM+C8PLILC5lS0xHteBKcmleCLdGvmqaNGZ60fIPPhptfxPPj4zopDFTtwdeIvoOPLwXe72taYrI8N4iNjsa8uaC0GK3+HF8rqib2l1frC6BiRLTDsEGJaIhZEMcxS6I4jw4cYuc50zUtY1xE9QXjzxzRSmxWfKsBOmnQgdJB8wgP7xMa6ifET1uPIr6II8OPa7FaocVr5WgwnkNdDugudFgNuvAMgxzmTwlDC4vbMZkSweOyQdFtMN0WGKXIogRhELR9DpteNV4j9K8uR6KszUG0MsQdPyT/wC+iu+cXA21184An09VQKo5zrQuCsFXqIaqcJ5zVDPQd/VGc/dVjnM0KYCAiWczRtchkR7IwAfQ50oScUbQnwwkBpC0QnZwTXPrHhPa31305pjYbtW5RhTQ8DUgFYi8oWtcNDk1zidB4ofxJ1BLfGPopu0US1xNwhe0+gz6rPFZrKY5xS3KEK5jSEm7qpo2LYx96olexI+4wWUpb3gLJjMFTxLYdYjQjULv9kdr4js+oXUrg6tOhj7EbG/BBFluLTqKOE9zTeFANJBA2rlC0v8A0kj0E0DnTqTP3XGHYBmDUt5X+9vVewd8XNNO1HvcF1usX6CdiF7/ALBt8GJ+Vwv/AEGh92z/ADLuL5CZlbWdoxgJCM8D+pwG6aw4v4TD35qNWBw4THkQR0j9VzKfxAf9Zkn/AI2HQ6dSvpNttsOE29EeGj1xPsMSvB9udtOtD6C6wTDQZGc8Sf5uXPkveXGZJPqTMn3JVjhzXT7K7Ao4F3zHHO/kiAP+rbxa0mbWEAmeZj+1auJbkAyt4mSfM26D9SbIm693VbZn+ZTsfsyJaYzIMITc8ynoa3S86mgVX2z/AIFsn0ldbEYllEgHdcujhXVZI9V2O2ezYUeEWxobXgCYniDraRVp9Qvina3Z0JkRzWtkAcJuOvWVFFh7PcZcJ4WrHtHdMXWD8KzVo1lT8M2eHE6lFF0pXKAChsjK04nqp+EZq4nqooiVMAKnWRmrieqE2RlKcT1UURKsaAo6yMpTieqEWRk8PXE9VFE5VgAhT8IzVxPVWbIzVxPVRRKVOEP4RmrieqhsUP6dWk6/dRREqaptkZq16T1V/g2fTxPVWokhVDsjNXE9URsUP6eJ6q1E5UXK4dkYNHE9VrbZGauJVKJysFYCUw2RmrieqUYDdXEqKIlQYASiEBuriUJgN1cSoopklIAIjZGauJ6pf4ZuriVFFCU4CXFsjNXE9Ug2RlKcT1UURK00gIVmxQ/p4nqk/hGauJ6qKJStYTmWKH9PE9UD7IyeHE9VFEShEbEynl4nqmwbDDLgLvpieqiiJUV9x7t9iWezQh4EJrC6V41c53u5xJO9dpRRedeSXklddoAaAF//2Q=='}}
                  style={{width: 400, height: 250}} />

                </View>
                
                <Text style={{ ...FONTS.h2}}>Total amount payable: $15</Text>
                <Text style={{ ...FONTS.h4, alignSelf:'center',textAlign:'center', justifyContent: 'center'}}>{"\n"}{"\n"}{"\n"}Use CitiPoints? (3,652 CitiPoints available)</Text>
                <CheckBox
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                    onPress={() => navigation.navigate("paymentsuccess")}
                >
                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        colors={['#46aeff', '#5884ff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Pay now!</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default cardspayment;