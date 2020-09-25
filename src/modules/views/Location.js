import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from "@material-ui/core/IconButton";
import {AddCircle} from "@material-ui/icons";
import ReactDOM from "react-dom";
import Message from "./Message";
import Divider from "@material-ui/core/Divider";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import theme from "../theme";
let selected;
selected = ["서울특별시 강서구", "서울특별시 영등포구", "경기도 시흥시"];
function getLocation() {
    if (navigator.geolocation) { // GPS를 지원하면
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position);
        }, function(error) {
            console.error(error);
        }, {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity
        });
    } else {
        alert('GPS를 지원하지 않습니다');
    }
}
getLocation();


const styles = (theme) => ({
    root: {
        width: '100%',
        maxWidth: 'sm',
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(0),
        paddingTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
    },
    list: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0),
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
    },
    container: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,

    },
    fab: {
        margin: theme.spacing(2),
    },
    btn: {
        alignItems: 'center',
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        justifyContent: "center",
        display: 'block',
        textAlign: 'center',
    },
    btnContainer: {
        alignItems: 'center',
        justifyContent: "center",
        textAlign: 'center',
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
    }
});

function SearchBar(props) {
    const city = [
{ name:'강원도 강릉시' },
{ name:'강원도 고성군' },
{ name:'강원도 동해시' },
{ name:'강원도 삼척시' },
{ name:'강원도 속초시' },
{ name:'강원도 양구군' },
{ name:'강원도 양양군' },
{ name:'강원도 영월군' },
{ name:'강원도 원주시' },
{ name:'강원도 인제군' },
{ name:'강원도 전체  ' },
{ name:'강원도 정선군' },
{ name:'강원도 철원군' },
{ name:'강원도 춘천시' },
{ name:'강원도 태백시' },
{ name:'강원도 평창군' },
{ name:'강원도 홍천군' },
{ name:'강원도 화천군' },
{ name:'강원도 횡성군' },
{ name:'경기도 가평군' },
{ name:'경기도 고양시' },
{ name:'경기도 과천시' },
{ name:'경기도 광명시' },
{ name:'경기도 광주시' },
{ name:'경기도 구리시' },
{ name:'경기도 군포시' },
{ name:'경기도 김포시' },
{ name:'경기도 남양주시' },
{ name:'경기도 동두천시' },
{ name:'경기도 부천시' },
{ name:'경기도 성남시' },
{ name:'경기도 수원시' },
{ name:'경기도 시흥시' },
{ name:'경기도 안산시' },
{ name:'경기도 안성시' },
{ name:'경기도 안양시' },
{ name:'경기도 양주시' },
{ name:'경기도 양평군' },
{ name:'경기도 여주시' },
{ name:'경기도 연천군' },
{ name:'경기도 오산시' },
{ name:'경기도 용인시' },
{ name:'경기도 의왕시' },
{ name:'경기도 의정부시' },
{ name:'경기도 이천시' },
{ name:'경기도 전체  ' },
{ name:'경기도 파주시' },
{ name:'경기도 평택시' },
{ name:'경기도 포천시' },
{ name:'경기도 하남시' },
{ name:'경기도 화성시' },
{ name:'경상남도 거제시' },
{ name:'경상남도 거창군' },
{ name:'경상남도 고성군' },
{ name:'경상남도 김해시' },
{ name:'경상남도 남해군' },
{ name:'경상남도 밀양시' },
{ name:'경상남도 사천시' },
{ name:'경상남도 산청군' },
{ name:'경상남도 양산시' },
{ name:'경상남도 의령군' },
{ name:'경상남도 전체' },
{ name:'경상남도 진주시' },
{ name:'경상남도 창녕군' },
{ name:'경상남도 창원시' },
{ name:'경상남도 통영시' },
{ name:'경상남도 하동군' },
{ name:'경상남도 함안군' },
{ name:'경상남도 함양군' },
{ name:'경상남도 합천군' },
{ name:'경상북도 경산시' },
{ name:'경상북도 경주시' },
{ name:'경상북도 고령군' },
{ name:'경상북도 구미시' },
{ name:'경상북도 군위군' },
{ name:'경상북도 김천시' },
{ name:'경상북도 문경시' },
{ name:'경상북도 봉화군' },
{ name:'경상북도 상주시' },
{ name:'경상북도 성주군' },
{ name:'경상북도 안동시' },
{ name:'경상북도 영덕군' },
{ name:'경상북도 영양군' },
{ name:'경상북도 영주시' },
{ name:'경상북도 영천시' },
{ name:'경상북도 예천군' },
{ name:'경상북도 울릉군' },
{ name:'경상북도 울진군' },
{ name:'경상북도 의성군' },
{ name:'경상북도 전체' },
{ name:'경상북도 청도군' },
{ name:'경상북도 청송군' },
{ name:'경상북도 칠곡군' },
{ name:'경상북도 포항시' },
{ name:'광주광역시 광산구' },
{ name:'광주광역시 북구' },
{ name:'광주광역시 서구' },
{ name:'광주광역시 전체' },
{ name:'대구광역시 남구' },
{ name:'대구광역시 달서구' },
{ name:'대구광역시 달성군' },
{ name:'대구광역시 동구' },
{ name:'대구광역시 북구' },
{ name:'대구광역시 서구' },
{ name:'대구광역시 수성구' },
{ name:'대구광역시 전체' },
{ name:'대구광역시 중구' },
{ name:'대전광역시 동구' },
{ name:'대전광역시 전체' },
{ name:'대전광역시 중구' },
{ name:'부산광역시 강서구' },
{ name:'부산광역시 금정구' },
{ name:'부산광역시 기장군' },
{ name:'부산광역시 남구' },
{ name:'부산광역시 동구' },
{ name:'부산광역시 동래구' },
{ name:'부산광역시 부산진구' },
{ name:'부산광역시 북구' },
{ name:'부산광역시 사상구' },
{ name:'부산광역시 사하구' },
{ name:'부산광역시 서구' },
{ name:'부산광역시 수영구' },
{ name:'부산광역시 연제구' },
{ name:'부산광역시 영도구' },
{ name:'부산광역시 전체' },
{ name:'부산광역시 중구' },
{ name:'부산광역시 해운대구' },
{ name:'서울특별시 강남구' },
{ name:'서울특별시 강동구' },
{ name:'서울특별시 강북구' },
{ name:'서울특별시 강서구' },
{ name:'서울특별시 관악구' },
{ name:'서울특별시 광진구' },
{ name:'서울특별시 구로구' },
{ name:'서울특별시 금천구' },
{ name:'서울특별시 노원구' },
{ name:'서울특별시 도봉구' },
{ name:'서울특별시 동대문구' },
{ name:'서울특별시 동작구' },
{ name:'서울특별시 마포구' },
{ name:'서울특별시 서대문구' },
{ name:'서울특별시 서초구' },
{ name:'서울특별시 성동구' },
{ name:'서울특별시 성북구' },
{ name:'서울특별시 송파구' },
{ name:'서울특별시 양천구' },
{ name:'서울특별시 영등포구' },
{ name:'서울특별시 용산구' },
{ name:'서울특별시 은평구' },
{ name:'서울특별시 전체' },
{ name:'서울특별시 종로구' },
{ name:'서울특별시 중구' },
{ name:'서울특별시 중랑구' },
{ name:'세종특별자치시' },
{ name:'울산광역시 남구' },
{ name:'울산광역시 동구' },
{ name:'울산광역시 북구' },
{ name:'울산광역시 울주군' },
{ name:'울산광역시 전체' },
{ name:'울산광역시 중구' },
{ name:'인천광역시 강화군' },
{ name:'인천광역시 계양구' },
{ name:'인천광역시 남동구' },
{ name:'인천광역시 동구' },
{ name:'인천광역시 미추홀구' },
{ name:'인천광역시 부평구' },
{ name:'인천광역시 서구' },
{ name:'인천광역시 연수구' },
{ name:'인천광역시 옹진군' },
{ name:'인천광역시 전체' },
{ name:'인천광역시 중구' },
{ name:'전라남도 강진군' },
{ name:'전라남도 고흥군' },
{ name:'전라남도 곡성군' },
{ name:'전라남도 광양시' },
{ name:'전라남도 구례군' },
{ name:'전라남도 나주시' },
{ name:'전라남도 담양군' },
{ name:'전라남도 목포시' },
{ name:'전라남도 무안군' },
{ name:'전라남도 보성군' },
{ name:'전라남도 순천시' },
{ name:'전라남도 신안군' },
{ name:'전라남도 여수시' },
{ name:'전라남도 영광군' },
{ name:'전라남도 영암군' },
{ name:'전라남도 완도군' },
{ name:'전라남도 장성군' },
{ name:'전라남도 장흥군' },
{ name:'전라남도 전체' },
{ name:'전라남도 진도군' },
{ name:'전라남도 함평군' },
{ name:'전라남도 해남군' },
{ name:'전라남도 화순군' },
{ name:'전라북도 고창군' },
{ name:'전라북도 군산시' },
{ name:'전라북도 김제시' },
{ name:'전라북도 남원시' },
{ name:'전라북도 무주군' },
{ name:'전라북도 부안군' },
{ name:'전라북도 순창군' },
{ name:'전라북도 완주군' },
{ name:'전라북도 익산시' },
{ name:'전라북도 임실군' },
{ name:'전라북도 장수군' },
{ name:'전라북도 전주시' },
{ name:'전라북도 전체' },
{ name:'전라북도 정읍시' },
{ name:'전라북도 진안군' },
{ name:'제주특별자치도 서귀포시' },
{ name:'제주특별자치도 전체' },
{ name:'제주특별자치도 제주시' },
{ name:'충청남도 계룡시' },
{ name:'충청남도 공주시' },
{ name:'충청남도 금산군' },
{ name:'충청남도 논산시' },
{ name:'충청남도 당진시' },
{ name:'충청남도 보령시' },
{ name:'충청남도 부여군' },
{ name:'충청남도 서산시' },
{ name:'충청남도 서천군' },
{ name:'충청남도 아산시' },
{ name:'충청남도 예산군' },
{ name:'충청남도 전체' },
{ name:'충청남도 천안시' },
{ name:'충청남도 청양군' },
{ name:'충청남도 태안군' },
{ name:'충청남도 홍성군' },
{ name:'충청북도 괴산군' },
{ name:'충청북도 단양군' },
{ name:'충청북도 보은군' },
{ name:'충청북도 영동군' },
{ name:'충청북도 옥천군' },
{ name:'충청북도 음성군' },
{ name:'충청북도 전체' },
{ name:'충청북도 제천시' },
{ name:'충청북도 증평군' },
{ name:'충청북도 진천군' },
{ name:'충청북도 청주시' },
{ name:'충청북도 충주시' },
{ name:'파주시' },
        

    ];
    for(let i = 0; i < selected.length; i++) {
        const itemToFind = city.find(function(item) {return item.name === selected[i]});
        if (city.indexOf(itemToFind) > -1) city.splice(city.indexOf(itemToFind), 1);
    }
    return (
        <Autocomplete
            id='searchBar'
            clearOnBlur = 'true'
            clearOnEscape = 'true'
            getOptionSelected={(option, value)=> {

                if(selected.indexOf(value.name) === -1) {
                selected.push(value.name);
                console.log(selected);
                ReactDOM.render(<Location/>, document.getElementById("content"));
                }
            }}
            onClose={(e, reason) => {
                if(reason === "select-option") {
                    //지역 추가
                    // Location(props);
                    // console.log('reason === "select-option"');
                }
                else {
                    console.log("1");
                ReactDOM.render(<ListItem style={{justifyContent: "center", alignItems: "center"}}>
                    <IconButton name="test" color="primary"
                                onClick={(e) => ReactDOM.render(<SearchBar
                                    selected={selected}/>, document.getElementById("add"))}>
                        <AddCircle/>
                    </IconButton>
                </ListItem>, document.getElementById("add"));
                }
            }}
            style={{width: 'max'}}
            options={city}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
                <TextField {...params} label="지역 입력" variant="outlined" margin="normal"/>
            )}
            renderOption={(option, {inputValue}) => {
                const matches = match(option.name, inputValue);
                const parts = parse(option.name, matches);

                return (
                    <div>
                        {parts.map((part, index) => (
                            <span key={index} style={{fontWeight: part.highlight ? 700 : 400}}>
                {part.text}
              </span>
                        ))}
                    </div>
                );
            }}
        />
    );
}

