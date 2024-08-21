---
layout: page
title: Software
permalink: /software/
---

# Software

## VyOS
[https://vyos.io](https://vyos.io)  
[https://github.com/vyos](https://github.com/vyos)

VyOS는 오픈 소스 라우터 및 방화벽 플랫폼 입니다.

Brocade Communications가 Vyatta Core Edition의 개발을 중단한 이후, VyOS는 2013년에 Vyatta 에서 fork 되었습니다. 

DebConf24 행사장 내부는 VyOS의 DHCP 서비스([ISC DHCP](https://www.isc.org/dhcp/))를 통하여 네트워크를 제공하였습니다.


## LibreNMS

[https://www.librenms.org](https://www.librenms.org)  
[https://github.com/librenms](https://github.com/librenms)

LibreNMS는 Observium의 마지막 GPL 라이선스 버전에서 분기되었습니다.


## Cisco C9800 WLC

DebConf24 24개의 Cisco AP가 설치되어 사용자에게 네트워크를 제공하였습니다. AP를 통합 관리하기 위하여 AP 제조사의 Wireless Controller (Catalyst 9800-CL Wireless Controller for Cloud)를 사용하였습니다.

180일간 Trial로 사용할 수 있고, 이후 AP를 50개까지만 제어할 수 있습니다.  
[Cisco > Download > Catalyst 9800-CL Wireless Controller for Cloud](https://software.cisco.com/download/home/286322605/type/282046477/release/Dublin-17.12.3)

WLC의 Discovery 방식으로는 DNS 방식이 사용되었습니다.  
[Cisco > Understand the AP Join Process with the Catalyst 9800 WLC > Wireless LAN Controller Discovery Methods](https://www.cisco.com/c/en/us/support/docs/wireless/catalyst-9120axe-access-point/221056-understand-the-ap-join-process-with-the.html#toc-hId--1749342270)

무선 데이터는 두가지 방식으로 수집되었습니다.

[CISCO-LWAPP-AP-MIB](https://mibs.observium.org/mib/CISCO-LWAPP-AP-MIB/)을 조회하여 PULL 방식으로 AP별 ActiveClientCount를 수집하였습니다.  
[https://wiki.kreonet.net/x/7ADQCw](https://wiki.kreonet.net/x/7ADQCw)

C9800이 제공하는 Streaming Telemetry 를 활용하여 무선 채널데이터를 수집하였습니다.  
[https://www.wifireference.com/2020/01/14/viewing-network-telemetry-from-the-catalyst-9800-with-grafana/](https://www.wifireference.com/2020/01/14/viewing-network-telemetry-from-the-catalyst-9800-with-grafana/)  
[https://wiki.kreonet.net/x/xADQCw](https://wiki.kreonet.net/x/xADQCw)


## sFlow-RT (InMon)

[https://sflow-rt.com](https://sflow-rt.com)  
[https://hub.docker.com/r/sflow/sflow-rt](https://hub.docker.com/r/sflow/sflow-rt)  
[https://inmon.com/tutorials8/prometheus_grafana.php](https://inmon.com/tutorials8/prometheus_grafana.php)

sFlow-RT는 [InMon](https://inmon.com)에서 만든 소프트웨어 입니다. 미국 슈퍼컴퓨팅 컨퍼런스 행사장 네트워크인 [SCinet 의 모니터링 용도](https://blog.sflow.com/2023/)로도 사용됩니다.  

DC24에서는 sFlow 블로그 게시물 - [Flow metrics with Prometheus and Grafana](https://blog.sflow.com/2019/10/flow-metrics-with-prometheus-and-grafana.html) 을 변경한 다음 설정파일이 사용되어 데이터를 프로메테우스에 적재하고 Grafana 대시보드를 구성하였습니다. - [prometheus.yml](https://gist.github.com/Kwabang/79b33f2891000c3d93ff7fc50e93414a) , [dashboard.json](https://gist.github.com/Kwabang/82fd113c7264ab5141cffb2672abe3df)


## ElastiFlow

[https://github.com/robcowart/elastiflow/tree/v4.0.1](https://github.com/robcowart/elastiflow/tree/v4.0.1)  
[https://hub.docker.com/r/robcowart/elastiflow-logstash](https://hub.docker.com/r/robcowart/elastiflow-logstash)  
[https://github.com/robcowart/elastiflow/blob/v4.0.1/kibana/elastiflow.kibana.7.8.x.ndjson](https://github.com/robcowart/elastiflow/blob/v4.0.1/kibana/elastiflow.kibana.7.8.x.ndjson)

[ElastiFlow](https://www.elastiflow.com)는 [Robert Cowart](https://www.linkedin.com/in/robertcowart)가 개발하였습니다.

ElastiFlow의 collector는 logstash 기반으로 네트워크 플로우 데이터(Netflow, IPFIX, sFlow)를 수집하고, 메타데이터를 추가하여 ElasticSearch에 적재합니다. ElastiFlow는 Kibana 대시보드도 제공합니다.

ElastiFlow의 라이센스는 [ROBERT COWART PUBLIC LICENSE](https://github.com/robcowart/elastiflow/blob/master/LICENSE.md)를 따릅니다.

ElastiFlow collector는 2020년도의 v4.0.1 버전 까지는 logstash 기반으로 개발되었고, 그 코드도 GitHub에 공개하였습니다. logstash의 필터는 JRuby 기반의 코드로 동작합니다. v4.0.1 이후로는 성능개선을 위하여 go 언어로 다시 구현하였으며, [https://www.elastiflow.com](https://www.elastiflow.com)에서 가입을 통해 EF_FLOW_LICENSE_KEY 를 부여 받아야 사용이 가능합니다.

DebConf24 모니터링을 위하여 Docker Compose 로 ElastiFlow v4.0.1, ElasticSearch 7.8.1, Kibana 7.8.1 를 구동하였고, Kibana 에는 [elastiflow.kibana.7.8.x.ndjson](https://github.com/robcowart/elastiflow/blob/v4.0.1/kibana/elastiflow.kibana.7.8.x.ndjson)을 수동으로 추가하여 대시보드를 구성하였습니다.


# Grafana Dashboards 

비디오 팀이 사용했던 대시보드 중 일부는 공개된 대시보드를 사용하였습니다.

[https://grafana.com/grafana/dashboards/1860-node-exporter-full/](https://grafana.com/grafana/dashboards/1860-node-exporter-full/)

[https://grafana.com/grafana/dashboards/4394-mdadm/](https://grafana.com/grafana/dashboards/4394-mdadm/)


# DebConf VideoTeam Documentation

행사장의 대부분의 세션은 HLS를 통해 실시간으로 송출되었습니다. 컨퍼런스를 연사와 발표화면을 mix하여 송출하는데 votomix 가 사용되었습니다.

[https://debconf-video-team.pages.debian.net/docs/index.html](https://debconf-video-team.pages.debian.net/docs/index.html)  
[https://salsa.debian.org/debian/voctomix](https://salsa.debian.org/debian/voctomix)  
[https://github.com/voc/voctomix](https://github.com/voc/voctomix)
