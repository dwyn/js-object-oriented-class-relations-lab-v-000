let driverId = 0;
class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId == this.id;
    });
  }
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}

let passengerId = 0;
class Passenger {
  constructor(name) {
    this.name = name;
    this.id = passengerId++;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId == this.id;
    });
  }
  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    });
  }
}

