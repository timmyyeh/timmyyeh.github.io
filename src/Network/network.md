# Chapter 2
### Ch 2.1
* wave length  
`speedOfLight / Frequency`
### Ch 2.2
* NRZ (none-retruen to zero):  
1->high signal  
0->low signal  
Disadvantages: unable to clock
* baud rate: the rate at which signal changes back to original point
* bits stuffing: every consecutive 1s insert 0 after it
* 4B/5B: insert extra bitx into bit stream to avoid consecutive 1's and 0's. Every 4 bits of data are encoded in 5 bits (no more than one leading 0 and no more than 2 trailing 0s). Then, use NRZI (inverse) to send data.
### Ch 2.4 Error Detection
* Two-Dimensonal Parity: 基偶同位(set parity to 1 if there's odd nums of 1s)
* Internet Checksum: add up all the words (both receiver and sender will perform the calculation)
* Cyclic redundancy check (CRC)  
  use some rerundancy k bits to detect error where k << n
  ```
  Message: 10011010 -> x^7+x^4+x^3+x   (M(x))
  C(x): given with k degree
  Then the sender will send n+1+k bits called P(x) which is divisible by C(x). We can obtain the remainder by XOR any poly B(x) with C(x)
  ```
  ``1. Multiply M(x) by x^k; add k zero at the end of the message to obtain T(x)``  
  ``2. Divide T(x) by C(x) to find remainder``  
  ``3. subtract remainder from T(x) (XOR)``


### Ch 2.5
* Automatic repeat request (ARQ)
  ```
  AKA stop and wait algorithm: After transmitting one frame, the sender waits for an acknowledgemnet before transmitting next frame

  ```
* Sliding window Algorithm  
   ```
   send window size (SWS)
   last acknowledgment received (LAR)
   last frame sent (LFS)
   Invariant:
        LFS - LAR <= SWS
   ```
   ```
   Receiver:
   receive window size (RWS)
   largest acceptable frame (LAF)
   last frame received (LFR)
   Invariant:
        LAF - LFR <= RWS
    If SeqNum <= LFR || SeqNum > LAF -> the frame is outside receiver's window
    If LFR < SeqNum <= LAF -> within the window

    -------------------------------------------------
    RWS = 1: receiver will not buffer any frames that arrive out of order

    RWS = SWS: buffer any frames from sender
   ```
   ``Selective acknowledgment: send Ack when frame arrived in any order``
### Ch 2.6
* promiscuous mode: delivers all received frames to the host
* all 1s in ethernet address is a broadcast address
* 1 at first and not all 1s is called multicast address (sending messages to subset of hosts)
  
---
---

# Chapter 3
* Switch: mechanism that allows us to interconnect links to form a larger network
* Switch is just forwarding packet to other nodes by using the table
  
## Datagram
* contains enough information (dest address) in packet so that it can reach the dest 
* connectionless: can send a packet anywhere at any time

## Virtual Circuit
* connecrtion-oriented model: need to set up virtual connection from source to dest before any data is sent
* each switch contains VC table and each entry in VC table contains virtual circuit identifier (VCI)
* outgoing vci in current switch is incomming vci for next switch

## Source routing
* place a order list of port in header (move the cur to front of list)

## Bridge
* A network bridge is a computer networking device that creates a single aggregate network from multiple communication networks or network segments.   
  ### learning bridge: each bridge inspect the source address in all frames and record it.

  
---
# Class Note  
* Centralize: use scheduler to pick who gets to transmit and when
<br>Positives: Scales well, efficient
<br>Disadvantages:
* Distributed: let participants to figure it out throught some mechanism
<br>Positives:
<br>Disadvantages:
* CSMA (Listen before sending)
* WIFI cant hear while sending (No collision detection)
* Hidden Termianl: A B C (a is sending to b and c is sending to b since a cannot hear c and c cannot hear a)
* Exposed Terminal: A <- B C -> D 
* MACA: broadcast a signal(CTS/RTS) to neighbors to tell them I am goinng to send a message  
`CTS: clear to send, RTS: request to send`
* Use binary exponetial everytime whenever there's a collision
* LTE(Long Term Evolution): protocal for 3.9G not real 4G
* GSM(Global System for Mobile Communication): 2G  
---
---
# Link Layer: (Frames)
Framing, Error detection and correction, Retranmissions, multiple access, switching

* Byte Count: Count byte length for each frame
* Byte Stuffing: inset flag byte
* Bit stuffing: after five 1s, insert 0
* PPP (Point to Point Protocol)

## Multiple Access
* Time Division Multiplexing (take turns on a fixed schedule)
* Frequency Division Multiplexing (user uses different frequency)

### multuple access algo:

|Type|usage|Positives|Negatives|Examples|
|---|---|---|---|---|
|Centralized|Use scheduler|Scales Well, efficient|Require management|Cellular networks|
|Distributed|figure it our through mechanism|good under low load|Scaling



### Encapsulation
|Layer|Control|Data|
|---|---|---|
|Network||↓
|Link|Spanning Tree|Ethernet Frame|
|Physical||Eletrical signals

---
---
# Network Layer
* Shortcoming of Switches: Don't scale up, Dont cross more thatn one link layer
* Routing: the process of deciding in which direction to send 
* Forwarding: the process of sending packet

### Networking Services
* Datagrams: connectionless Ex: postal letters, IP  
  each packets contain a dest address
* Connection-oriented: telephone call

### IP (Internet Protocal)
* Network layer of the internet, uses datagrams
* IPv4 carries 32 bit addresses

### Virtual Circuit Model (No bandwidth need be reserved)
* Three phases  
  1.Connection establishment  
  1. Data transfer  
  2. Connection teardown
 * MPLS (Multi-protocal label switching):
  packet carries short label

### Internetworking
* only one protocal for IP
* IPv4  
uses 32 bit addresses  
written in dotted quad (8 bits followed by dots)
* IP Prefixes: where address located (first L bit)  
Written in IP address/length  
where address is the lowest address in the prefix and length is prefix bits
* Host Networking  
  1. IP address
  2. Subnet Mask (Local address)  
  3. Gateway (routing)
  4. DNS Server  
* IPv6  
uses 128 bits  
with Stateless Autoconfiguration (SLAAC)
Process: with broadcast message, get prefix form router, attach mac to router Prefix.

### Summary
Bootstrapping (DHCP) -- Dynamic Host config protocal  
Finding Link Nodes (ARP)  
Really big packets (Fragmentationn)  
Errors in the network (ICMP)  
Running out of addresses (IPv6, NAT: Network address translation)

### Dynamic Host Configuration protocal (DHCP)
* client-server application
* leases ip address to nodes  
```Before configuration, node sends broadcast messages to all nodes on the network```

### Address Resolution Protocal (ARP)
* Node uses to map a local IP address to its link layer addresses

### Internnet Control Message Protocal (ICMP)
* companion protocal to IP
* Provides error report and testinng
* send error when router encounters an error

### Network Address Translation (NAT)
* map many private IP tp one public IP

|Layer|Protocal|
|---|---|
|7.Application|FTP,HTTP|
|6.Presentation|
|5.Session|
|4.Transport|TCP,UDP|
|3.Network| ARP,ICMP,IP|
|2.Link|Ethernet,MAC,PPP(Point2Point)|
|1.Pyhsical|DSL|

### Spanning Tree
1. Elect a root nnode of tree (lowest address)
2. Grow tree as shortest distance from root
3. Turn off ports for forwarding if they aren't on the spanning tree