function Location(props) {
    const classes = {
        root: {
            width: '100%',
            maxWidth: 'sm',
            backgroundColor: theme.palette.background.paper,
            marginTop: theme.spacing(0),
            paddingTop: theme.spacing(0),
            marginBottom: theme.spacing(0),
        },
        list: {
            width: '100%',
            maxWidth: '100%',
            backgroundColor: theme.palette.background.paper,
            paddingLeft: theme.spacing(0),
            paddingRight: theme.spacing(0),
            marginTop: theme.spacing(0),
            marginBottom: theme.spacing(0),
        },
        container: {
            width: '100%',
            maxWidth: '100%',
            backgroundColor: theme.palette.background.paper,

        },
        fab: {
            margin: theme.spacing(2),
        },
        btn: {
            alignItems: 'center',
            paddingTop: theme.spacing(0.5),
            paddingBottom: theme.spacing(0.5),
            justifyContent: "center",
            display: 'block',
            textAlign: 'center',
        },
        btnContainer: {
            alignItems: 'center',
            justifyContent: "center",
            textAlign: 'center',
            marginTop: theme.spacing(0),
            marginBottom: theme.spacing(0),
        }
    }
    var a = {
        key: 1,
        sender: "세종시청",
        areas: ["세종특별자치시"],
        content: "[세종시청] 1명 추가 발생. 68번(보람동, 60대, 대전 297번 접촉자) 이동동선은 역학조사 후 홈페이지, SNS 등에 공개 예정입니다.",
        date: "2020/09/07 20:25:08"
    };
    var b = {
        key: 2,
        sender: "청주시청",
        areas: ["충청북도 청주시"],
        content: "[청주시청] 코로나19 확진자 발생(청주 67번). 자가격리 기간 중 확진되어 별도 이동동선 및 접촉자는 없습니다.",
        date: "2020/09/07 22:33:09"
    };
    var c = {
        key: 3,
        sender: "행정안전부",
        areas: ["강원도 강릉시", "강원도 고성군", "강원도 동해시", "강원도 삼척시", "강원도 속초시", "강원도 양양군"],
        content: "[행정안전부] 오늘 20시00분 동해중부앞바다(강원북부앞바다,강원남부앞바다,강원중부앞바다) 풍랑경보, 어선 출항 금지, 해안가 낚시야영객은 안전지대로 대피바랍니다",
        date: "2020/09/07 18:00:46"
    };
    var d = {
        key: 4,
        sender: "안양시청",
        areas: ["경기도 안양시"],
        content: "[안양시청] 안양154번 및 용인289·295번, 평택88번 확진자 우리시 역학조사 완료. 동선 등 상세정보는 SNS 참조 blog.anyang.go.kr",
        date: "2020/09/07 19:32:12"
    };
    var e = {
        key: 5,
        sender: "강서구청",
        areas: ["서울특별시 강서구"],
        content: "[강서구청] 3단계 준하는 사회적 거리두기 4원칙. 3. 10인 이상 모임 및 행사 참석 자제. 4. 다중이용시설 방문 자제.",
        date: "2020/09/07 19:50:40"
    };
    var f = {
        key: 6,
        sender: "시흥시청",
        areas: ["경기도 시흥시"],
        content: "[시흥시청] 하지민 하품 피해 우려(9.7.아침~저녁) 외출 자제, 간판 낙하, 주택 창문 등 안전에 주의 바랍니다.",
        date: "2020/09/06 21:08:55"
    };
    var g = {
        key: 7,
        sender: "노원구청",
        areas: ["서울특별시 노원구"],
        content: "[노원구청] 9.3.(목) 20:40~23:30 롯데시네마 노원점 5관에서 '테넷' 영화를 보시고, 증상이 있는분은 콜센타(02-2116-4342)로 연락바랍니다.",
        date: "2020/09/07 16:34:24"
    };
    var h = {
        key: 8,
        sender: "서대문구청",
        areas: ["서울특별시 서대문구"],
        content: "[서대문구청]코로나19. 104번째 확진자 발생. 역학조사 중. 자세한 사항 추후 구홈페이지, 블로그 공개 예정입니다.",
        date: "2020/09/07 14:32:24"
    };
    var i = {
        key: 9,
        sender: "인천광역시",
        areas: ["인천광역시 전체"],
        content: "[인천광역시] 태풍 최근접 영향권. ▶위험작업 금지, 외출자제 등 안전에 각별히 주의하시기 바랍니다.",
        date: "2020/09/07 13:30:23"
    };
    var j = {
        key: 10,
        sender: "영등포구청",
        areas: ["서울특별시 영등포구"],
        content: "[영등포구청] 코로나 152번째 구민확진자(완치89명/치료중63명) 및 타지자체 3명(관내경유) 발생안내. 구청홈페이지 확인바랍니다. ☞ ydp.go.kr",
        date: "2020/09/07 18:38:50"
    };
    var k = {
        key: 11,
        sender: "강서구청",
        areas: ["서울특별시 강서구"],
        content: "[강서구청] 강서구 확진자 1명 발생(염창동)안내. 상세내용은 블로그 참조바랍니다. blog.naver.com/gangseokkachi",
        date: "2020/09/07 17:47:52"
    };

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/json");

    let raw = "2020/09/01 14:13:25";

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const [checked, setChecked] = React.useState([]); //init list
    const handleToggle = (value) => () => {
        //지역이 체크되었을때 보여지는 구현부
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
        // console.log(newChecked);
        fetch("http://3.34.80.1/api/renew", requestOptions)
            .then(response => response.json())
            .then(result => {console.log(result); ReactDOM.render(<Message checked={newChecked} db={result}
                                                      selected={selected}/>, document.getElementById("message"));} )
            .catch(error => console.log('error', error));

    };

    return (
        <Container className={classes.root}>
            <List className={classes.container} id="selectedList">
                {selected.map((cityName) => (
                    <ListItem className={classes.list}>
                        <ListItemIcon>
                            <LocationOnIcon/>
                        </ListItemIcon>
                        <ListItemText primary={cityName}/>
                        <ListItemSecondaryAction>
                            <Switch
                                edge="end"
                                onChange={handleToggle(cityName)}
                                checked={checked.indexOf(cityName) !== -1}
                                color="primary"
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
                <div id="add" style={{justifyContent: "center", alignItems: "center"}} className={classes.btnContainer}>
                    <ListItem style={{justifyContent: "center", alignItems: "center"}} className={classes.btnContainer}>
                        <IconButton name="test" color="primary" className={classes.btn}
                                    onClick={(e) => ReactDOM.render(<SearchBar
                                        selected={selected}/>, document.getElementById("add"))}>
                            <AddCircle/>
                        </IconButton>
                    </ListItem>
                </div>
            </List>
            <Divider/>
            <List id="message"></List>
        </Container>
    );
}

Location.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Location);